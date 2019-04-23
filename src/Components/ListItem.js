import React, { useState } from "react";
import { Flex, Box, Heading, Text } from "rebass";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import ListContainer from "./ListContainer";
import Border from "./Border";

import LiveEdit from "./LiveEdit";
import { EXAMPLES } from "../Examples";

function ItemToggle(property) {
  const [showFullList, setShowFullList] = useState(false);
  //   const sample = eval(property.property.code);
  // const example = EXAMPLES.filter(e => e.code === property.property.code);

  return (
    <ListContainer my={2} width={1}>
      <Flex flexWrap="wrap">
        <Box width={1}>
          <Link onClick={() => setShowFullList(!showFullList)}>
            <Heading mb={1} as="h3" fontWeight={"500"}>
              {property.property.name}
            </Heading>
          </Link>
        </Box>

        <Box width={1 / 2}>
          <Text>flexbox</Text>
        </Box>
        <Box width={1 / 2} align="right">
          <Text color="" textAlign={"right"}>
            <a href={property.property.url} target="_blank">
              {" "}
              docs
            </a>
          </Text>
        </Box>
      </Flex>

      <CSSTransition in={showFullList} unmountOnExit>
        <Box>
          <Box py={4}>
            <Text>{property.property.definition}</Text>
          </Box>

          <Box pb={2}>
            <LiveEdit noInline code={property.property.code} />
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
    console.log(this);
    return <ItemToggle property={this.props.property} />;
  }
}
