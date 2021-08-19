import Axios from 'axios';

import * as StorageService from './StorageService';

const axios = Axios.create({
  baseURL: 'https://api.spotify.com/v1',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

axios.interceptors.request.use((req) => {
  const token = StorageService.getItem('token');

  if (token) {
    req.headers['Authorization'] = `${token.token_type} ${token.access_token}`;
  }

  return req;
});

axios.interceptors.response.use(undefined, (error) => {
  if (error.response.status === 401) {
    StorageService.removeItem('token');

    window.location.href = '/signin';
  }

  return Promise.reject(error);
});

/**
 * Get albums by search string
 *
 * @param {string} search
 * @returns {Promise<object[]>}
 */
export async function getAlbums(search) {
  return axios
    .get('/search', { params: { type: 'album', q: search } })
    .then((res) => res.data?.albums?.items);
}

/**
 * Get album by id
 *
 * @param {string} id
 * @returns {Promise<object | undefined>}
 */
export async function getAlbumById(id) {
  return axios.get(`albums/${id}`).then((res) => res.data);
}

/**
 * Get tracks from album
 *
 * @param {string} albumId
 * @returns {Promise<object[]>}
 */
export async function getAlbumTracks(albumId) {
  return axios.get(`albums/${albumId}/tracks`).then((res) => res.data?.items);
}

/**
 * Get artists by search string
 *
 * @param {string} search
 * @returns {Promise<object[]>}
 */
export async function getArtists(search) {
  return axios
    .get('search', { params: { type: 'artist', q: search } })
    .then((res) => res.data?.artists?.items);
}

/**
 * Get artist by id
 *
 * @param {string} id
 * @returns {Promise<object | undefined>}
 */
export async function getArtistById(id) {
  return axios.get(`artists/${id}`).then((res) => res.data);
}

/**
 * Get albums from artist
 *
 * @param {string} artistId
 * @returns {Promise<object[]>}
 */
export async function getArtistAlbums(artistId) {
  return axios.get(`artists/${artistId}/albums`).then((res) => res.data.items);
}

/**
 * Get tracks by search string
 *
 * @param {string} search
 * @returns {Promise<object[]>}
 */
export async function getTracks(search) {
  return axios
    .get('/search', { params: { type: 'track', q: search } })
    .then((res) => res.data?.tracks?.items);
}

/**
 * Get track by id
 *
 * @param {string} id
 * @returns {Promise<object | undefined>}
 */
export async function getTrackById(id) {
  return axios.get(`tracks/${id}`).then((res) => res.data);
}
