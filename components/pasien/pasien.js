import React from "react";
import { AppRegistry, View, StatusBar, Text } from "react-native";
import { Container, Body, Content, Header, Left, Right, Icon, Title, Input, Item, Label, Button } from "native-base";
//import HomeScreen from "../HomeScreen";

export default class Pasien extends React.Component {
    
  render() {
    //const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header>
            <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("Home")}>
                <Icon name="arrow-back" />
            </Button>
            </Left>
            <Body>
                <Text>Pasien</Text>
            </Body>
            <Right />
        </Header>
        <Content padder>
            <Text>Ini Halaman Pasien</Text>
        </Content>
      </Container>
    );
  }
}

// Pasien.navigationOptions = ({ navigation }) => ({
//     header: (
//       <Header>
//         <Left>
//           <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
//             <Icon name="menu" />
//           </Button>
//         </Left>
//         <Body>
//           <Title>Pasien</Title>
//         </Body>
//         <Right />
//       </Header>
//     )
//   });

// import React, {Component} from 'react';
// import { View, Text, ScrollView, Image } from 'react-native';

// export default class Pasien extends Component{
//     constructor(){
//         super()
//     }
//     static navigationOptions = {
//         title: 'Pasien',
//       };

//     render(){
//         return(
//             <View>
//                 <Text>Ini Halaman Pasien</Text>
//             </View>
//         );
//     }
// }