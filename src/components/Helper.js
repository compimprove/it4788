/**
 * @param {Date} time
 * @returns {string}
 */
export function timeToString(time) {
  if (time) {
    let deltaSecond = (new Date().getTime() - time.getTime()) / 1000;
    if (deltaSecond < 60) {
      return "Now"
    } else if (deltaSecond < 3600) {
      return Math.floor(deltaSecond / 60).toString() + " m";
    } else if (deltaSecond < 86400) {
      return Math.floor(deltaSecond / 3600).toString() + " h";
    } else return time.toLocaleString();
  }
  return '';
}