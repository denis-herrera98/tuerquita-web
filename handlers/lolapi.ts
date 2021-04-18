import axios from "axios";
import { LkfTeam } from "../interfaces/lkfteam";
import { Summoner } from "../redux/summoner/summonerReducer";

const BASE_URL = process.env.NEXT_PUBLIC_DOMAIN;

export const getTeamById = async (
  teamId: string,
  discordid: string
): Promise<LkfTeam> => {
  const url = `${BASE_URL}teams/${teamId}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const getLastestTeams = async (): Promise<any> => {
  const url = `${BASE_URL}teams/search/newest`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const getSummonerData = async (
  name: string,
  region: string
): Promise<any> => {
  axios.defaults.headers.common["Authorization"] =
    "Bearer U$nDaSfHzhBsHTGUGDZvcLyN65Cn4ruWBGDZvc2b$05$nDaSfHLyevYNN65Cn4ruWBDW7uCx0sbRWpLkBj";

  const url = `${BASE_URL}summoners/lolapi/${region}/${name}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const addSummonerRequest = async (
  summoner: Summoner,
  docId: string
): Promise<boolean> => {
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
): Promise<void> => {
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
): Promise<boolean> => {
  axios.defaults.headers.common["Authorization"] =
    "Bearer U$nDaSfHzhBsHTGUGDZvcLyN65Cn4ruWBGDZvc2b$05$nDaSfHLyevYNN65Cn4ruWBDW7uCx0sbRWpLkBj";

  const url = `${BASE_URL}teams/reject`;

  try {
    await axios.post(url, { summonerId, lkfteamId });
    return true;
  } catch (e) {
    console.error(e.response);
    return false;
  }
};

export const desactiveParty = async (lkfteamId: string): Promise<void> => {
  axios.defaults.headers.common["Authorization"] =
    "Bearer U$nDaSfHzhBsHTGUGDZvcLyN65Cn4ruWBGDZvc2b$05$nDaSfHLyevYNN65Cn4ruWBDW7uCx0sbRWpLkBj";

  const url = `${BASE_URL}teams/desactive`;

  try {
    await axios.post(url, { lkfteamId });
  } catch (e) {
    console.error(e.response);
  }
};
