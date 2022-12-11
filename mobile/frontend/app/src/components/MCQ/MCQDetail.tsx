import React, {useMemo} from 'react';
import {Text} from 'react-native';

import ListItem from '../ListItem/ListItem';
import {SurveyData} from '../../utils/types';

const formatAnswers = (
  answers: SurveyData['answers'],
  options: SurveyData['options'],
) => {
  if (
    answers.some(value => typeof value === 'number') ||
    answers.some(value => typeof value === 'string') ||
    !options
  ) {
    return 'Error in the answers';
  }
  // (answers as Array<boolean[]>)
  const optionsWithTimes = options.map(option => ({
    label: option,
    times: 0,
  }));
  (answers as Array<boolean[]>).forEach(answer => {
    answer.forEach((value, idx) => {
      if (value) {
        optionsWithTimes[idx].times++;
      }
    });
  });

  return optionsWithTimes.map(
    option => `${option.label}: ${option.times} times`,
  );
};

type DateDetailProps = {
  data: SurveyData;
};

const DateDetail = ({data}: DateDetailProps) => {
  const formattedAnswers = useMemo(
    () => formatAnswers(data.answers, data.options),
    [data],
  );
  return (
    <>
      {typeof formattedAnswers !== 'string' ? (
        formattedAnswers.map((info, idx) => <ListItem key={idx} text={info} />)
      ) : (
        <Text>{formattedAnswers}</Text>
      )}
    </>
  );
};

export default DateDetail;
