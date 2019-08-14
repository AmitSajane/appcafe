import React from 'react'
import { View, Text, FlatList ,ScrollView} from 'react-native'

export default class TempScreen extends React.Component{
  render(){
    return(
        <View style={{ height: 130, marginTop: 20 }}>
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            <Category imageUri={require('https://qph.fs.quoracdn.net/main-qimg-4cef44281c75e6e5d5eaa4275b3d06d7')}
                name="Home"
            />
            <Category imageUri={require('https://qph.fs.quoracdn.net/main-qimg-4cef44281c75e6e5d5eaa4275b3d06d7')}
                name="Experiences"
            />
            <Category imageUri={require('https://qph.fs.quoracdn.net/main-qimg-4cef44281c75e6e5d5eaa4275b3d06d7')}
                name="Resturant"
            />
            <Category imageUri={require('https://qph.fs.quoracdn.net/main-qimg-4cef44281c75e6e5d5eaa4275b3d06d7')}
                name="Resturant"
            />
            <Category imageUri={require('https://qph.fs.quoracdn.net/main-qimg-4cef44281c75e6e5d5eaa4275b3d06d7')}
                name="Resturant"
            />
        </ScrollView>
    </View>
    )
  }
}