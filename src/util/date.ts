import { format, register } from "timeago.js";
import koLocale from "timeago.js/lib/lang/ko";

register("ko", koLocale);

export function formatAgo(date: string, lang?: "es_US" | "ko"): string {
  return format(date, lang ? lang : "es_US");
}
