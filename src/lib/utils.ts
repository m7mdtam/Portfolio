import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Human-readable duration between a start month and an end month (defaults to
 * now). Accepts "YYYY-MM" strings. Formats as "N months" / "1 year" /
 * "1 year 2 months" so ongoing roles never go stale.
 */
export function formatDuration(startISO: string, endISO?: string): string {
  const [startYear, startMonth] = startISO.split("-").map(Number)
  const endDate = endISO ? new Date(`${endISO}-01`) : new Date()
  const endYear = endDate.getFullYear()
  const endMonth = endDate.getMonth() + 1

  let months = (endYear - startYear) * 12 + (endMonth - startMonth)
  if (months < 1) months = 1

  const years = Math.floor(months / 12)
  const remMonths = months % 12
  const parts: string[] = []
  if (years) parts.push(`${years} year${years > 1 ? "s" : ""}`)
  if (remMonths) parts.push(`${remMonths} month${remMonths > 1 ? "s" : ""}`)
  return parts.join(" ")
}
