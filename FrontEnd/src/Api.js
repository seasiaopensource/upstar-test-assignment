/* eslint-disable */
import axios from "axios";
const BASE_URL = 'http://localhost:8069/api/v1/';

export default class Api {
    constructor(box = {}) {
        this.box = box || null;
    }
    static getData = async() => {
        const response = await axios({
        method: 'GET',
        url: `${BASE_URL}boxList`,
        headers: { 'Content-Type': 'application/json' },
      });
      return response.data.data 
    }
}
