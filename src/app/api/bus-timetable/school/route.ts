import { NextResponse } from "next/server";
import { SCHOOL_TO_INDUKWON_SCHEDULE } from "../constants";
import { getRemaining } from "../utils";

export const runtime = "edge";

export async function GET() {
  const remainingTime = getRemaining(SCHOOL_TO_INDUKWON_SCHEDULE);

  return NextResponse.json({
    indukwonToSchoolSchedule: SCHOOL_TO_INDUKWON_SCHEDULE,
    remainingTime,
  });
}