import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const Spinner = ({size}) => {
  return (
    <View style={(styles.spinnerStyle, styles.spinnerDirection)}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  spinnerDirection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
};
export {Spinner};
