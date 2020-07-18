import styled from "styled-components";
import React from "react";

export interface Props {
  size: 1 | 2 | 3 | 4 | 5 | 6;
  label: string;
  color: string;
}

export type HeadingType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export default (props: Props) => {
  const { size, label, color } = props;
  const headingTag = `h${size}`;
  const Heading = styled(headingTag as HeadingType)`
    color: ${props.color};
    font: 28px/34px Roboto Bold;
    margin: 0 auto 35px;
  `;
  return <Heading color={color}>{label}</Heading>;
};
