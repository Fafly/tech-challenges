import axios from 'axios';

export const getSurveys = () => {
  return axios.get('/api/surveys');
};

export const getSurvey = (id: number) => {
  if (!id) {
    return null;
  }
  return axios.get(`/api/survey/${id}`);
};
