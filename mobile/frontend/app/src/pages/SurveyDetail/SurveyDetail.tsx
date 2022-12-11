import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useMemo} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import {RootStackParamList} from '../../App';
import NumericDetail from '../../components/Numeric/NumericDetail';
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
        <NumericDetail data={data} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SurveyDetail;
