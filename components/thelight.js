import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,TextInput,TouchableOpacity,Image,Switch,
    Button,
    Alert,
} from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome } from '@expo/vector-icons';
import { symbolicateLogLazy } from 'react-native/Libraries/LogBox/Data/LogBoxData';
import lighton from "../assets/lighton.jpg";
import lightoff from "../assets/lightoff.jpg";
import { Dimensions } from 'react-native';
import React, { useState } from "react";




export default function Thelight(){

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return(
        <SafeAreaView style={sty.container}>
            <StatusBar style='light'/>

        {/* <TouchableOpacity
           onPress={toggleSwitch}
           style={sty.press}

        >
               <Text>turn</Text>
        </TouchableOpacity> */}




            <Image source={isEnabled ? lighton : lightoff} style={sty.img}/>

        <Button
        style={sty.btn}
        onPress={toggleSwitch}
        title="press dee"

        />







</SafeAreaView>
    );

}


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const sty =StyleSheet.create({


    container: {
        flex:1,
        backgroundColor: "black",
        paddingTop: Constants.statusBarHeight,
        justifyContent:"center",
        alignItems: "center",

       },
       img:{
           alignItems:"center",
        justifyContent:"center",


       },
       press:{
           height: windowHeight,
            width:windowWidth,

            position: "absolute",
            zIndex:10,


       }




});