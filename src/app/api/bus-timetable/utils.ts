import { DateTime } from "luxon";

export const getRemaining = (schedule: string[]) => {
  const now = DateTime.now().setZone("Asia/Seoul");

  const diffs = schedule
    .map((t) => {
      const d = DateTime.fromFormat(t, "HH:mm", { zone: "Asia/Seoul" });
      return d.diff(now, "minutes").minutes;
    })
    .filter((m) => m >= 0)
    .sort((a, b) => a - b);

  const fmt = (m: number) => {
    if (m < 1) return "곧 출발";
    const h = Math.floor(m / 60);
    const mm = Math.floor(m % 60);
    if (h === 0) return `${mm}분`;
    if (mm === 0) return `${h}시간`;
    return `${h}시간 ${mm}분`;
  };

  if (diffs.length === 0) {
    return { current: null, next: null };
  }

  return {
    current: fmt(diffs[0]),
    next: diffs[1] !== undefined ? fmt(diffs[1]) : null,
  };
};