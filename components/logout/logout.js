import React, { Component } from 'react';
import { Text, StyleSheet, AsyncStorage, Alert } from 'react-native';
import { 
    Container, Content, Header, Footer
} from 'native-base';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import Login from '../login/login';

//export default logout;

export default class Logout extends Component {
    constructor(){
        super()
    }
    render(){
        return(
            Alert.alert(
                'Logout',
                'Are you sure?',
                [
                //   {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                    {text: 'Cancel', style: 'cancel'},
                    {text: 'OK', onPress: () => {
                        AsyncStorage.removeItem('token').then(
                            Alert.alert(
                                'Logout Succes',
                                [
                                    {text: 'OK', onPress:this.props.navigation.navigate('Login')}
                                ]
                            )
                        )
                    }},
                ],
                { cancelable: false }
                )
        )
    }
}



// AsyncStorage.removeItem('token', (err) => {
//     if(err){
//         console.log("an error");
//         throw err;
//       }
//     console.log("success");
// })

// export default class Logout extends Component {
//     constructor(){
//         super()
//     }

//     render(){
//         return(
//             <Container>
//                 <Content>
//                     <Text>Logout</Text>
//                 </Content>
//             </Container>
//         )
//     }
// }