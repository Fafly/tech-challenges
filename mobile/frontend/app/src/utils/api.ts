import axios from 'axios';

export const getSurveys = () => {
  return axios.get('/api/surveys');
};

export const getSurvey = (id: number) => {
  return axios.get(`/api/survey/${id}`);
};
