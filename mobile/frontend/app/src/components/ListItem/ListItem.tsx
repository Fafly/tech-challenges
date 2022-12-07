import React from 'react';
import {Text, View} from 'react-native';

import styles from './ListItemStyles';

type ListItemProps = {
  text?: string;
};

const ListItem = ({text = ''}: ListItemProps) => {
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  );
};

export default ListItem;
