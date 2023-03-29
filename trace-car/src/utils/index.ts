export const getRandomNum = (max = 10) => {
  return Math.floor(Math.random() * max)
}

export const secondsToTimeFormat = (seconds: number) => {
  let isoTime = new Date(seconds * 1000).toISOString();
  let yyyymmss = isoTime.slice(0, 10);
  let hh = (Number(isoTime.slice(11, 13)) + 9) % 24;
  let mmss = isoTime.slice(14, 19);
  return `${yyyymmss} ${hh}:${mmss}`;
};