import { NextResponse } from "next/server";
import { INDUKWON_TO_SCHOOL_SCHEDULE } from "../constants";
import { getRemaining } from "../utils";

export const runtime = "edge";

export async function GET() {
  const remainingTime = getRemaining(INDUKWON_TO_SCHOOL_SCHEDULE);

  return NextResponse.json({
    indukwonToSchoolSchedule: INDUKWON_TO_SCHOOL_SCHEDULE,
    remainingTime,
  });
}