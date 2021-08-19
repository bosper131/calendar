import axios from "axios";

const myAxios = async (myApi) => {
  const url = myApi;
  const req = axios.get(url);
  const res = await req;
  return res;
};
export default myAxios;
