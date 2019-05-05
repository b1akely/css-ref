import React from "react";
import styled, { css } from "styled-components";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

const foreground = "#f8f8f2";
const red = "#ff5555";

// const lightGrey = polished.darken(0.05, "#282a36");
const lightGrey = "#282a36";

const StyledProvider = styled(LiveProvider)`
  border-radius: 0;
  box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
  overflow: hidden;
  margin-bottom: 0;
`;

const LiveWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const column = css`
  flex-basis: 80%;
  width: 80%;
  max-width: 80%;
  @media (max-width: 600px) {
    flex-basis: auto;
    width: 100%;
    max-width: 100%;
  }
`;

const StyledEditor = styled.div`
  background: ${lightGrey};
  font-family: "Source Code Pro", monospace;
  font-size: 1.05rem;
  height: 21.875rem;
  max-height: 21.875rem;
  overflow: auto;
  ${column};
  * > textarea:focus {
    outline: none;
  }
`;

const StyledPreview = styled(LivePreview)`
  position: relative;
  padding: 0.5rem;
  background: whitesmoke;
  color: black;
  height: auto;
  overflow: hidden;
  ${column};
`;

const StyledError = styled(LiveError)`
  display: block;
  padding: 0.5rem;
  background: ${red};
  color: ${foreground};
  white-space: pre-wrap;
  text-align: left;
  font-size: 0.9em;
  font-family: "Source Code Pro", monospace;
`;

const LiveEdit = ({ noInline, code }) => (
  <StyledProvider code={code} noInline={noInline}>
    <LiveWrapper>
      <StyledEditor>
        <LiveEditor />
      </StyledEditor>
      {/* <StyledPreview /> */}
    </LiveWrapper>

    {/* <StyledError /> */}
  </StyledProvider>
);

export default LiveEdit;
