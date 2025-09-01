"use client";
import { useEffect } from "react";
import mixpanel from "mixpanel-browser";
import { usePathname, useSearchParams } from "next/navigation";

let inited = false;

export default function Analytics() {
  const pathname = usePathname();
  const search = useSearchParams();

  useEffect(() => {
    if (inited) return;
    const token = "10495bf09ffdd7f21d99423b775df6d9";
    if (!token) return;
    mixpanel.init(token, { track_pageview: false, persistence: "localStorage" });
    inited = true;
  }, []);

  useEffect(() => {
    if (!inited) return;
    mixpanel.track("page_view", { path: pathname, query: search?.toString() || "" });
  }, [pathname, search]);

  return null;
}
