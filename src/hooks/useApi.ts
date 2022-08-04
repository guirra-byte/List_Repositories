import axios from 'axios';
import { ApiResponse } from '../App';

export function getTestMessage(url: string) {

  const api = axios.get(url)
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(exception => { console.log("Deu erro!") });

  return api;
}