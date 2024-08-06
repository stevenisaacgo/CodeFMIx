import axios from 'axios';

const BASE_URL = 'https://www.preguntapi.dev/api/categories';

export const fetchQuestions = async (category, level) => {
  try {
    const response = await axios.get(`${BASE_URL}/${category}?level=${level}&limit=10`);
    return response.data;
  } catch (error) {
    console.error('Error fetching questions:', error);
    throw error;
  }
};
