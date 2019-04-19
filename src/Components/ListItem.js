import React, { useState } from "react";
import { Flex, Box, Heading, Text, Button } from "rebass";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import ListContainer from "./ListContainer";
import Border from "./Border";

function Example() {
  const [showList, setShowList] = useState(true);
  const [showFullList, setShowFullList] = useState(false);

  return (
    <ListContainer my={2} width={1}>
      <Flex flexWrap="wrap">
        <Box width={1}>
          <Link onClick={() => setShowFullList(showList)}>
            <Heading mb={1} as="h3" fontWeight={"500"}>
              align-content
            </Heading>
          </Link>
        </Box>

        <Box width={1 / 2}>
          <Text>flexbox</Text>
        </Box>
        <Box width={1 / 2} align="right">
          <Text textAlign={"right"}>
            <Link to={"/"}>docs</Link>
          </Text>
        </Box>
      </Flex>

      <CSSTransition
        in={showFullList}
        // timeout={300}
        unmountOnExit
        onEnter={() => setShowList(false)}
        onExited={() => setShowList(true)}
      >
        <Box>
          <h1>show this now</h1>
          <Button onClick={() => setShowFullList(false)}>Close</Button>
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
    return <Example />;
  }
}

// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import { Container, Button, Alert } from "react-bootstrap";
// import { CSSTransition } from "react-transition-group";

// import "./styles.css";

// function Example() {
//   const [showList, setshowList] = useState(true);
//   const [showFullList, setShowFullList] = useState(false);
//   return (
//     <Container style={{ paddingTop: "2rem" }}>
//       {showList && (
//         <Button onClick={() => setShowFullList(true)} size="lg">
//           Show Message
//         </Button>
//       )}
//       <CSSTransition
//         in={showFullList}
//         timeout={300}
//         classNames="alert"
//         unmountOnExit
//         onEnter={() => setShowList(false)}
//         onExited={() => setShowList(true)}
//       >
//         <Alert
//           variant="primary"
//           dismissible
//           onClose={() => setShowFullList(false)}
//         >
//           <Alert.Heading>Animated alert message</Alert.Heading>
//           <p>This alert message is being transitioned in and out of the DOM.</p>
//           <Button onClick={() => setShowFullList(false)}>Close</Button>
//         </Alert>
//       </CSSTransition>
//     </Container>
//   );
// }
