import React, { Component } from "react";

import { Table, TBody, Container, Thead } from "./Table/Styled";
import Th from "./Table/Th";

class App extends Component {
  componentDidMount() {
    console.log("loaded");
  }

  render() {
    return (
      <Container>
        <Table>
          <Thead>
            <tr>
              <Th minWidth="50px" maxWidth="100px">
                Test
              </Th>
              <Th>Test</Th>
              <Th>Test</Th>
              <Th minWidth="50px" maxWidth="100px">
                Test
              </Th>
              <Th>Test</Th>
            </tr>
          </Thead>
          <TBody>
            <tr>
              <td>Value</td>
              <td>Value taessqd tzetezsq </td>
              <td>Value taessqd tzetezsq tezrsds rezrfqsd Ò</td>
              <td>Value</td>
              <td>Value</td>
            </tr>
            <tr>
              <td>Value</td>
              <td>Value</td>
              <td>Value</td>
              <td>Value</td>
              <td>Value</td>
            </tr>
            <tr>
              <td>Value</td>
              <td>Value</td>
              <td>Value</td>
              <td>Value</td>
              <td>Value</td>
            </tr>
            <tr>
              <td>Value</td>
              <td>Value</td>
              <td>Value</td>
              <td>Value</td>
              <td>Value</td>
            </tr>
          </TBody>
        </Table>
      </Container>
    );
  }
}

export default App;
