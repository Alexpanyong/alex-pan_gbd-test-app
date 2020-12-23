import { API_ENDPOINT_BOOKS } from "../config/config";
import sampleData from "../../data/sampleData.json";
import axios from 'axios';

export const fetchBooksData = async () => {
  try {
    const response = await axios.get(API_ENDPOINT_BOOKS);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("Fetch books data failed, use local sample data --", err);
    return sampleData;
  }
};
