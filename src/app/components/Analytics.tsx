"use client";
import { useEffect } from "react";
import mixpanel from "mixpanel-browser";
import { usePathname, useSearchParams } from "next/navigation";

let inited = false;

export default function Analytics() {
  const pathname = usePathname();
  const search = useSearchParams();

  // 최초 1회 초기화 (dev StrictMode 중복 마운트 대비)
  useEffect(() => {
    if (inited) return;
    const token = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;
    if (!token) return;
    mixpanel.init(token, { track_pageview: false, persistence: "localStorage" });
    inited = true;
  }, []);

  // 라우트 변경마다 페이지뷰
  useEffect(() => {
    if (!inited) return;
    mixpanel.track("page_view", { path: pathname, query: search?.toString() || "" });
  }, [pathname, search]);

  return null;
}