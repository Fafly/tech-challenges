/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {AxiosResponse} from 'axios';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';

import styles from './HomeStyles';

import ListItem from '../../components/ListItem/ListItem';
import {getSurveys} from '../../utils/api';
import {Survey} from '../../utils/types';

const Home = () => {
  const [surveys, setSurveys] = useState<Survey[]>([]);

  useEffect(() => {
    getSurveys()
      .then((response: AxiosResponse<Survey[]>) => {
        if (!response.data || response.data.length <= 0) {
          return;
        }
        setSurveys(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.title}>Surveys</Text>
      </View>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {surveys &&
          surveys.length > 0 &&
          surveys.map(survey => (
            <ListItem key={survey.id} text={survey.name} />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
