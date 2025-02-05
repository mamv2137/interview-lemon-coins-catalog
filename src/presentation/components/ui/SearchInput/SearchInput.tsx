import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import Card from '../Card';

const SearchInput = (props: TextInputProps) => {
  return (
    <Card>
      <TextInput
        {...props}
      />
    </Card>
  );
};

export default SearchInput;
