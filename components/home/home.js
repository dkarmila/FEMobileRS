import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class Home extends React.Component{
    render(){
        //function yang memiliki nilai balik
        return(
            <View class={styles}>
                <Text>Selamat Datang di React Native</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });