import type { Metadata } from "next";
import { NextResponse } from "next/server";
import { leadFormSchema } from "@/lib/validations/lead";
import { submitLeadToCrm } from "@/lib/crm/submit-lead";
import { siteConfig } from "@/config/site";
import type { LeadSubmissionResult } from "@/types/lead";

export async function POST(request: Request): Promise<NextResponse<LeadSubmissionResult>> {
  try {
    const body = await request.json();
    const parsed = leadFormSchema.safeParse(body);

    if (!parsed.success) {
      const errors = parsed.error.flatten().fieldErrors as Record<string, string[]>;
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors,
        },
        { status: 422 }
      );
    }

    const { source, ...lead } = parsed.data;
    const leadId = crypto.randomUUID();

    const crmResult = await submitLeadToCrm(lead, leadId, source);

    if (crmResult.error && process.env.NODE_ENV === "production") {
      console.error("[leads] CRM delivery failed:", crmResult.error, leadId);
    }

    return NextResponse.json({
      success: true,
      leadId,
      message: `Your request has been received. Expect contact within ${siteConfig.business.matchSlaHours} hours.`,
      crmDelivered: crmResult.delivered,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again or call us.",
      },
      { status: 500 }
    );
  }
}
