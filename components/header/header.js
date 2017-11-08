import React, {Component} from 'react';
import {
    Text,
	Image,
	StyleSheet
} from 'react-native';
import { Header, Body, Container, Left, Right, Icon, Button } from 'native-base';
import { DrawerNavigator } from 'react-navigation';
import HomeScreen from '../content/arah';
import Dokter from '../dokter/index';
import Pasien from '../pasien/pasien';
import RuangInap from "../ruanginap/index";
//import Login from "../login/login";
import Logout from "../logout/logout";
import SideBar from "../content/sidebar";
//import { SimpleApp } from '../content/arah';

const MainNav = DrawerNavigator(
	{
		Home: { screen: HomeScreen },
		//Login : { screen: Login },
		Pasien: { screen: Pasien },
		Dokter: { screen: Dokter },
		"Ruang Inap": { screen: RuangInap },
		Logout : { screen: Logout }
	  },
	  {
		contentComponent: props => <SideBar {...props} />
	  }
);

export default MainNav;

//extend -> u/ inheritance dari component
// export default class AppHeader extends Component{

// 	render(){
// 		return <SimpleApp/>;
// 	}

// }

const styles = StyleSheet.create({
	container:{
	  marginTop: 20
	},
	textStyle:{
		color: 'white'
	},
	ContentText:{
		alignItems: 'center'
	}
});