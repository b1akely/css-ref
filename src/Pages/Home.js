import React from "react";
import { Flex, Box, Heading, Text } from "rebass";
import ListItem from "../Components/ListItem";
import Input from "../Components/Input";
import { PROPERTIES } from "../Assets/data";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
      properties: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      properties: PROPERTIES
    });
    this.refs.search.focus();
  }

  handleChange() {
    this.setState({
      searchString: this.refs.search.value
    });
  }

  render() {
    let _properties = this.state.properties;
    let search = this.state.searchString.trim().toLowerCase();

    if (search.length > 0) {
      _properties = _properties.filter(function(property) {
        return property.name.toLowerCase().match(search);
      });
    }

    const displayedProperties = _properties.map((property, i) => (
      <ListItem key={i} property={property} />
    ));
    return (
      <Flex flexWrap="wrap">
        <Box width={1}>
          <Heading is="h1">CSS Reference</Heading>
        </Box>

        <Box width={1}>
          <Input
            value={this.state.searchString}
            ref="search"
            onChange={this.handleChange}
            placeholder="Filter by name"
          />
        </Box>

        {displayedProperties}

        <Text pt={6} fontSize={1}>
          Built by{" "}
          <a
            href="https://blakely.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            b1akely
          </a>
        </Text>
      </Flex>
    );
  }
}

// const properties = PROPERTIES.map((property, i) => (
//   <ListItem key={i} property={property} />
// ));
