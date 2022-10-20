export const getIdFromUrl = (url) => {
  return url.split("/")[6];
};
export const formatName = (name) => {
  return name[0].toUpperCase() + name.slice(1);
};
