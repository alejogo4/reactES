const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;


export default {
    content_vertical_horizontal_center:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch'
    },
    container:{
        borderRadius:5
    },
    logo:{
        width:150,
        resizeMode:"contain",
        alignSelf: 'center'
    },
    container_md:{
        width:300,
        height:50,
        background:"red",
        alignSelf:'center',
        padding:5,
    },
    boton:{
        borderRadius: 80,
        marginTop:10
    },
    borderButton:{
        borderWidth:2
    }
};