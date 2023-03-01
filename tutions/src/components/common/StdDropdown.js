import RNPickerSelect from 'react-native-picker-select';
import React from 'react';

export const Dropdown = (label, value, onChangeValue) => {
  return (
    <RNPickerSelect
      onValueChange={(value) => console.log(value)}
      items={[
        {label: '1st', value: 'I'},
        {label: '2nd', value: 'II'},
        {label: '3rd', value: 'hockey'},
      ]}
    />
  );
};
