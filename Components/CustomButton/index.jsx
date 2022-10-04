import React from "react";

import { MyButton, MyButtonText } from "./styled";

const CustomButton = ({
  onPress,
  title,
  outlined = false,
  fontSize = "20px",
  height,
}) => {
  return (
    <MyButton outlined={outlined} onPress={onPress}>
      <MyButtonText outlined={outlined} fontSize={fontSize}>
        {title}
      </MyButtonText>
    </MyButton>
  );
};

export default CustomButton;
