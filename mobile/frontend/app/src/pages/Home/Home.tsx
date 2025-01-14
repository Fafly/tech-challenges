import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AxiosResponse} from 'axios';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from './HomeStyles';
import {RootStackParamList} from '../../App';
import ListItem from '../../components/ListItem/ListItem';
import {getSurveys} from '../../utils/api';
import {Survey} from '../../utils/types';

const Home = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Home'>) => {
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
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {surveys &&
          surveys.length > 0 &&
          surveys.map(survey => (
            <ListItem
              key={survey.id}
              text={survey.name}
              onPress={() =>
                navigation.navigate('Survey', {
                  id: survey.id,
                  title: survey.name,
                })
              }
            />
          ))}
        {(!surveys || surveys.length <= 0) && (
          <View style={styles.iconContainer}>
            <Icon name="coffee" size={50} />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
