export const calculateData = (date) => {
  const time = Math.round((Date.now() - +new Date(date)) / 60000);
  if (time < 10) {
    return "Just now";
  } else if (time < 60) {
    return time + " min ago";
  } else if (time < 1440) {
    return Math.round(time / 60) + " hour ago";
  } else {
    return Math.round(time / 60 / 24) + " day ago";
  }
};
