import axios from "axios";
import { Summoner } from "../redux/summoner/summonerReducer";

const BASE_URL = process.env.NEXT_PUBLIC_DOMAIN;
console.log(BASE_URL);

export const getTeamById = async (teamId: string | string[]) => {
  const url = `${BASE_URL}teams/${teamId}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const getLastestTeams = async () => {
  const url = `${BASE_URL}teams/search/newest`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const getSummonerData = async (name: string, region: string) => {
  axios.defaults.headers.common["Authorization"] =
    "Bearer U$nDaSfHzhBsHTGUGDZvcLyN65Cn4ruWBGDZvc2b$05$nDaSfHLyevYNN65Cn4ruWBDW7uCx0sbRWpLkBj";

  const url = `${BASE_URL}summoners/lolapi/${region}/${name}`;
  console.log(url);

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const addSummonerRequest = async (summoner: Summoner, docId: string) => {
  axios.defaults.headers.common["Authorization"] =
    "Bearer U$nDaSfHzhBsHTGUGDZvcLyN65Cn4ruWBGDZvc2b$05$nDaSfHLyevYNN65Cn4ruWBDW7uCx0sbRWpLkBj";

  const url = `${BASE_URL}teams/request`;

  try {
    await axios.post(url, { summoner, docId });
  } catch (e) {
    console.error(e);
    if (e.response.data.error == "Summoner was rejected") return true;
  }
};

export const updateSummonerRequest = async (
  summonerId: string,
  lkfteamId: string,
  path: string
) => {
  axios.defaults.headers.common["Authorization"] =
    "Bearer U$nDaSfHzhBsHTGUGDZvcLyN65Cn4ruWBGDZvc2b$05$nDaSfHLyevYNN65Cn4ruWBDW7uCx0sbRWpLkBj";

  const url = `${BASE_URL}teams/${path}`;

  try {
    await axios.post(url, { summonerId, lkfteamId });
  } catch (e) {
    console.error(e);
  }
};

export const rejectSummonerRequest = async (
  summonerId: string,
  lkfteamId: string
) => {
  axios.defaults.headers.common["Authorization"] =
    "Bearer U$nDaSfHzhBsHTGUGDZvcLyN65Cn4ruWBGDZvc2b$05$nDaSfHLyevYNN65Cn4ruWBDW7uCx0sbRWpLkBj";

  const url = `${BASE_URL}teams/reject`;

  try {
    await axios.post(url, { summonerId, lkfteamId });
  } catch (e) {
    console.error(e.response);
  }
};
