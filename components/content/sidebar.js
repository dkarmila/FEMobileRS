import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import { 
  Container, Content, Text, List, ListItem, Left, Icon, Body 
  ,Right
} from "native-base";
const routes = ["Home", "Pasien", "Dokter", "Ruang Inap", "Logout"];

export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Image
            source={require("../../assets/images/side.jpg")}
            style={{
              height: 180,
              //alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}>
            <Image
              square
              style={{ height: 50, width: 40 }}
              source={require("../../assets/images/side.png")}
            /> 
          </Image>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}>
                  <Left>
                    <Icon name="cog" style={{color:'gray'}}/>
                  </Left>
                  <Body>
                    <Text style={{fontSize:18}}>{data}</Text>
                  </Body>
                  <Right />
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
