import React, {Component} from 'react';
import { Text, StyleSheet, Alert } from 'react-native';
import { 
    Container, Content, Card, CardItem, H2, Form, Label
    ,Item, Input, Left, Right, Button, Header, Icon, Body
} from 'native-base';

export default class RuangInapAdd extends Component{
    constructor(){
        super()
        this.state={
            dataRI: '',
            KdRuangInap: '',
            NamaRuangInap: '',
            JnsRuangInap: '',
            HargaRuangInap: '',
            KeteranganTambahan: '',
            NamaRI: ''
        }
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
                <Text style={styles.TextHeader}>Add Ruang Inap</Text>
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
                <Content>
                    <Card>
                        <CardItem header>
                            <H2>New Data Ruang Inap </H2>
                        </CardItem>
                        <CardItem>
                        <Form>
                            <Item stackedLabel>
                                <Label>Kode Ruang Inap</Label>
                                <Input value= {this.state.KdRuangInap} onChangeText={(text) => this.setState({KdRuangInap: text})}/>
                            </Item>
                            <Item stackedLabel>
                                <Label>Nama Ruang Inap</Label>
                                <Input value= {this.state.NamaRuangInap} onChangeText={(text) => this.setState({NamaRuangInap: text})}/>
                            </Item>
                            <Item stackedLabel>
                                <Label>Jenis Ruang Inap</Label>
                                <Input value= {this.state.JnsRuangInap} onChangeText={(text) => this.setState({JnsRuangInap: text})}/>
                            </Item>
                            <Item stackedLabel last>
                                <Label>Harga Ruang Inap</Label>
                                <Input value= {this.state.HargaRuangInap} onChangeText={(text) => this.setState({HargaRuangInap: text})}/>
                            </Item>
                            <Item stackedLabel last>
                                <Label>Keterangan Tambahan</Label>
                                <Input value= {this.state.KeteranganTambahan} onChangeText={(text) => this.setState({KeteranganTambahan: text})}/>
                            </Item>
                        </Form>
                        </CardItem>
                        <CardItem footer>
                                <Button style={{ width: 100}} onPress={this.validNamaRI}>
                                    <Icon name="paper" />
                                    <Text style={{color:'white'}}>ADD</Text>
                                </Button>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }

    validNamaRI = () => {
        console.log(this.state.NamaRuangInap)
        return fetch("https://rumahsakit124js.herokuapp.com/api/ruanginap/search/"+this.state.NamaRuangInap, {
            method : "GET",
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            this.setState({
                dataRI:data,
                NamaRI:data.NamaRuangInap
            })
        })
        .then(this.addRuangInap)
    }
    

    addRuangInap = () =>{
        if(this.state.NamaRI == this.state.NamaRuangInap){
            Alert.alert(
                'Sorry!',
                'Nama Ruang Inap telah digunakan',
                [
                //   {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                //   {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'OK', style: 'cancel'},
                ],
                { cancelable: false }
              )
        }else{
            return fetch("https://rumahsakit124js.herokuapp.com/api/ruanginap/", {
                method : "POST",
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
            .then((response) => response.json())
            .then(
                Alert.alert(
                    'Add Data Ruang Inap',
                    'Add Success!',
                    [
                    //   {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                    //   {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                      {text: 'OK', onPress: () => this.props.navigation.navigate('RuangInap')},
                    ]
                  )
            )
        }
        
    }
}


const styles = StyleSheet.create({
    TextHeader:{
        color: 'white',
        fontSize: 23,
        textAlign: 'center'
    }
});