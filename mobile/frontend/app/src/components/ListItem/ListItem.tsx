import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './ListItemStyles';

type ListItemProps = {
  text?: string;
};

const ListItem = ({text = ''}: ListItemProps) => {
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Icon name="right" size={20} />
    </View>
  );
};

export default ListItem;
