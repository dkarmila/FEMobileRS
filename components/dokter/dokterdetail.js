import React, {Component} from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import { 
    Container, Body, Content, Header, Left, Right, Icon, Title, Label, Button, List, ListItem 
    , Card, CardItem, Separator
} from "native-base";
import DokterEdit from './dokteredit';

export default class DokterDetail extends Component{
    constructor(props){
        super(props)
        this.state = {
            dokterHeader: "Ini adalah Halaman Dokter",
            dataDokter: '',
            idDokter: this.props.navigation.state.params.idDokter
        }

    }

    componentDidMount(){
        console.log(this.state.idDokter)
        fetch("https://apirumahsakitbatch124.herokuapp.com/api/dokter/"+this.state.idDokter, {
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
            console.log(this.state.dataDokter);
        })
        .catch((error) => {
            //debugger;
            console.log(error);
        });
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
                <Text>Detail Dokter</Text>
              </Body>
              <Right>
                  <Button iconLeft transparent onPress={() => navigation.navigate('DokterEdit')}>
                      <Icon name="paper" />
                      <Text>EDIT</Text>
                  </Button>
              </Right>
            </Header>
          )
    });

    render(){
        return(
            <Container>
                <Content>
                        <List>
                        <Separator bordered>
                            <Text>Nama Dokter</Text>
                        </Separator>
                            <ListItem last>
                                <Text>
                                    {this.state.dataDokter.NamaDokter}
                                </Text>
                            </ListItem>
                        <Separator bordered>
                            <Text>Spesialis</Text>
                        </Separator>
                            <ListItem last>
                                <Text>
                                    {this.state.dataDokter.Spesialis}
                                 </Text>
                            </ListItem>
                        <Separator bordered>
                            <Text>Jadwal</Text>
                        </Separator>
                            <ListItem last>
                                <Text>Hari : </Text>
                                <Text>
                                    {this.state.dataDokter.HariTugas}
                                 </Text>
                            </ListItem>
                            <ListItem last>
                                <Text>Jam : </Text>
                                <Text>
                                    {this.state.dataDokter.JamTugasMulai} - {this.state.dataDokter.JamTugasSelesai}
                                 </Text>
                            </ListItem>
                        </List>
                </Content>
            </Container>
        );
    }

    dokterDetail(){
        Alert.alert("Hello World!");
    }
}


// Dokter.navigationOptions = ({ navigation }) => ({
//     header: (
//       <Header>
//         <Left>
//           <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
//             <Icon name="arrow-back" />
//           </Button>
//         </Left>
//         <Body>
//           <Title>Pasien</Title>
//         </Body>
//         <Right />
//       </Header>
//     )
//   });