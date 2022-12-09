import React from 'react';
import {Pressable, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './ListItemStyles';

type ListItemProps = {
  text?: string;
  onPress?: () => void;
};

const ListItem = ({text = '', onPress}: ListItemProps) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text>{text}</Text>
      <Icon name="right" size={20} />
    </Pressable>
  );
};

export default ListItem;
