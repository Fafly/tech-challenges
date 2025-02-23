import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AxiosResponse} from 'axios';
import React, {useEffect, useMemo, useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from './SurveyStyles';
import {RootStackParamList} from '../../App';
import ListItem from '../../components/ListItem/ListItem';
import {getSurvey} from '../../utils/api';
import {SurveyData} from '../../utils/types';

const Survey = ({
  navigation,
  route,
}: NativeStackScreenProps<RootStackParamList, 'Survey'>) => {
  const {id} = useMemo(() => {
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
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {surveysData &&
          surveysData.length > 0 &&
          surveysData.map((survey, idx) => (
            <ListItem
              key={idx}
              text={survey.label}
              onPress={() =>
                navigation.navigate('SurveyDetail', {
                  title: survey.label,
                  data: survey,
                })
              }
            />
          ))}
        {(!surveysData || surveysData.length <= 0) && (
          <View style={styles.iconContainer}>
            <Icon name="coffee" size={50} />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Survey;
