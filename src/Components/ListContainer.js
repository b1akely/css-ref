import styled from "styled-components";
import { Box } from "rebass";
import { themeGet } from "styled-system";

// const ListContainer = styled(Box).`
//   width: 100%;
//   background-color: lightgray;
// `;

const ListContainer = styled(Box)`
  width: 100%;
  text-align: ${props => (props.align ? "right" : "")};

//   a > h3 {
//     text-decoration: none;
//     color: ${themeGet("colors.black")};
//   }
`;

export default ListContainer;
