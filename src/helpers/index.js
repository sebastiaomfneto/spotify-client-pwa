export function buildImageSrc([image] = []) {
  return image?.url;
}

export function buildGenresList(genres = []) {
  return genres.join(", ");
}

export function buildPopularity(followers = 0) {
  switch (true) {
    case followers > 80:
      return "Hot";
    case followers >= 60 && followers <= 79:
      return "Cool";
    case followers >= 30 && followers <= 59:
      return "Regular";
    case followers < 30:
      return "Underground";
    default:
      return "";
  }
}
