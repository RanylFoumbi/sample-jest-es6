
import axios from "axios";

const getPhotosByAlbumId = async (id) => {
  const result = await axios({
    baseURL: 'https://jsonplaceholder.typicode.com/albums',
    method: 'get',
    url: `/${id}/photos?_limit=3`
  });
  console.log({ result });
  const { data } = result;
  return data;
};

export default getPhotosByAlbumId;