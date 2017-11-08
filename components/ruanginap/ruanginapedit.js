import React, {Component} from 'react';
import { 
    Text, ScrollView, Image, TouchableOpacity, Alert 
    ,StyleSheet, AsyncStorage
} from 'react-native';
import { 
    Container, Body, Content, Header, Left, Right, Icon, Title, Label, Button, List, ListItem 
    , Card, CardItem, Separator, Form, Item, Input, H2
} from "native-base";
import { StackNavigator } from 'react-navigation';
import RuangInapDetail from './ruanginapdetail';

export default class RuangInapEdit extends Component{
    constructor(props){
        super(props)
        this.state= {
            idRI : this.props.navigation.state.params.idRI,
            webtoken: '',
            dataRI : '',
            KdRuangInap : '',
            NamaRuangInap: '',
            JnsRuangInap: '',
            HargaRuangInap: '',
            harga: '',
            KeteranganTambahan: ''
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
                    //console.log(data);
                    this.setState({
                        dataRI:data,
                        KdRuangInap : data.KdRuangInap,
                        NamaRuangInap: data.NamaRuangInap,
                        JnsRuangInap: data.JnsRuangInap,
                        HargaRuangInap: String(data.HargaRuangInap),
                        KeteranganTambahan: data.KeteranganTambahan
                        //harga: HargaRuangInap
                    })
                    // let harga=this.state.dataRI.HargaRuangInap;
                    // let hrg = String(harga);
                    // console.log(hrg);
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
                <Button transparent onPress={() => navigation.goBack()}>
                  <Icon name="arrow-back" />
                </Button>
              </Left>
              <Body>
                <Text style={styles.TextHeader}>Edit Ruang Inap</Text>
              </Body>
              <Right/>
            </Header>
          )
    });

    render(){
        //let harga=parseInt(this.state.dataRI.HargaRuangInap, 10)
        
        return(
            <Container>
                <Content>
                    <Card>
                        <CardItem header>
                            <H2>Data Ruang Inap </H2>
                        </CardItem>
                        <CardItem>
                        <Form>
                            <Item stackedLabel>
                                <Label>Kode Ruang Inap</Label>
                                <Input defaultValue={this.state.dataRI.KdRuangInap} onChangeText={(text) => this.setState({KdRuangInap: text})}/>
                            </Item>
                            <Item stackedLabel>
                                <Label>Nama Ruang Inap</Label>
                                <Input defaultValue={this.state.dataRI.NamaRuangInap} onChangeText={(text) => this.setState({NamaRuangInap: text})}/>
                            </Item>
                            <Item stackedLabel>
                                <Label>Jenis Ruang Inap</Label>
                                <Input defaultValue={this.state.dataRI.JnsRuangInap} onChangeText={(text) => this.setState({JnsRuangInap: text})}/>
                            </Item>
                            <Item stackedLabel last>
                                <Label>Harga Ruang Inap</Label>
                                <Input defaultValue={this.state.HargaRuangInap} onChangeText={(text) => this.setState({HargaRuangInap: text})}/>
                            </Item>
                            <Item stackedLabel last>
                                <Label>Keterangan Tambahan</Label>
                                <Input defaultValue={this.state.KeteranganTambahan} onChangeText={(text) => this.setState({KeteranganTambahan: text})}/>
                            </Item>
                        </Form>
                        </CardItem>
                        <CardItem footer>
                                <Button style={{ width: 100}} onPress={this.editRuangInap}>
                                    <Icon name="paper"/>
                                    <Text style={{color:'white'}}>UPDATE</Text>
                                </Button>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }

    editRuangInap = ()=>{
        console.log("Nama"+this.state.NamaRuangInap);
        // this.setState({
        //     harga:Number(this.state.HargaRuangInap)
        // })
        
        //console.log("Harga "+harga);
        
        AsyncStorage.getItem('token', (error,result) => {
            console.log(result)
            if (result) {
                this.setState({
                    webtoken:result
                });
                
                return fetch("https://rumahsakit124js.herokuapp.com/api/ruanginap/"+this.state.idRI+'?token='+this.state.webtoken, {
                    method: "PUT",
                    headers:{
                        //"Accept":"application/json",
                        "Content-Type":"application/json",
                    },
                    body: JSON.stringify({
                        NamaRuangInap: this.state.NamaRuangInap,
                        JnsRuangInap: this.state.JnsRuangInap,
                        HargaRuangInap: this.state.HargaRuangInap,
                        KdRuangInap: this.state.KdRuangInap,
                        KeteranganTambahan: this.state.KeteranganTambahan 
                    })
                })
                .then(response => response.json())
                .then(
                    Alert.alert(
                        'Update Data Ruang Inap',
                        'Update Success!',
                        [
                        //   {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                        //   {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                          {text: 'OK', onPress: () => this.props.navigation.navigate('RuangInap')},
                        ],
                        { cancelable: false }
                      )
                )

                //console.log('web '+this.state.webtoken)
            }else if (error){
                console.log('eror '+error)
            }
        });
    }
}


const styles = StyleSheet.create({
    TextHeader:{
        color: 'white',
        fontSize: 23,
        textAlign: 'center'
    }
});