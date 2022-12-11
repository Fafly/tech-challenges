import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useMemo} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import {RootStackParamList} from '../../App';
import NumericDetail from '../../components/Numeric/NumericDetail';
import DateDetail from '../../components/Date/DateDetail';
import MCQDetail from '../../components/MCQ/MCQDetail';
import {SurveyType} from '../../utils/types';

const SurveyDetail = ({
  route,
}: NativeStackScreenProps<RootStackParamList, 'SurveyDetail'>) => {
  const {data} = useMemo(() => {
    return route.params;
  }, [route.params]);

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {data.type === SurveyType.Numeric && <NumericDetail data={data} />}
        {data.type === SurveyType.Date && <DateDetail data={data} />}
        {data.type === SurveyType.MCQ && <MCQDetail data={data} />}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SurveyDetail;
