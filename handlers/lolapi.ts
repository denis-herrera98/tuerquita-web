import axios from "axios";

export const getTeamById = async (teamId: string | string[]) => {
  const url = `http://localhost:5001/tuerquita-d71c3/us-central1/api/teams/${teamId}`;
  console.log("getTeamById");

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

  console.log("getLastestTeams");
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
