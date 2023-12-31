import { Text, View } from 'react-native'
import React, { Component } from 'react'

export class App extends Component {
  render() {
    return (<>
      <View style={{flex:1, padding: 15 }}>
        <View style={{  flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: 'gray' }}>Friday, 15 Dec</Text>
          <Text style={{ color: 'gray' }}>Search</Text>
        </View>
        <View style={{ margin:10,marginTop:30,marginBottom:30,padding:10}}>
          <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black' }}>Learn</Text>
          <Text style={{ color: 'black' }}>Choose the part of the body</Text>
        </View>
        <View style={{  margin: 10, backgroundColor: '#eb7662', padding: 20, borderRadius: 20, height: 120 }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>Head & Face</Text>
          <Text style={{ color: '#bcdbd7' }}>11 diseases</Text>
        </View>
        <View style={{  margin: 10, backgroundColor: '#8dc4bb', padding: 20, borderRadius: 20, height: 120 }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>Back & Neck</Text>
          <Text style={{ color: '#bcdbd7' }}>9 diseases</Text>
        </View>
        <View style={{  margin: 10, backgroundColor: '#f2982f', padding: 20, borderRadius: 20, height: 120 }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>Elbow & Shoulders</Text>
          <Text style={{ color: '#bcdbd7' }}>12 diseases</Text>
        </View>
        <View style={{  margin: 10, backgroundColor: '#327389', padding: 20, borderRadius: 20, height: 120 }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>Hand & Arm</Text>
          <Text style={{ color: '#bcdbd7' }}>2 diseases</Text>
        </View>
      </View>
    </>
    )
  }
}

export default App