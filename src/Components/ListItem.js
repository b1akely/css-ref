import React, { useState } from "react";
import { Flex, Box, Heading, Text } from "rebass";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import ListContainer from "./ListContainer";
import Border from "./Border";

import LiveEdit from "./LiveEdit";

function ItemToggle() {
  const [showFullList, setShowFullList] = useState(false);

  return (
    <ListContainer my={2} width={1}>
      <Flex flexWrap="wrap">
        <Box width={1}>
          <Link onClick={() => setShowFullList(!showFullList)}>
            <Heading mb={1} as="h3" fontWeight={"500"}>
              align-content
            </Heading>
          </Link>
        </Box>

        <Box width={1 / 2}>
          <Text>flexbox</Text>
        </Box>
        <Box width={1 / 2} align="right">
          <Text color="" textAlign={"right"}>
            <Link to={"/"}>docs</Link>
          </Text>
        </Box>
      </Flex>

      <CSSTransition in={showFullList} unmountOnExit>
        <Box>
          <Box py={4}>
            <Text>
              The align-content property modifies the behavior of the flex-wrap
              property. It is similar to align-items, but instead of aligning
              flex items, it aligns flex lines.
            </Text>
          </Box>

          <Box pb={2}>
            <LiveEdit code="<strong>Hello World!</strong>" />
          </Box>
        </Box>
      </CSSTransition>

      <Flex>
        <Border my={4} />
      </Flex>
    </ListContainer>
  );
}

export default class ListItem extends React.Component {
  render() {
    // const project = this.props.project;
    return <ItemToggle />;
  }
}
