import React, {Component} from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import { 
    Container, Body, Content, Header, Left, Right, Icon, Title, Label, Button, List, ListItem 
    , Card, CardItem, Separator
} from "native-base";

export default class DokterEdit extends Component{
    constructor(){
        super()
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Dokter',
        header: (
            <Header>
              <Left>
                <Button transparent onPress={() => navigation.goBack()}>
                  <Icon name="arrow-back" />
                </Button>
              </Left>
              <Body>
                <Text>Edit Dokter</Text>
              </Body>
              <Right>
                  <Button iconLeft transparent onPress={() => navigation.navigate('DokterEdit')}>
                      <Icon name="paper" />
                      <Text>SAVE</Text>
                  </Button>
              </Right>
            </Header>
          )
    });

    render(){
        return(
            <Container>
                <Content>
                    <Text>Ini Halaman Edit</Text>
                </Content>
            </Container>
        )
    }
}