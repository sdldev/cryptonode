import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function extractSegmentURL(path: string) {
  if (!path) return "";
  if (path === "/") return null;
  return path.split("/")[1];
}
export function capitalizer(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}