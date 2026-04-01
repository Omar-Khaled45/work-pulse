export const capitalize = (str, isFullStop = null) => {
  return `${str.charAt(0).toUpperCase() + str.slice(1, str.length)}${isFullStop === "full-stop" && str.charAt(str.length - 1) !== "." ? "." : ""}`;
};
