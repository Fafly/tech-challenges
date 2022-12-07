/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { getSurveys } from "./utils/api";
import { Survey } from "./utils/types";

const Home = () => {
  const [surveys, setSurveys] = useState<Survey[]>([]);

  useEffect(() => {
    getSurveys()
      .then((response: AxiosResponse<Survey[]>) => {
        if (!response.data || response.data.length <= 0) return;
        setSurveys(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
      >
        <View>
          <Text>Surveys</Text>
        </View>
        {surveys && surveys.length > 0 && surveys.map((survey) => (
          <View key={survey.id}>
            <Text>{survey.name}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
