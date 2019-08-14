import React, { Component } from 'react';
import { ScrollableTab, Container, Content, Footer, Header, Title, Button, Left, Right, Body, Icon, Text, Tabs, Tab } from 'native-base';
import Tab1 from './Tab1';
import Tab3 from './Tab3'
export default class  extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs>
        </Header>
        <Tabs renderTabBar={()=> <ScrollableTab />}>

          <Tab heading="InterNational">
          <Content>
           <Tab1 />
           </Content>
          </Tab>
          <Tab heading="National">
          <Tab3 />
          </Tab>
          <Tab heading="Stock Market">
          <Tab1 />
          </Tab>
          <Tab heading="Technology">
          <Tab1 />
          </Tab>
          <Tab heading="Agriculture">
          <Tab1 />
          </Tab>
          <Tab heading="Business">
           <Tab1 />
          </Tab>
          <Tab heading="Political">
          <Tab1 />
          </Tab>
          <Tab heading="Sports">
          <Tab1 />
          </Tab>
          <Tab heading="Bollywood">
          <Tab1 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
