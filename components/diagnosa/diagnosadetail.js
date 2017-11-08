import React, {Component} from 'react';
import {
    View, Text, ScrollView, Image, TouchableOpacity, Alert
    ,StyleSheet
} from 'react-native';
import { 
    Container, Body, Content, Header, Left, Right, Icon, Title, Label, Button, List, ListItem 
    , Card, CardItem, Separator
} from "native-base";
import { StackNavigator } from 'react-navigation';
import DiagnosaEdit from './diagnosaedit';
import Diagnosa from './diagnosa';

export default class DiagnosaDetail extends Component{
    constructor(props){
        super(props)
        this.state = {
            dataDiagnosa: '',
            idDiagnosa: this.props.navigation.state.params.idDiagnosa
        }

    }

    componentDidMount(){
        //console.log(this.state.idDokter)
        fetch("https://rumahsakit124js.herokuapp.com/api/diagnosa/"+this.state.idDiagnosa, {
            method: "GET"
        })
        //promise
        .then((response) => response.json())
        .then((data) => {
            debugger;
            console.log(data);
            this.setState({
                dataDiagnosa:data
            })
            console.log(this.state.dataDiagnosa);
        })
        .catch((error) => {
            //debugger;
            console.log(error);
        });
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Diagnosa',
        header: (
            <Header>
              <Left>
                <Button transparent onPress={() => navigation.navigate("Diagnosa")}>
                  <Icon name="arrow-back" />
                </Button>
              </Left>
              <Body>
                <Text style={styles.TextHeader}>Detail Diagnosa</Text>
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
                    <Button iconLeft transparent onPress={() => this.props.navigation.navigate("DiagnosaEdit", {idDiagnosa:this.state.idRI})}>
                        <Icon name="paper" style={styles.IconStyle}/>
                        <Text style={{color: 'white'}}>EDIT</Text>
                    </Button>
                    <Button iconLeft transparent onPress={this.alertDiagnosa}>
                        <Icon name="trash" style={styles.IconStyle}/>
                        <Text style={{color: 'white'}}>DELETE</Text>
                    </Button>
                </Right>
                </Header>
                <Content>
                        <List>
                        <Separator bordered>
                            <Text>Kode Diagnosa</Text>
                        </Separator>
                            <ListItem last>
                                <Text>
                                    {this.state.dataDiagnosa.KdDiagnosa}
                                </Text>
                            </ListItem>
                        <Separator bordered>
                            <Text>Kode Pasien</Text>
                        </Separator>
                            <ListItem last>
                                <Text>
                                    {this.state.dataDiagnosa.KdPasien}
                                </Text>
                            </ListItem>
                        <Separator bordered>
                            <Text>Kode Rumah Sakit</Text>
                        </Separator>
                            <ListItem last>
                                <Text>
                                    {this.state.dataDiagnosa.KdRumahSakit}
                                 </Text>
                            </ListItem>
                        <Separator bordered>
                            <Text>Kode Dokter</Text>
                        </Separator>
                            <ListItem last>
                                <Text>
                                    {this.state.dataDiagnosa.KdDokter}
                                 </Text>
                            </ListItem>
                        <Separator bordered>
                            <Text>Keterangan Diagnosa</Text>
                        </Separator>
                            <ListItem last>
                                <Text>
                                    {this.state.dataDiagnosa.KetDiagnosa}
                                 </Text>
                            </ListItem>
                        <Separator bordered>
                            <Text>Kode Perawatan</Text>
                        </Separator>
                            <ListItem last>
                                <Text>
                                    {this.state.dataDiagnosa.KdPerawatan}
                                 </Text>
                            </ListItem>
                        <Separator bordered>
                            <Text>Tanggal Diagnosa Awal</Text>
                        </Separator>
                            <ListItem last>
                                <Text>
                                    {this.state.dataDiagnosa.TglDiagnosaAwal}
                                 </Text>
                            </ListItem>
                        <Separator bordered>
                            <Text>Kode Perawat</Text>
                        </Separator>
                            <ListItem last>
                                <Text>
                                    {this.state.dataDiagnosa.KdPerawat}
                                 </Text>
                            </ListItem>
                        </List>
                </Content>
            </Container>
        );
    }

    alertDiagnosa = () => {
        Alert.alert(
            'Delete Data Diagnosa',
            'Delete Data?',
            [
            //   {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                {text: 'Cancel', style: 'cancel'},
                {text: 'OK', onPress: () => {
                    return fetch("https://rumahsakit124js.herokuapp.com/api/diagnosa/"+this.state.dataDiagnosa._id, {
                        method: "DELETE"
                    })
                    .then((response) => response.json())
                    .then(
                        Alert.alert(
                            'Delete Data Diagnosa',
                            'Delete Success!',
                            [
                            //   {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                            //   {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                              {text: 'OK', onPress: () => this.props.navigation.navigate('Diagnosa')},
                            ],
                            { cancelable: false }
                          )
                    )
                }}
            ]
        )
    }
    
    // removeRuangInap = () =>{
    //     Alert.alert(
    //         'Halo',
    //         'Delete Data?',
    //     )
    // }

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