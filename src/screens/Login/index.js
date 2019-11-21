
import React, { Component } from "react";
import {Container, Content, Button,Icon,Text} from 'native-base';
import StyleGeneral from './../styles/StyleGeneral';
const logo = require("../../resources/images/logo.png");


class Login extends Component{
    render(){
        return (

            <Container>
                <Content>
                    <Button onPress={() => this.props.navigation.openDrawer()} info>  
                        <Icon name="ios-arrow-back" />
                    </Button>
                </Content>
            </Container>
        );
    }
}

export default Login;