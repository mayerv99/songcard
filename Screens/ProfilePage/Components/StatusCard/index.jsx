import React from "react";

import { Wrapper, Title, Value } from "./styled";

function StatusCard({ title, value }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </Wrapper>
  );
}

export default StatusCard;
