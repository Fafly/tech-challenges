import React, {useMemo} from 'react';
import {Text} from 'react-native';

import ListItem from '../ListItem/ListItem';
import {SurveyData} from '../../utils/types';

const formatDate = (answers: SurveyData['answers']) => {
  if (
    answers.some(value => typeof value === 'number') ||
    answers.some(value => typeof value === 'object')
  ) {
    return 'Error in the answers';
  }
  return (answers as Array<string>).map(date => {
    const stringToDate = new Date(date);
    return `${stringToDate.getDate()}/${
      stringToDate.getMonth() + 1
    }/${stringToDate.getFullYear()}`;
  });
};

type DateDetailProps = {
  data: SurveyData;
};

const DateDetail = ({data}: DateDetailProps) => {
  const formattedAnswers = useMemo(() => formatDate(data.answers), [data]);
  return (
    <>
      {typeof formattedAnswers !== 'string' ? (
        formattedAnswers.map((date, idx) => <ListItem key={idx} text={date} />)
      ) : (
        <Text>{formattedAnswers}</Text>
      )}
    </>
  );
};

export default DateDetail;
