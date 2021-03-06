import React, { Component } from "react";
import { FlatList, Text } from "react-native";
import { Card, Container } from "native-base";

const data = [
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something two"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something three"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something four"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something five"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something six"
  }
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

  render() {
    return (
    <Container>
      <FlatList
        horizontal
        data={this.state.data}
        renderItem={({ item: rowData }) => {
          return (
            <Card
              title={null}
              image={{ uri: rowData.imageUrl }}
              containerStyle={{ padding: 0, width: 160 ,height:100}}
            >
              <Text style={{ marginBottom: 10 }}>
                {rowData.title}
              </Text>
            </Card>
          );
        }}
        keyExtractor={(item, index) => index}
      />
      </Container>
    );
  }
}