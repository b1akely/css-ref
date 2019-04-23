import React from "react";
import { Flex, Box, Heading } from "rebass";
import ListItem from "../Components/ListItem";
import Input from "../Components/Input";
import { PROPERTIES } from "../Assets/data";

export default class Home extends React.Component {
  render() {
    return (
      <Flex flexWrap="wrap">
        <Box width={1}>
          <Heading is="h1">CSS Reference</Heading>
        </Box>

        <Box width={1}>
          <Input placeholder="Filter by name" />
        </Box>
        {properties}
      </Flex>
    );
  }
}

const properties = PROPERTIES.map((property, i) => (
  <ListItem property={property} />
));
