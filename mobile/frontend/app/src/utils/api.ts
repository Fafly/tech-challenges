import axios from 'axios';

export const getSurveys = () => {
  return axios.get('/api/surveys');
}

export const getSurvey = (id: number) => {
  if (!id) return;
  return axios.get(`/api/survey/${id}`);
}
