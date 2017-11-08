import React, {Component} from 'react';
import { Text, StyleSheet, Alert } from 'react-native';
import { 
    Container, Content, Card, CardItem, H2, Form, Label
    ,Item, Input, Left, Right, Button, Header, Icon, Body
} from 'native-base';

export default class DiagnosaAdd extends Component{
    constructor(){
        super()
        this.state={
            dataDiagnosa: "",
            KdDiagnosa: "",
            KdPasien : "",
            KdRumahSakit : "",
            KdDokter : "",
            KetDiagnosa : "",
            KdPerawatan : "",
            TglDiagnosaAwal : "",
            KdPerawat : ""
        }
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Diagnosa',
        header: (
            <Header>
              <Left>
                <Button transparent onPress={() => navigation.goBack()}>
                  <Icon name="arrow-back" />
                </Button>
              </Left>
              <Body>
                <Text style={styles.TextHeader}>Add Diagnosa</Text>
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
                            <H2>New Data Diagnosa </H2>
                        </CardItem>
                        <CardItem>
                        <Form>
                            <Item stackedLabel>
                                <Label>Kode Diagnosa</Label>
                                <Input value= {this.state.KdDiagnosa} onChangeText={(text) => this.setState({KdDiagnosa: text})}/>
                            </Item>
                            <Item stackedLabel>
                                <Label>Kode Pasien</Label>
                                <Input value= {this.state.KdPasien} onChangeText={(text) => this.setState({KdPasien: text})}/>
                            </Item>
                            <Item stackedLabel>
                                <Label>Kode Rumah Sakit</Label>
                                <Input value= {this.state.KdRumahSakit} onChangeText={(text) => this.setState({KdRumahSakit: text})}/>
                            </Item>
                            <Item stackedLabel last>
                                <Label>Kode Dokter</Label>
                                <Input value= {this.state.KdDokter} onChangeText={(text) => this.setState({KdDokter: text})}/>
                            </Item>
                            <Item stackedLabel last>
                                <Label>Keterangan Diagnosa</Label>
                                <Input value= {this.state.KetDiagnosa} onChangeText={(text) => this.setState({KetDiagnosa: text})}/>
                            </Item>
                            <Item stackedLabel last>
                                <Label>Kode Perawatan</Label>
                                <Input value= {this.state.KdPerawatan} onChangeText={(text) => this.setState({KdPerawatan: text})}/>
                            </Item>
                            <Item stackedLabel last>
                                <Label>Tanggal Diagnosa Awal</Label>
                                <Input value= {this.state.TglDiagnosaAwal} onChangeText={(text) => this.setState({TglDiagnosaAwal: text})}/>
                            </Item>
                            <Item stackedLabel last>
                                <Label>Kode Perawat</Label>
                                <Input value= {this.state.KdPerawat} onChangeText={(text) => this.setState({KdPerawat: text})}/>
                            </Item>
                        </Form>
                        </CardItem>
                        <CardItem footer>
                                <Button style={{ width: 100}} onPress={this.addDiagnosa}>
                                    <Icon name="paper" />
                                    <Text style={{color:'white'}}>Add</Text>
                                </Button>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }

    // validNamaRI = () => {
    //     console.log(this.state.NamaRuangInap)
    //     return fetch("https://rumahsakit124js.herokuapp.com/api/ruanginap/search/"+this.state.NamaRuangInap, {
    //         method : "GET",
    //     })
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log(data);
    //         this.setState({
    //             dataRI:data,
    //             NamaRI:data.NamaRuangInap
    //         })
    //     })
    //     .then(this.addRuangInap)
    // }
    

    addDiagnosa = () =>{
        // if(this.state.NamaRI == this.state.NamaRuangInap){
        //     Alert.alert(
        //         'Sorry!',
        //         'Nama Ruang Inap telah digunakan',
        //         [
        //         //   {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        //         //   {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        //           {text: 'OK', style: 'cancel'},
        //         ],
        //         { cancelable: false }
        //       )
        // }else{
            return fetch("https://rumahsakit124js.herokuapp.com/api/diagnosa/", {
                method : "POST",
                headers:{
                    //"Accept":"application/json",
                    "Content-Type":"application/json",
                },
                body: JSON.stringify({
                    KdDiagnosa: this.state.KdDiagnosa,
                    KdPasien : this.state.KdPasien,
                    KdRumahSakit : this.state.KdRumahSakit,
                    KdDokter : this.state.KdDkter,
                    KetDiagnosa : this.state.KetDiagnosa,
                    KdPerawatan : this.state.KdPerawatan,
                    TglDiagnosaAwal : this.state.TglDiagnosaAwal,
                    KdPerawat : this.state.KdPerawat 
                })
            })
            .then((response) => response.json())
            .then(
                Alert.alert(
                    'Add Data Diagnosa',
                    'Add Success!',
                    [
                    //   {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                    //   {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                      {text: 'OK', onPress: () => this.props.navigation.navigate('Diagnosa')},
                    ]
                  )
            )
        // }
        
    }
}


const styles = StyleSheet.create({
    TextHeader:{
        color: 'white',
        fontSize: 23,
        textAlign: 'center'
    }
});