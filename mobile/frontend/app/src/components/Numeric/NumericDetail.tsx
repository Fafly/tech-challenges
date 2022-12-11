import React from 'react';
import {Text} from 'react-native';

import {SurveyData} from '../../utils/types';

const calculateAverage = (answers: SurveyData['answers']) => {
  if (
    answers.some(value => typeof value === 'string') ||
    answers.some(value => typeof value === 'object')
  ) {
    return 'Error in the answers';
  }
  const sum = (answers as Array<number>).reduce(
    (accumulator, currentValue) => accumulator + currentValue,
  );
  return sum / answers.length;
};

type NumericDetailProps = {
  data: SurveyData;
};

const NumericDetail = ({data}: NumericDetailProps) => {
  return (
    <>
      <Text>The average of the answers</Text>
      <Text>{calculateAverage(data.answers)}</Text>
    </>
  );
};

export default NumericDetail;
