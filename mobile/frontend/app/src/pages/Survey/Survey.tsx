import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AxiosResponse} from 'axios';
import React, {useEffect, useMemo, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';

import {RootStackParamList} from '../../App';
import ListItem from '../../components/ListItem/ListItem';
import {getSurvey} from '../../utils/api';
import {SurveyData} from '../../utils/types';

const Survey = ({
  route,
}: NativeStackScreenProps<RootStackParamList, 'Survey'>) => {
  const {id, title} = useMemo(() => {
    return route.params;
  }, [route.params]);
  const [surveysData, setSurveyData] = useState<SurveyData[]>([]);

  useEffect(() => {
    getSurvey(id)
      .then((response: AxiosResponse<SurveyData[]>) => {
        if (!response.data || response.data.length <= 0) {
          return;
        }
        setSurveyData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  return (
    <SafeAreaView>
      <View>
        <Text>{title}</Text>
      </View>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {surveysData &&
          surveysData.length > 0 &&
          surveysData.map((survey, idx) => (
            <ListItem key={idx} text={survey.label} />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Survey;
