import styled from "styled-components";
// import { Box } from "rebass";
import { themeGet } from "styled-system";

const Input = styled.input`
  width: 100%;
  height: 2em;
  padding: 5px;
  margin: 0 0 2em 0;
  font-size: 1rem;
  border-color: ${themeGet("colors.black.1")};
  border-style: solid;
`;

export default Input;
