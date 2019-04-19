import styled from "styled-components";
import { themeGet } from "styled-system";

export default styled.div`
  color: ${themeGet("colors.black")};
  font-family: ${themeGet("fonts.sans")};
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 960px;
  padding: 32px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;
