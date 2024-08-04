// src/api.js
import axios from "axios";

const API_KEY = "34a4ddf947742433a443dfcca3f1378a"; // Replace with your API key
const APP_ID = "4c284d92"; // Replace with your Application ID
const BASE_URL = "https://api.edamam.com"; // Replace with the base URL of your API

export const fetchRecipes = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        q: query,
        app_id: APP_ID,
        app_key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
};
