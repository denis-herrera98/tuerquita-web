export function toTimestamp() {
  const CURRENT_HOUR = new Date();
  CURRENT_HOUR.setHours(CURRENT_HOUR.getHours() - 1);
  console.log(CURRENT_HOUR.getTime().toString());
  return CURRENT_HOUR.getTime();
}
