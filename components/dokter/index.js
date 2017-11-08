import React,{Component} from 'react';
//import { StyleSheet, Text, View, Image, TextInput, Button, Alert, DrawerLayoutAndroid } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Dokter from './dokter';
import DokterDetail from './dokterdetail';
import DokterEdit from './dokteredit';

export default (DokterNav = StackNavigator(
	{
		Dokter: { screen: Dokter },
		DokterDetail: { screen: DokterDetail },
		DokterEdit: { screen: DokterEdit }
	  }
));