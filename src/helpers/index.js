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

export function buildArtist(artists = []) {
  if (artists.length > 1) {
    return "Various artists";
  }

  return artists[0]?.name;
}

export function buildAvailability(availableMarkets = []) {
  return availableMarkets.includes("BR")
    ? "Available in Brazil"
    : "Unavailable in Brazil";
}

export function buildDuration(ms = 0) {
  const min = (ms / 1000 / 60) << 0;
  const sec = (ms / 1000) % 60 << 0;

  return `${min}:${sec}`;
}
