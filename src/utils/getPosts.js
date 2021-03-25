import axios from 'axios';

export default async function getPosts() {
  const URL = process.env.REACT_APP_URL;
  const TOKEN = process.env.REACT_APP_SECRET_KEY_TOKEN;

  const request = await axios.post(URL, {
    token: TOKEN,
  });
  const data = await request.data;
  return data.posts;
}