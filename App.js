import React from 'react';
import { Text, AsyncStorage } from 'react-native';
import { Container } from 'native-base';
import AppHeader from './components/header/header';
import AppBody from './components/content/content';
import AppFooter from './components/footer/footer';
import Login from './components/login/index';

export default class App extends React.Component {

  constructor(){
    super()

  }

  state = {
    webtoken : ''
  }

  componentDidMount(){
    //console.log(this.state.webtoken);
    AsyncStorage.getItem('token', (error,result) => {
      console.log('cek'+result)
      if (result) {
          this.setState({
              webtoken:result
          });
      }
    })
  }

  render() {
    console.log('token'+this.state.webtoken);
    if(this.state.webtoken == null ||  this.state.webtoken == undefined || this.state.webtoken == ''){
      return (
        <Container style={{marginTop:25}}>
          <Login/>
        </Container>
        // <View style={styles.AppStyle}>
        //   <Header></Header>
        //   <Content></Content>
        //   <Footer></Footer>
        // </View>
      );
    }else if(this.state.webtoken != null ||  this.state.webtoken != undefined){
      return (
        <Container style={{marginTop:25}}>
          <AppHeader/>
          <AppFooter/>
        </Container>
        // <View style={styles.AppStyle}>
        //   <Header></Header>
        //   <Content></Content>
        //   <Footer></Footer>
        // </View>
      );
    }
    
  }
}

// const styles = StyleSheet.create({
//   AppStyle:{
//     flex:1
//   }
// });

