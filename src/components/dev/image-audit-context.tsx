"use client";

/**
 * Image Audit Context — dev tool for visual image review.
 * Persists state in localStorage so it survives navigation/refresh.
 * Remove this file and its usages before final production launch.
 */

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";

interface ImageAuditContextValue {
  showAudit: boolean;
  toggle: () => void;
}

const ImageAuditContext = createContext<ImageAuditContextValue>({
  showAudit: false,
  toggle: () => {},
});

const STORAGE_KEY = "hss_image_audit_v1";

export function ImageAuditProvider({ children }: { children: ReactNode }) {
  const [showAudit, setShowAudit] = useState(false);

  useEffect(() => {
    try {
      setShowAudit(localStorage.getItem(STORAGE_KEY) === "true");
    } catch {}
  }, []);

  const toggle = useCallback(() => {
    setShowAudit((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(STORAGE_KEY, String(next));
      } catch {}
      return next;
    });
  }, []);

  return (
    <ImageAuditContext.Provider value={{ showAudit, toggle }}>
      {children}
    </ImageAuditContext.Provider>
  );
}

export function useImageAudit() {
  return useContext(ImageAuditContext);
}
