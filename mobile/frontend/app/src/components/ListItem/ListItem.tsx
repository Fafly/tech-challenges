import React from 'react';
import {Pressable, Text, View} from 'react-native';
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
      {onPress && (
        <View style={styles.iconContainer}>
          <Icon name="right" size={20} />
        </View>
      )}
    </Pressable>
  );
};

export default ListItem;
