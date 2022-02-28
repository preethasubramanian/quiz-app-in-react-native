import React from "react";
import { View, Text, StyleSheet, Image, StatusBar } from "react-native";
import Colors from "../contants/Colors";
import Images from "../contants/Images";
import Fonts from "../contants/fonts";

import { TouchableOpacity } from "react-native-gesture-handler";
import Display from '../utils/Display';

import GeneralAction from '../actions/generalAction';
import { useSelector, useDispatch } from 'react-redux';
const ScoreCard = ({ navigation }) => {
    const score = useSelector(state => state?.generalState?.score);
    const dispatch = useDispatch();

    console.log(Math.sign(-score));
    const resetScore = () => {
        dispatch(GeneralAction.setQuizScore(0));
    }



    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content"
                backgroundColor={Colors.PRIMARY_COLOR}
                translucent />
            <View style={styles.borderRadius}>
                <Image source={Images.YELLOWSTAR} resizeMode="contain" style={styles.image} />

                <View style={styles.views}>

                    <Text style={styles.containerText}>{score > 0 ? 'congratulation' : ''} </Text>
                    <Text style={styles.TitleText}>{score > 0 ? ' You won with' : 'You Failed'}</Text>
                    <Text style={styles.scoreText}>{score} </Text>
                    <Text style={styles.TitleText}>  Score  </Text>
                    <Image source={Images.IMAGETOP} resizeMode="contain" style={styles.imageLeft} />


                </View>

                <View>
                    <Image source={Images.IMAGEBOTTAM} resizeMode="contain" style={styles.imageBottam} />




                    <TouchableOpacity style={styles.button}
                        onPress={() => { navigation.navigate("Splash"); resetScore() }}


                    >
                        <Text style={styles.buttontext}>Try again </Text>

                    </TouchableOpacity>
                </View>


            </View>


        </View>
    );
};
const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: Colors.PRIMARY_COLOR,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',

        },

        containerText: {
            top: 10,
            textAlign: 'center',
            fontFamily: Fonts.Nunito_Bold,
            fontSize: 15,
            color: Colors.BLACK,
            fontWeight: "bold",

        },



        TitleText: {
            top: 5,
            color: Colors.BLACK,
            textAlign: 'center',
            fontFamily: Fonts.Nunito_ExtraBold,
            fontSize: 25,
            fontWeight: "bold",

        },
        scoreText: {
            color: Colors.PRIMARY_COLOR,
            textAlign: 'center',
            fontFamily: Fonts.Nunito_Bold,
            fontSize: 40,
            fontWeight: "bold",

        },
        views: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',

        },
        borderRadius:
        {
            alignItems: 'center',
            elevation: 14,
            borderRadius: 20,
            backgroundColor: Colors.WHITE,
            height: Display.setHeight(70),
            width: Display.setWidth(85),
        },
        button:
        {
            borderRadius:25,
            backgroundColor:Colors.WHITE,
           marginBottom:50,
           paddingRight:70,
           paddingLeft:70,
           paddingBottom:10,
           padding:10,
            height:50,
            elevation:5,
            fontSize: 25,

        },
        buttontext: {

            fontFamily: Fonts.Nunito_back,
            textAlign: 'center',
            fontSize: 20,
            color: Colors.BLACK,
            height: Display.setHeight(35),
            elevation: 6,
        },
        image:
        {

            resizeMode: "contain",
            position: "absolute",
            left: 5,
            top: 8,
            bottom: 35,
            height: Display.setHeight(35),
            width: Display.setWidth(15),
            marginBottom: 10,
        },
        imageLeft:
        {

            resizeMode: "contain",
            position: "absolute",
            left: 55,
            top: .1,

            height: Display.setHeight(30),
            width: Display.setWidth(12),
            marginBottom: 30,
        },
        imageBottam:
        {

            resizeMode: "contain",
            position: "absolute",
            left: 25,

            bottom: 10,

            height: Display.setHeight(40),
            width: Display.setWidth(40),

        },
    }
);

//   };
export default ScoreCard;