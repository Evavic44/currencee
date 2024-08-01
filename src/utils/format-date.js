export function formatDate(date) {
  const parsedDate = new Date(date);
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(isNaN(parsedDate.getTime()) ? new Date() : parsedDate);
}
