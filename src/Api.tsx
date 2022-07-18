// export const getTweets = async () => {
//   return fetch(
//     'https://338e-2a01-e0a-8b8-24e0-d4db-67b5-9e11-ddea.ngrok.io/tweets',
//   ).then(response => response.json());
// };

import {Tweet} from './Tweet';

const BASE_URI = 'https://rn-eu-perf-usual-suspects.herokuapp.com';
const fetchJson = (path: string) => {
  return fetch(`${BASE_URI}${path}`).then(response => response.json());
};

export const getUser = () => fetchJson('/user');
export const getUserStats = () => fetchJson('/user-stats');
export const getTweets = (): Tweet[] => fetchJson('/tweets');
export const getLikes = (): Tweet[] => fetchJson('/likes');
export const getMedia = (): Tweet[] => fetchJson('/medias');
export const getReplies = (): Tweet[] => fetchJson('/replies');
export const getBannerUri = (): string => `${BASE_URI}/banner.html`;
