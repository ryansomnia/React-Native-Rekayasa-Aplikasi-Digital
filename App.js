import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{ backgroundColor: 'blue', justifyContent: 'center' }}>
        <View style={{ backgroundColor: 'white', justifyContent: 'center' }}>
          <Text>Tambah data</Text>
          <View></View>
          <TextInput style={{ borderWidth: 1, height: 30 }} />
          <TextInput style={{ borderWidth: 1, height: 30 }} />
          <TextInput style={{ borderWidth: 1, height: 30 }} />
          <TextInput style={{ borderWidth: 1, height: 30 }} />
          <TextInput style={{ borderWidth: 1, height: 30 }} />
          <TextInput style={{ borderWidth: 1, height: 30 }} />
          <TextInput style={{ borderWidth: 1, height: 30 }} />
        </View>
        <Text style={{ color: 'red', justifyContent: 'center' }}>Data Karyawan</Text>

      </View>
    );
  }
}
