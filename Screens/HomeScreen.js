import React, { Component } from 'react';
import { StyleSheet, View, Text, Image,StatusBar } from 'react-native';
import {Icon,Item,Header} from 'native-base'
import { FlatGrid } from 'react-native-super-grid';
 
export default class HomeScreen extends Component {
  render() {

    const items = [
      { name: 'National', code: '"#4A148C' }, { name: 'Sports', code: '#2ecc71' },
      { name: 'Business', code: '#3498db', }, { name: 'Local', code: '#9b59b6' },
      { name: 'Travel', code: '#34495e'}, { name: 'Lifestyle', code: '#16a085' },
      { name: 'International', code: '#27ae60' }, { name: 'Bollywood', code: '#2980b9' },
      { name: 'Agriculture', code: '#8e44ad' }, { name: 'Jobs', code: '#2c3e50' },
      { name: 'SUN FLOWER', code: '#f1c40f' }, { name: 'CARROT', code: '#e67e22' },
      { name: 'ALIZARIN', code: '#e74c3c' }, { name: 'CLOUDS', code: '#ecf0f1' },
      { name: 'CONCRETE', code: '#95a5a6' }, { name: 'ORANGE', code: '#f39c12' },
      { name: 'PUMPKIN', code: '#d35400' }, { name: 'POMEGRANATE', code: '#c0392b' },
    { name: 'SILVER', code: '#bdc3c7' }, { name: 'ASBESTOS', code: '#7f8c8d'  },
    ];
 
    return (
      
      <FlatGrid
        itemDimension={130}
        items={items}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        // spacing={20}
        renderItem={({ item, index }) => (
          
          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
          <StatusBar  
          backgroundColor = "#4A148C"  
          barStyle = "light-content"   
          hidden = {false}    
          translucent = {true}  
      />
          <Image style={styles.imageThumbnail} source={{ uri: item.src }} />
            <Text style={styles.itemCode}>{item.code}</Text>
          </View>
        )}
      />
    
    );
  }
}
 
const styles = StyleSheet.create({
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});