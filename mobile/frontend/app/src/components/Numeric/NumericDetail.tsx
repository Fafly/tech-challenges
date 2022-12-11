import React from 'react';
import {Text, View} from 'react-native';

import styles from './NumericDetailStyles';
import {SurveyData} from '../../utils/types';

export const calculateAverage = (answers: SurveyData['answers']) => {
  if (
    answers.some(value => typeof value === 'string') ||
    answers.some(value => typeof value === 'object')
  ) {
    return 'Error in the answers';
  }
  const sum = (answers as Array<number>).reduce(
    (accumulator, currentValue) => accumulator + currentValue,
  );
  return (sum / answers.length).toFixed(2);
};

type NumericDetailProps = {
  data: SurveyData;
};

const NumericDetail = ({data}: NumericDetailProps) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>The average of the answers</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.result}>{calculateAverage(data.answers)}</Text>
      </View>
    </>
  );
};

export default NumericDetail;
