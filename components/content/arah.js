import React,{Component} from 'react';
//import { StyleSheet, Text, View, Image, TextInput, Button, Alert, DrawerLayoutAndroid } from 'react-native';
//import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import { StatusBar, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { 
	Container, Header, Left, Icon, Right, Button, Body 
	, Content, Card, CardItem, List, ListItem
} from "native-base";
// import Dokter from '../dokter/dokter';
// import Pasien from '../pasien/pasien';
// import SideBar from "./sidebar";
//import Content from './content';

export default class HomeScreen extends Component {
	constructor(){
		super()
		this.state={
			dataRS : []
		}
	}

	componentDidMount(){
		fetch("https://rumahsakit.herokuapp.com/api/rumahsakit", {
			method: "GET"
		})
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			this.setState({
				dataRS:data
			})
		})
		.catch((error) => {
			console.log(error);
		});
	}

	render() {
		return (
		  <Container>
				<Header>
					<Left>
					<Button
						transparent
						onPress={() => this.props.navigation.navigate("DrawerOpen")}>
						<Icon name="menu" style={{fontSize:20}}/>
					</Button>
					</Left>
					<Body>
						<Text style={styles.TextHeader} >Home</Text>
					</Body>
					<Right />
				</Header>
				<Content style={{alignContent: 'center'}}>
					<Card>
						<CardItem>
							<Body>
								<Image source={require( '../../assets/images/side.png')} style={styles.StyleImage}/>
							{
								this.state.dataRS.map((item,index) => (
									<TouchableOpacity key = {item._id}>
										<Text style={styles.TextJudul} >
											Selamat datang di Rumah Sakit {item.NamaRumahSakit} {'\n'}
										</Text>
										<Text style={{fontSize:20}}>
													<Text>Alamat : </Text>
													{item.AlamatRumahSakit} {'\n'}
												
							
											Jumlah Kamar {'\n'}
											- Darurat : {item.JmlKamarDarurat} {'\n'}
											- Kelas III : {item.JmlKamarKlsIII} {'\n'}
											- VIP : {item.JmlKamarVip} {'\n'}
											
										</Text>
									</TouchableOpacity>
								))
							}
							</Body>
						</CardItem>
					</Card>
				</Content>
		  </Container>
		);
	  }
}

const styles = StyleSheet.create({
		TextHeader:{
			color: 'white',
			fontSize: 23
		},
		TextJudul:{
			fontWeight: 'bold',
			fontSize:25, 
			textAlign:'center'
		},
		StyleImage:{
			flex: 1, 
			alignSelf:'center'
		}
});

// export const SimpleApp = DrawerNavigator(
// 	{
// 		Home: { screen: HomeScreen },
// 		Pasien: { screen: Pasien },
// 		Dokter: { screen: Dokter }
// 	  },
// 	  {
// 		contentComponent: props => <SideBar {...props} />
// 	  }
// );
