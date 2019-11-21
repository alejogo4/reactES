import React, { Component } from "react";
import { ListItem,Icon } from 'native-base'
import {View} from  'react-native';


const datas = [
    {
        name: "Login",
        route: "Login",
        icon: "facebook",
        bg: "#C5F442"
    }
];

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shadowOffsetWidth: 1,
            shadowRadius: 4
        };
    }
    render() {
        return (
            <View  style={{ flex: 1, backgroundColor: "#fff", top: -1 }}>
                <Icon
                    name='sc-telegram'
                    type='evilicon'
                    color='#517fa4'
                />
                
            </View>
        );
    }
}
export default Menu;
