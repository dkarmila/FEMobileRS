import React, {Component} from 'react';
import {
    View, Text, ScrollView, Image, TouchableOpacity, Alert
    ,StyleSheet, AsyncStorage
} from 'react-native';
import { 
    Container, Body, Content, Header, Left, Right, Icon, Title, Label, Button, List, ListItem 
    , Card, CardItem, Separator
} from "native-base";
import { StackNavigator } from 'react-navigation';
import RuangInapEdit from './ruanginapedit';
import RuangInap from './ruanginap';

export default class RuangInapDetail extends Component{
    constructor(props){
        super(props)
        this.state = {
            dataRI: '',
            webtoken: '',
            idRI: this.props.navigation.state.params.idRI
        }

    }

    componentDidMount(){
        //console.log(this.state.idDokter)
        AsyncStorage.getItem('token', (error,result) => {
            console.log(result)
            if (result) {
                this.setState({
                    webtoken:result
                });
                
                fetch("https://rumahsakit124js.herokuapp.com/api/ruanginap/"+this.state.idRI+'?token='+this.state.webtoken, {
                    method: "GET"
                })
                //promise
                .then((response) => response.json())
                .then((data) => {
                    debugger;
                    console.log(data);
                    this.setState({
                        dataRI:data
                    })
                    console.log(this.state.dataRI);
                })
                .catch((error) => {
                    //debugger;
                    console.log(error);
                });

                //console.log('web '+this.state.webtoken)
            }else if (error){
                console.log('eror '+error)
            }
        });
        
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Ruang Inap',
        header: (
            <Header>
              <Left>
                <Button transparent onPress={() => navigation.navigate("RuangInap")}>
                  <Icon name="arrow-back" />
                </Button>
              </Left>
              <Body>
                <Text style={styles.TextHeader}>Detail Ruang Inap</Text>
              </Body>
              {/* <Right>
                  <Button iconLeft transparent onPress={() => navigation.navigate("RuangInapEdit", {idRI:this.state.idRI})}>
                      <Icon name="paper" />
                      <Text>EDIT</Text>
                  </Button>
              </Right> */}
            </Header>
          )
    });

    render(){
        return(
            <Container>
                <Header>
                <Right>
                    <Button iconLeft transparent onPress={() => this.props.navigation.navigate("RuangInapEdit", {idRI:this.state.idRI})}>
                        <Icon name="paper" style={styles.IconStyle}/>
                        <Text style={{color: 'white'}}>EDIT</Text>
                    </Button>
                    <Button iconLeft transparent onPress={this.alertRuangInap}>
                        <Icon name="trash" style={styles.IconStyle}/>
                        <Text style={{color: 'white'}}>DELETE</Text>
                    </Button>
                </Right>
                </Header>
                <Content>
                        <List>
                        <Separator bordered>
                            <Text>Kode Ruang Inap</Text>
                        </Separator>
                            <ListItem last>
                                <Text>
                                    {this.state.dataRI.KdRuangInap}
                                </Text>
                            </ListItem>
                        <Separator bordered>
                            <Text>Nama Ruang Inap</Text>
                        </Separator>
                            <ListItem last>
                                <Text>
                                    {this.state.dataRI.NamaRuangInap}
                                </Text>
                            </ListItem>
                        <Separator bordered>
                            <Text>Jenis Ruang Inap</Text>
                        </Separator>
                            <ListItem last>
                                <Text>
                                    {this.state.dataRI.JnsRuangInap}
                                 </Text>
                            </ListItem>
                        <Separator bordered>
                            <Text>Harga Ruangc Inap</Text>
                        </Separator>
                            <ListItem last>
                                <Text>
                                    {this.state.dataRI.HargaRuangInap}
                                 </Text>
                            </ListItem>
                        <Separator bordered>
                            <Text>Keterangan Tambahan</Text>
                        </Separator>
                            <ListItem last>
                                <Text>
                                    {this.state.dataRI.KeteranganTambahan}
                                 </Text>
                            </ListItem>
                        </List>
                </Content>
            </Container>
        );
    }

    alertRuangInap = () => {
        Alert.alert(
            'Delete Data Ruang Inap',
            'Delete Data?',
            [
            //   {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                {text: 'Cancel', style: 'cancel'},
                {text: 'OK', onPress: () => {
                    return fetch("https://rumahsakit124js.herokuapp.com/api/ruanginap/"+this.state.dataRI._id, {
                        method: "DELETE"
                    })
                    .then((response) => response.json())
                    .then(
                        Alert.alert(
                            'Delete Data Ruang Inap',
                            'Delete Success!',
                            [
                            //   {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                            //   {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                              {text: 'OK', onPress: () => this.props.navigation.navigate('RuangInap')},
                            ],
                            { cancelable: false }
                          )
                    )
                }}
            ]
        )
    }
    
    removeRuangInap = () =>{
        Alert.alert(
            'Halo',
            'Delete Data?',
        )
    }

}


const styles = StyleSheet.create({
    TextHeader:{
        color: 'white',
        fontSize: 23,
        textAlign: 'center'
    },
    TextList:{
        fontSize:18
    },
    IconStyle:{
        color: 'white',
        height: 25
    }
});