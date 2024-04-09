import React from 'react';
import { Input } from 'antd';

const CustomInput = ({ placeholder, ...rest }) => {
  return <Input placeholder={placeholder} {...rest} />;
};

export default CustomInput;
