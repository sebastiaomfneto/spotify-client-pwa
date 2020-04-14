const headers = new Headers();
headers.append("Accept", "application/json");

export function getAlbums(term) {
  //const url = new URL("https://api.spotify.com/v1/search");
  const url = new URL("https://httpbin.org/get");
  url.searchParams.append("type", "album");

  if (term) {
    url.searchParams.append("q", term);
  }

  return fetch(url, { headers })
    .then((res) => res.json())
    .then((data) => data?.albums?.items);
}

export function getAlbumById(id) {
  //const url = new URL(`https://api.spotify.com/v1/albums/${id}`);
  const url = new URL("https://httpbin.org/get");

  return fetch(url, { headers }).then((res) => res.json());
}

export function getAlbumTracks(id) {
  //const url = new URL(`https://api.spotify.com/v1/albums/${id}/tracks`);
  const url = new URL("https://httpbin.org/get");

  return fetch(url, { headers })
    .then((res) => res.json())
    .then((data) => data?.items);
}

export function getArtists(search) {
  //const url = new URL("https://api.spotify.com/v1/search");
  const url = new URL("https://httpbin.org/get");
  url.searchParams.append("type", "artist");

  if (search) {
    url.searchParams.append("q", search);
  }

  return fetch(url, { headers })
    .then((res) => res.json())
    .then((data) => data?.albums?.items);
}

export function getArtistById(id) {
  //const url = new URL(`https://api.spotify.com/v1/artists/${id}`);
  const url = new URL("https://httpbin.org/get");

  return fetch(url, { headers }).then((res) => res.json());
}

export function getArtistAlbums(id) {
  //const url = new URL(`https://api.spotify.com/v1/artists/${id}/albums`);
  const url = new URL("https://httpbin.org/get");

  return fetch(url, { headers })
    .then((res) => res.json())
    .then((data) => data.items);
}

export function getTracks(search) {
  //const url = new URL("https://api.spotify.com/v1/search");
  const url = new URL("https://httpbin.org/get");
  url.searchParams.append("type", "track");

  if (search) {
    url.searchParams.append("q", search);
  }

  return fetch(url, { headers })
    .then((res) => res.json())
    .then((data) => data?.tracks?.items);
}

export function getTrackById(id) {
  //const url = new URL(`https://api.spotify.com/v1/tracks/${id}`);
  const url = new URL("https://httpbin.org/get");

  return fetch(url, { headers }).then((res) => res.json());
}
