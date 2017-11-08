import React, {Component} from 'react';
import { Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import { 
    Container, Body, Content, Header, Left, Right, Icon, Title, Label, Button, List, ListItem
    , Card, CardItem 
} from "native-base";
import { StackNavigator } from "react-navigation";
import DokterDetail from './dokterdetail';

export default class Dokter extends Component{
    constructor(){
        super()
        this.state = {
            dokterHeader: "Ini adalah Halaman Dokter",
            dataDokter: []
        }
    }

    componentDidMount(){
        fetch("https://apirumahsakitbatch124.herokuapp.com/api/dokter", {
            method: "GET"
        })
        //promise
        .then((response) => response.json())
        .then((data) => {
            debugger;
            console.log(data);
            this.setState({
                dataDokter:data
            })
        })
        .catch((error) => {
            //debugger;
            console.log(error);
        });
    }

    static navigationOptions = {
        title: 'Dokter',
      };

    render(){
        return(
            <Container>
                {/* <Header>
                    <Left>
                    <Button transparent onPress={() => this.props.navigation.navigate("Home")}>
                        <Icon name="arrow-back" />
                    </Button>
                    </Left>
                    <Body>s
                        <Text>Dokter</Text>
                    </Body>
                    <Right />
                </Header> */}
                <Content>
                        {/* <Text>{this.state.dokterHeader}</Text>
                        <Text>{this.state.dataDokter[0].KdDokter}</Text> */}
                        <List>
                        {
                            this.state.dataDokter.map((item, index) => (
                                <Button block info onPress={() => this.props.navigation.navigate("DokterDetail", {idDokter:item._id})}  key = {item._id}>
                                    <Text>
                                        {item.NamaDokter}
                                    </Text>
                                </Button>
                            ))
                        }
                        </List>
                </Content>
            </Container>
        );
    }
}


Dokter.navigationOptions = ({ navigation }) => ({
    header: (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.navigate("Home")}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Text>Dokter</Text>
        </Body>
        <Right />
      </Header>
    )
  });