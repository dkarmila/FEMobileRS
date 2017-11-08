import React,{Component} from 'react';
//import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';
import { SimpleApp } from './arah';
// import Pasien from '../pasien/pasien';
// import Dokter from '../dokter/dokter';
import { StackNavigator } from 'react-navigation';
import { Content, Card, CardItem, Body, Text } from 'native-base';

//   const Simple = StackNavigator({
// 	Home: { screen: HomeScreen },
// 	Pasien: { screen: Pasien},
// 	Dokter: { screen: Dokter}
//   });
  
export default class AppBody extends Component {
	render() {
	  return <SimpleApp/>;
	  
	}
}


