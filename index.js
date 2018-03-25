import React,{Component} from 'react';
import { AppRegistry, Image, Text, View, DrawerLayoutAndroid } from 'react-native';
import App from './App';

export default class Banans extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        }
        return (
            <Image source={pic} style={{width:193,height:110}} />
        )
    }
}

class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}</Text>
        )
    }
}

class LotsOfGreetings extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Greeting name="Rexxar"/>
                <Greeting name="Jaina"/>
                <Greeting name="xxx"/>
            </View>
        )
    }
}

class FlexBasic extends Component {
    render() {
        var navigationView = (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
              <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
            </View>
          );
          return (
            <DrawerLayoutAndroid
              drawerWidth={300}
              drawerPosition={DrawerLayoutAndroid.positions.Left}
              renderNavigationView={() => navigationView}>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
              </View>
            </DrawerLayoutAndroid>
          );
    }
}

AppRegistry.registerComponent('qcbuy', () => FlexBasic);
