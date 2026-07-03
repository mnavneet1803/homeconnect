import { siteConfig } from "@/config/site";

export function HeroHouseIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[480px]" aria-hidden="true">
      <svg viewBox="0 0 480 480" fill="none" className="h-full w-full">
        <circle cx="240" cy="240" r="200" stroke="rgba(246,241,229,0.14)" strokeDasharray="3 7" />
        <g stroke="#DBB459" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M120 260 240 160 360 260" />
          <path d="M150 240v130a10 10 0 0 0 10 10h160a10 10 0 0 0 10-10V240" />
          <rect x="205" y="300" width="70" height="80" />
          <path d="M180 300h35v50h-35zM265 300h35v50h-35z" opacity="0.7" />
        </g>
        <g stroke="rgba(246,241,229,0.5)" strokeWidth="1" strokeDasharray="2 5">
          <path d="M120 260 120 400" />
          <path d="M360 260 360 400" />
          <path d="M120 400 360 400" />
        </g>
        <text
          x="150"
          y="418"
          fill="rgba(246,241,229,0.45)"
          fontFamily="IBM Plex Mono, monospace"
          fontSize="11"
        >
          28&apos; 0&quot;
        </text>
        <g stroke="#DBB459" strokeWidth="1.4" fill="none">
          <circle cx="360" cy="150" r="26" strokeDasharray="2 4" />
          <path d="M348 150h24M360 138v24" strokeWidth="1.6" />
        </g>
        <g stroke="rgba(246,241,229,0.35)" strokeWidth="1">
          <circle cx="90" cy="120" r="3" fill="#DBB459" stroke="none" />
          <circle cx="410" cy="330" r="3" fill="#DBB459" stroke="none" />
        </g>
      </svg>

      <div className="absolute -right-[4%] -top-[6%] flex h-[118px] w-[118px] scale-0 items-center justify-center motion-safe:animate-stamp-in">
        <svg viewBox="0 0 118 118" className="h-full w-full">
          <circle cx="59" cy="59" r="54" fill="none" stroke="#DBB459" strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="59" cy="59" r="44" fill="none" stroke="#DBB459" strokeWidth="1" />
          <text
            x="59"
            y="50"
            textAnchor="middle"
            fill="#F6F1E5"
            fontFamily="IBM Plex Mono, monospace"
            fontSize="10.5"
            letterSpacing="1"
          >
            LICENSED
          </text>
          <text
            x="59"
            y="65"
            textAnchor="middle"
            fill="#F6F1E5"
            fontFamily="IBM Plex Mono, monospace"
            fontSize="10.5"
            letterSpacing="1"
          >
            &amp; INSURED
          </text>
          <text
            x="59"
            y="80"
            textAnchor="middle"
            fill="#DBB459"
            fontFamily="IBM Plex Mono, monospace"
            fontSize="8"
          >
            EST. 2016
          </text>
        </svg>
      </div>

      <div className="absolute -left-[6%] bottom-[6%] flex translate-y-4 items-center gap-3 rounded-md bg-paper px-4 py-3.5 text-ink-900 opacity-0 shadow-lg motion-safe:animate-card-in">
        <div className="flex gap-0.5 text-brass-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
              <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.5 1.3 6.5L12 17l-5.9 3.4 1.3-6.5-4.9-4.5 6.6-.8L12 2.5z" />
            </svg>
          ))}
        </div>
        {/* <div>
          <p className="font-display text-lg font-semibold">{siteConfig.reviews.googleRating} / 5</p>
          <p className="font-mono text-[11.5px] text-ink-500">
            {siteConfig.reviews.googleReviewCount}+ Edmonton reviews
          </p>
        </div> */}
      </div>
    </div>
  );
}
