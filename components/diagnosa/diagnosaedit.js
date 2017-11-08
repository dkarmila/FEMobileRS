import React, {Component} from 'react';
import { 
    Text, ScrollView, Image, TouchableOpacity, Alert 
    ,StyleSheet
} from 'react-native';
import { 
    Container, Body, Content, Header, Left, Right, Icon, Title, Label, Button, List, ListItem 
    , Card, CardItem, Separator, Form, Item, Input, H2
} from "native-base";
import { StackNavigator } from 'react-navigation';
import DiagnosaDetail from './diagnosadetail';

export default class DiagnosaEdit extends Component{
    constructor(props){
        super(props)
        this.state= {
            idDiagnosa : this.props.navigation.state.params.idDiagnosa,
            dataDiagnosa : '',
            KdDiagnosa :"",
            KdPasien : "",
            KdRumahSakit : "",
            KdDokter : "",
            KetDiagnosa : "",
            KdPerawatan : "",
            TglDiagnosaAwal : "",
            KdPerawat : ""
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
            //console.log(data);
            this.setState({
                dataDiagnosa:data,
                KdDiagnosa : data.KdDiagnosa,
                KdPasien : data.KdPasien,
                KdRumahSakit : data.KdRumahSakit,
                KdDokter : data.KdDokter,
                KetDiagnosa : data.KetDiagnosa,
                KdPerawatan : data.KdPerawatan,
                TglDiagnosaAwal : data.TglDiagnosaAwal,
                KdPerawat : data.KdPerawat
                //harga: HargaRuangInap
            })
            // let harga=this.state.dataRI.HargaRuangInap;
            // let hrg = String(harga);
            // console.log(hrg);
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
                <Button transparent onPress={() => navigation.goBack()}>
                  <Icon name="arrow-back" />
                </Button>
              </Left>
              <Body>
                <Text style={styles.TextHeader}>Edit Diagnosa</Text>
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
                            <H2>Data Diagnosa </H2>
                        </CardItem>
                        <CardItem>
                        <Form>
                            <Item stackedLabel>
                                <Label>Kode Diagnosa</Label>
                                <Input defaultValue={this.state.dataDiagnosa.KdDiagnosa} onChangeText={(text) => this.setState({KdDiagnosa: text})}/>
                            </Item>
                            <Item stackedLabel>
                                <Label>Kode Pasien</Label>
                                <Input defaultValue={this.state.dataDiagnosa.KdPasien} onChangeText={(text) => this.setState({KdPasien: text})}/>
                            </Item>
                            <Item stackedLabel>
                                <Label>Kode Rumah Sakit</Label>
                                <Input defaultValue={this.state.dataDiagnosa.KdRumahSakit} onChangeText={(text) => this.setState({KdRumahSakit: text})}/>
                            </Item>
                            <Item stackedLabel last>
                                <Label>Kode Dokter</Label>
                                <Input defaultValue={this.state.KdDokter} onChangeText={(text) => this.setState({KdDokter: text})}/>
                            </Item>
                            <Item stackedLabel last>
                                <Label>Keterangan Diagnosa</Label>
                                <Input defaultValue={this.state.KetDiagnosa} onChangeText={(text) => this.setState({KetDiagnosa: text})}/>
                            </Item>
                            <Item stackedLabel last>
                                <Label>Kode Perawatan</Label>
                                <Input defaultValue={this.state.KdPerawatan} onChangeText={(text) => this.setState({KdPerawatan: text})}/>
                            </Item>
                            <Item stackedLabel last>
                                <Label>Tanggal Diagnosa Awal</Label>
                                <Input defaultValue={this.state.TglDiagnosaAwal} onChangeText={(text) => this.setState({TglDiagnosaAwal: text})}/>
                            </Item>
                            <Item stackedLabel last>
                                <Label>Kode Perawat</Label>
                                <Input defaultValue={this.state.KdPerawat} onChangeText={(text) => this.setState({KdPerawat: text})}/>
                            </Item>
                        </Form>
                        </CardItem>
                        <CardItem footer>
                                <Button style={{ width: 100}} onPress={this.editDiagnosa}>
                                    <Icon name="paper"/>
                                    <Text style={{color:'white'}}>UPDATE</Text>
                                </Button>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }

    editDiagnosa = ()=>{
        console.log("Nama"+this.state.NamaRuangInap);
        // this.setState({
        //     harga:Number(this.state.HargaRuangInap)
        // })
        
        //console.log("Harga "+harga);
        return fetch("https://rumahsakit124js.herokuapp.com/api/diagnosa/"+this.state.idDiagnosa, {
            method: "PUT",
            headers:{
                //"Accept":"application/json",
                "Content-Type":"application/json",
            },
            body: JSON.stringify({ 
                KdDiagnosa : this.state.KdDiagnosa,
                KdPasien : this.state.KdPasien,
                KdRumahSakit : this.state.KdRumahSakit,
                KdDokter : this.state.KdDokter,
                KetDiagnosa : this.state.KetDiagnosa,
                KdPerawatan : this.state.KdPerawatan,
                TglDiagnosaAwal : this.state.TglDiagnosaAwal,
                KdPerawat : this.state.KdPerawat
            })
        })
        .then(response => response.json())
        .then(
            Alert.alert(
                'Update Data Diagnosa',
                'Update Success!',
                [
                //   {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                //   {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'OK', onPress: () => this.props.navigation.navigate('Diagnosa')},
                ],
                { cancelable: false }
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