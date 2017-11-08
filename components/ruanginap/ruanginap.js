import React from "react";
import { AppRegistry, StatusBar, Text, StyleSheet, AsyncStorage } from "react-native";
import {
    Container, Content, Card, CardItem, List, ListItem
    ,Header, Left, Button, Icon, Right, Body, Item, Input, SearchBar
} from 'native-base';
import { StackNavigator } from 'react-navigation';
import RuangInapDetail from './ruanginapdetail';
import RuangInapAdd from './ruanginapadd';
//import RuangInapEdit from './ruanginapedit';


export default class RuangInap extends React.Component {
    constructor(){
        super()
        this.state={
            dataRuangInap: [],
            webtoken: ''
        }
    }
    // componentWillMount(){
    //     AsyncStorage.getItem('token', (error,result) => {
    //         console.log(result)
    //         if (result) {
    //             this.setState({
    //                 webtoken:result
    //             });

    //             console.log('web '+this.state.webtoken)
    //         }else if (error){
    //             console.log('eror '+error)
    //         }
    //     })
    
    // }
    
    componentDidMount(){
        AsyncStorage.getItem('token', (error,result) => {
            console.log(result)
            if (result) {
                this.setState({
                    webtoken:result
                });
                fetch("https://rumahsakit124js.herokuapp.com/api/ruanginap?token="+this.state.webtoken, {
                    method: "GET"
                })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    this.setState({
                        dataRuangInap : data
                    })
                })
                .catch((error) => {
                    console.log(error);
                });

                //console.log('web '+this.state.webtoken)
            }else if (error){
                console.log('eror '+error)
            }
        });
        console.log('web '+this.state.webtoken)
        
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
                this.state.dataRuangInap.map((item, index) => (
                    <Button block info onPress={() => this.props.navigation.navigate("RuangInapDetail", {idRI:item._id})}  key = {item._id}>
                        <Text style={styles.TextContent}>
                            {item.NamaRuangInap}
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

RuangInap.navigationOptions = ({ navigation }) => ({
    header: (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.navigate("Home")}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Text style={styles.TextHeader}>Ruang Inap</Text>
        </Body>
        <Right>
            <Button transparent onPress={() => navigation.navigate("RuangInapAdd")}>
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