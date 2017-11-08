import React, { Component } from 'react';
import { Text, StyleSheet, AsyncStorage, Alert } from 'react-native';
import { 
    Container, Content, Form, Item, Label, Input, Body,
    Header, Left, Right, Button, Icon, Card, CardItem
} from 'native-base';
import { StackNavigator } from 'react-navigation';
import RuangInap from '../ruanginap/ruanginap';


export default class Login extends Component{
    constructor(){
        super()
        this.state ={
            Username : '',
            Password : ''
        }
    }

    render(){
        return(
            <Container>
                {/* <Header>
                    <Left>
                    <Button transparent onPress={() => this.props.navigation.navigate("Home")}>
                        <Icon name="arrow-back" />
                    </Button>
                    </Left>
                    <Body>
                    <Text style={styles.TextHeader}>Login</Text>
                    </Body>
                    <Right />
                </Header> */}
                <Content padder>
                            <Form>
                                <Item floatingLabel>
                                    <Label>Username</Label>
                                    <Input value={this.state.Username} onChangeText={(text) => this.setState({Username:text})}/>
                                </Item>
                                <Item floatingLabel last>
                                    <Label>Password</Label>
                                    <Input value={this.state.Password} onChangeText={(text) => this.setState({Password:text})}/>
                                </Item>
                            </Form>
                            <Button blocked info onPress = {this.LoginFunc}>
                                <Icon name="paper" />
                                <Text style={{color:'white'}}>Login</Text>
                            </Button>
                </Content>
            </Container>
        )
    }

    LoginFunc = () =>{
        console.log(this.state.Username)
        console.log('pass'+this.state.Password)
        return fetch("https://rumahsakit124js.herokuapp.com/api/login/authenticate", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                Username : this.state.Username,
                Password : this.state.Password
            })
        })
        .then((response) => response.json())
        .then((webtoken) => {
            console.log(webtoken.token)
            AsyncStorage.setItem('token', webtoken.token, (err) => {
                if(err){
                    console.log("an error");
                    throw err;
                  }
                console.log("success");
            })
            // if(!webtoken.token){
            //     console.log('No Token')
            // }else{
            //     this.props.navigator.push({
            //         name: 'RuangInap',
            //         passProps: {
            //           accessToken: webtoken.token
            //         }
            //       });
            // }
        })
        .then(
            Alert.alert(
                'Login',
                'Succes!',
                [
                    {text:'OK', onPress:()=>this.props.navigation.navigate('Home')}
                ],
                { cancelable:false }
            )
        )
    }
}



const styles = StyleSheet.create({
    TextHeader:{
        color: 'white',
        fontSize: 23,
        textAlign: 'center'
    }
});