import React, { Component } from 'react';
import { Container,Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
export default class ListThumbnailExample extends Component {
  render() {
    return (
      <Container>
        <Content>
        <List>
        <ListItem thumbnail>
          <Left>
            <Thumbnail square source={{ uri: 'https://wallpapercave.com/wp/wp1886330.jpg' }}
            style = {{height:80,width:80,borderRadius:10}} />
          </Left>
          <Body style = {{flexDirection:'column'}}>
            <Text style = {{fontSize:14}}>Sankhadeep</Text>
            <Text style = {{fontSize:12, alignItems:'flex-start'}}>Its time to build a difference Its time to build a difference Its time to build a difference Its time to build a difference . .</Text>
          </Body>
          <Right>
            <Button transparent>
              <Text>View</Text>
            </Button>
          </Right>
        </ListItem>
      </List>
          <List>
          <ListItem thumbnail>
            <Left>
              <Thumbnail square source={{ uri: 'https://wallpapercave.com/wp/wp1886331.jpg' }}
              style = {{height:80,width:80,borderRadius:10}} />
            </Left>
            <Body style = {{flexDirection:'column'}}>
              <Text style = {{fontSize:14}}>Sankhadeep</Text>
              <Text style = {{fontSize:12, alignItems:'flex-start'}}>Its time to build a difference Its time to build a difference Its time to build a difference Its time to build a difference . .</Text>
            </Body>
            <Right>
              <Button transparent>
                <Text>View</Text>
              </Button>
            </Right>
          </ListItem>
        </List>
        <List>
        <ListItem thumbnail>
          <Left>
            <Thumbnail square source={{ uri: 'https://wallpapercave.com/wp/wp3515754.jpg' }}
            style = {{height:80,width:80,borderRadius:10}} />
          </Left>
          <Body style = {{flexDirection:'column'}}>
            <Text style = {{fontSize:14}}>Sankhadeep</Text>
            <Text style = {{fontSize:12, alignItems:'flex-start'}}>Its time to build a difference Its time to build a difference Its time to build a difference Its time to build a difference . .</Text>
          </Body>
          <Right>
            <Button transparent>
              <Text>View</Text>
            </Button>
          </Right>
        </ListItem>
      </List>
      <List>
          <ListItem thumbnail>
            <Left>
              <Thumbnail square source={{ uri: 'https://wallpapercave.com/wp/wp3515775.jpg' }}
              style = {{height:80,width:80,borderRadius:10}} />
            </Left>
            <Body style = {{flexDirection:'column'}}>
              <Text style = {{fontSize:14}}>Sankhadeep</Text>
              <Text style = {{fontSize:12, alignItems:'flex-start'}}>Its time to build a difference Its time to build a difference Its time to build a difference Its time to build a difference . .</Text>
            </Body>
            <Right>
              <Button transparent>
                <Text>View</Text>
              </Button>
            </Right>
          </ListItem>
        </List>
        </Content>
      </Container>
    );
  }
}