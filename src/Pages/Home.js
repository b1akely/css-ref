import React from "react";
import { Flex, Box, Heading, Button } from "rebass";
import ListItem from "../Components/ListItem";

export default class Home extends React.Component {
  render() {
    return (
      <Flex flexWrap="wrap">
        <Box width={1}>
          <Heading is="h1">CSS Reference</Heading>
        </Box>

        <Box width={1}>
          <form>
            <label>
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </Box>

        <ListItem />
      </Flex>
    );
  }
}
