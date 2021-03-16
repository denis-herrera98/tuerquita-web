import axios from "axios";

export const getTeamById = async (teamId: string | string[]) => {
  const url = `http://localhost:5001/tuerquita-d71c3/us-central1/api/teams/${teamId}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getLastestTeams = async () => {
  const url =
    "http://localhost:5001/tuerquita-d71c3/us-central1/api/teams/search/newest";

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getSummonerData = async (name: string, region: string) => {
  axios.defaults.headers.common["Authorization"] =
    "Bearer U$nDaSfHzhBsHTGUGDZvcLyN65Cn4ruWBGDZvc2b$05$nDaSfHLyevYNN65Cn4ruWBDW7uCx0sbRWpLkBj";

  const url = `http://localhost:5001/tuerquita-d71c3/us-central1/api/summoners/lolapi/${region}/${name}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
