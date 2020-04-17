import { getItem } from "./StorageService";

export default class SpotifyService {
  headers = new Headers();

  constructor() {
    this.headers.append("Content-Type", "application/json");
    this.headers.append("Accept", "application/json");
    this.headers.append("Authorization", this._getAuthorizationToken());
  }

  getAlbums(term) {
    //const url = new URL("https://api.spotify.com/v1/search");
    const url = new URL("https://httpbin.org/get");
    url.searchParams.append("type", "album");
    url.searchParams.append("q", term);

    return fetch(url, { headers: this.headers })
      .then((res) => res.json())
      .then((data) => data?.albums?.items);
  }

  getAlbumById(id) {
    //const url = new URL(`https://api.spotify.com/v1/albums/${id}`);
    const url = new URL("https://httpbin.org/get");

    return fetch(url, { headers: this.headers }).then((res) => res.json());
  }

  getAlbumTracks(id) {
    //const url = new URL(`https://api.spotify.com/v1/albums/${id}/tracks`);
    const url = new URL("https://httpbin.org/get");

    return fetch(url, { headers: this.headers })
      .then((res) => res.json())
      .then((data) => data?.items);
  }

  getArtists(search) {
    //const url = new URL("https://api.spotify.com/v1/search");
    const url = new URL("https://httpbin.org/get");
    url.searchParams.append("type", "artist");
    url.searchParams.append("q", search);

    return fetch(url, { headers: this.headers })
      .then((res) => res.json())
      .then((data) => data?.albums?.items);
  }

  getArtistById(id) {
    //const url = new URL(`https://api.spotify.com/v1/artists/${id}`);
    const url = new URL("https://httpbin.org/get");

    return fetch(url, { headers: this.headers }).then((res) => res.json());
  }

  getArtistAlbums(id) {
    //const url = new URL(`https://api.spotify.com/v1/artists/${id}/albums`);
    const url = new URL("https://httpbin.org/get");

    return fetch(url, { headers: this.headers })
      .then((res) => res.json())
      .then((data) => data.items);
  }

  getTracks(search) {
    //const url = new URL("https://api.spotify.com/v1/search");
    const url = new URL("https://httpbin.org/get");
    url.searchParams.append("type", "track");
    url.searchParams.append("q", search);

    return fetch(url, { headers: this.headers })
      .then((res) => res.json())
      .then((data) => data?.tracks?.items);
  }

  getTrackById(id) {
    //const url = new URL(`https://api.spotify.com/v1/tracks/${id}`);
    const url = new URL("https://httpbin.org/get");

    return fetch(url, { headers: this.headers }).then((res) => res.json());
  }

  _getAuthorizationToken() {
    const token = getItem("token");

    if (token) {
      return `${token.token_type} ${token.access_token}`;
    }
  }
}
