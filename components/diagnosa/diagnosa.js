import React from "react";
import { AppRegistry, StatusBar, Text, StyleSheet } from "react-native";
import {
    Container, Content, Card, CardItem, List, ListItem
    ,Header, Left, Button, Icon, Right, Body, Item, Input, SearchBar
} from 'native-base';
import { StackNavigator } from 'react-navigation';
import DiagnosaDetail from './diagnosadetail';
import DiagnosaAdd from './diagnosaadd';
//import RuangInapEdit from './ruanginapedit';


export default class Diagnosa extends React.Component {
    constructor(){
        super()
        this.state={
            dataDiagnosa: []
        }
    }
    
    componentDidMount(){
        fetch("https://rumahsakit124js.herokuapp.com/api/diagnosa", {
            method: "GET"
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            this.setState({
                dataDiagnosa : data
            })
        })
        .catch((error) => {
            console.log(error);
        });
    }
    
  render() {
    //const { navigate } = this.props.navigation;
    return (
      <Container>
        <Content padder>
            <List>
                <ListItem searchBar rounded>
                    <Item>
                        <Icon name="md-search" />
                        <Input placeholder="Search" />
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </ListItem>
            {
                this.state.dataDiagnosa.map((item, index) => (
                    <Button block info onPress={() => this.props.navigation.navigate("DiagnosaDetail", {idDiagnosa:item._id})}  key = {item._id}>
                        <Text style={styles.TextContent}>
                            {item.KodePasien}
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

Diagnosa.navigationOptions = ({ navigation }) => ({
    header: (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.navigate("Home")}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Text style={styles.TextHeader}>Diagnosa</Text>
        </Body>
        <Right>
            <Button transparent onPress={() => navigation.navigate("DiagnosaAdd")}>
                <Icon name="nutrition"/>
                <Text style={{color: 'white', fontSize:13}}>Create</Text>
            </Button>
        </Right>
      </Header>
    )
  });

const styles = StyleSheet.create({
    TextHeader:{
        color: 'white',
        fontSize: 23,
        textAlign: 'center'
    },
    TextContent:{
        color: 'white',
        fontSize: 18
    }
});