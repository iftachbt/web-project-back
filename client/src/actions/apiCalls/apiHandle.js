import axios from "axios";

const errorHandler = (err) => {
  console.log(err);
  return "err";
};
async function getUrl() {
  if (process.env.REACT_APP_PROD === "PROD") {
    const publicIPResponse = await axios.get("https://api.ipify.org?format=json");
    return "http://" + publicIPResponse.data.ip + ":5000/";
  } else return process.env.REACT_APP_SERVER;
}
export async function sendPost(route, body) {
  try {
    let URL = await getUrl();
    console.log(URL);
    const res = await axios.post(URL + route, body, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    return res.data;
  } catch (err) {
    errorHandler(err);
  }
}
export async function sendDelete(route) {
  let URL = await getUrl();
  console.log(URL);
  try {
    const res = await axios.delete(URL + route, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });

    return res.data;
  } catch (err) {
    errorHandler(err);
  }
}
export async function sendUpdate(route, body) {
  let URL = await getUrl();
  console.log(URL);
  try {
    const res = await axios.put(URL + route, body, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });

    return res.data;
  } catch (err) {
    errorHandler(err);
  }
}

export async function sendGet(route) {
  let URL = await getUrl();
  console.log(URL);
  try {
    const res = await axios.get(URL + route, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    return res.data;
  } catch (err) {
    errorHandler(err);
  }
}
