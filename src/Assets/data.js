export const PROPERTIES = [
  {
    name: "align-content",
    definition:
      "Sets the distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis.",
    tag: "flexbox",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/align-content",
    values: [
      { name: "stretch", code: `<h1>test1</h1>` },
      { name: "center", code: `<h1>test2</h1>` },
      { name: "flex-start", code: `<h1>test3</h1>` },
      { name: "flex-end", code: `<h1>test4</h1>` },
      { name: "space-between", code: `<h1>test5</h1>` },
      { name: "space-around", code: `<h1>test6</h1>` },
      { name: "initial", code: `<h1>test7</h1>` },
      { name: "inherit", code: `<h1>test8</h1>` }
    ],
    code: `
const Wrapper = ({ children }) => (
  <div
    style={{
      backgroundColor: "white",
      border: "1px solid #c3c3c3",
      height: "100%"
    }}
  >
    {children}
  </div>
);

const InnerContainer = () => (
  <div
    style={{
      width: "140px",
      height: "100%",
      display: "flex",
      // EDIT HERE ***************************
      alignContent: "start",
      // ***************************
      border: "1px solid #000000",
      flexWrap: "wrap"
    }}
  >
    {" "}
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
  </div>
);

const Box = () => (
  <div
    style={{
      width: "30px",
      height: "30px",
      display: "block",
      boxSizing: "border-box",
      backgroundColor: "black",
      border: "1px solid white"
    }}
  />
);

render(
  <Wrapper>
    <InnerContainer />
  </Wrapper>
);
         
    `
  },
  {
    name: "align-items",
    definition:
      "Sets the align-self value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.",
    tag: "flexbox",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/align-items",
    values: [
      "stretch",
      "center",
      "flex-start",
      "flex-end",
      "baseline",
      "initial",
      "inherit"
    ],
    code: `const DemoContainer = ({ children }) => (
      <div
        style={{
          marginLeft: "10px",
          marginTop: "3px",
          marginRight: "15px",
          backgroundColor: "#ffffff",
          border: "1px solid #c3c3c3",
          height: "280px"
        }}
      >
        {children}
      </div>
    );
    
    const DemoBox = ({ children }) => (
      <div
        style={{
          width: "140px",
          height: "278px",
          display: "flex",
          alignContent: "start",
          border: "1px solid #000000",
          flexWrap: "wrap"
        }}
      >
        {" "}
        <div
          style={{
            width: "30px",
            height: "30px",
            backgroundColor: "red",
            display: "block",
            boxSizing: "border-box"
          }}
        />
        <div
          style={{
            width: "30px",
            height: "30px",
            backgroundColor: "blue",
            display: "block",
            boxSizing: "border-box"
          }}
        />
        <div
          style={{
            width: "30px",
            height: "30px",
            backgroundColor: "green",
            display: "block",
            boxSizing: "border-box"
          }}
        />
        <div
          style={{
            width: "30px",
            height: "30px",
            backgroundColor: "yellow",
            display: "block",
            boxSizing: "border-box"
          }}
        />
      </div>
    );
    
    render(
      <DemoContainer>
        <DemoBox />
      </DemoContainer>
    );
    `
  }
];
