import React, {useEffect, useRef} from 'react';
import {TextInputProps} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useField} from '@unform/core';

import {Container, TextInput} from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

interface InputValueReference {
  value: string;
}

interface RefProps {
  focus(): void;
}

const Input: React.FC<InputProps> = ({name, icon, ...rest}) => {
  const inputElementRef = useRef<any>(null);

  const {fieldName, registerField, defaultValue = '', error} = useField(name);

  const inputValueRef = useRef<InputValueReference>({value: defaultValue});

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({text: value});
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [registerField, fieldName]);

  return (
    <Container>
      <Icon name={icon} color="#666360" size={20} />
      <TextInput
        ref={inputElementRef}
        onChangeText={value => (inputValueRef.current.value = value)}
        defaultValue={defaultValue}
        keyboardAppearance="dark"
        placeholderTextColor="#666360"
        {...rest}
      />
    </Container>
  );
};

export default Input;
