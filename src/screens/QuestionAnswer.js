import React from "react";
import { View, Text, Image, StyleSheet, Modal, StatusBar ,ActivityIndicator } from "react-native";
import Colors from "../contants/Colors";
import Images from "../contants/Images";
import Fonts from "../contants/fonts";
import { TouchableOpacity } from "react-native-gesture-handler";
import Display from '../utils/Display';
import { useEffect } from "react";
import { useState } from "react";
import { BackHandler } from 'react-native';
import GeneralAction from '../actions/generalAction';
import {useSelector, useDispatch} from 'react-redux';

const QuestionAnswer = ({navigation}) => {
    const score= useSelector(state => state?.generalState?.score);
    const question= useSelector(state => state?.generalState?.question);
    const dispatch = useDispatch();



    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(true);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    // const [score, setScore] = useState(0)
    const [showNextButton, setShowNextButton] = useState(false);
    const [showActivityIndicator,setShowActivityIndicator ] = useState(true);

 

    const [Userdata, setData] = useState([]);
    const allQuestions = Userdata;
    
    useEffect(() => {
     
         setIsActive(true);
        dispatch(GeneralAction.do_Quiz(question));
        setData(question)
       setShowActivityIndicator(false);

      
    }, []);
 

    const validateAnswer = () => {
         setIsOptionsDisabled(true);
          dispatch(GeneralAction.setQuizScore(score+10));
          setShowNextButton(true)
         handleNext()
    }

    function toggle() {
        setIsActive(!isActive);
      }
    
      function reset() {
        setSeconds(0);
        setIsActive(false);
      }
    
      useEffect(() => {
        let interval = null;
     
        if (isActive) {
          interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);


            if(seconds==60)
             {
 
                dispatch(GeneralAction.setQuizScore(score-10));
                handleNext  () 
                reset()
                setIsActive(true);
             }
          
          }, 1000);
        
        } else if (!isActive && seconds !== 0 ) {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
      }, [isActive, seconds]);

  
  
      const InCorrectAnswer = () => {

        setIsOptionsDisabled(true);
        // setScore(score - 10)
         dispatch(GeneralAction.setQuizScore(score-10));
         setShowNextButton(true)
         handleNext()
    }
   
     


    const handleNext = () => {
      
     
        if (currentQuestionIndex == allQuestions.length - 1) {
         //    setShowScoreModal(true)
             navigation.navigate('ScoreCard');


            } else {
         
            toggle() ;
            setIsActive(true);
            setSeconds(0);


            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setCurrentOptionSelected(null);
            setCorrectOption(null);
            setIsOptionsDisabled(false);
            setShowNextButton(false);
        }

    }
  

   

const renderOptions = () => {
        return (
     <View>
    <TouchableOpacity style={styles.button}
                    onPress={() => validateAnswer()}
                    disabled={isOptionsDisabled} >
                    <Text style={styles.buttontext}>{allQuestions[currentQuestionIndex]?.correct_answer} </Text>

                </TouchableOpacity>
                {
                    allQuestions[currentQuestionIndex]?.incorrect_answers.map(incorrect_answers => (
                        <TouchableOpacity 
                            onPress={() => InCorrectAnswer()}
                            disabled={isOptionsDisabled}
                            key={incorrect_answers}
                             style={styles.button}>
                            <Text style={styles.buttontext}>{incorrect_answers}</Text>
                       </TouchableOpacity>
                    ))
                }
            </View>
        )
    }




    return (
      

        <View style={styles.container}>
            <StatusBar barStyle="light-content"
                backgroundColor={Colors.PRIMARY_COLOR}
                translucent />



            <View style={styles.borderRadiusSecond}>
                <View style={styles.borderRadius}>
                    <View style={styles.borderRadiusThird}>
                  

                        <View style={styles.topView}>
                            <Text style={styles.questNoText}> {currentQuestionIndex + 1}/ {allQuestions.length}</Text>
                            <Text style={styles.questNoText}> {score}</Text>
                        </View>
                        <View>

                      
                            <TouchableOpacity style={styles.Text}
                            >
                                <Text style={styles.scoreText}>{seconds}</Text>

                            </TouchableOpacity>
                        </View>
                        <Modal
                        
                               transparent={true}
                                visible={showActivityIndicator}
                            >
                        <ActivityIndicator   
                      
                        size= "small" color= "#F2994A" style ={styles.loadingIndicator} />
                     
                        </Modal>


                        <Text> {allQuestions[currentQuestionIndex]?.category}</Text>

                        <Text style={styles.questText}>{allQuestions[currentQuestionIndex]?.question}</Text>
                       
                         
                     
                        {renderOptions()}



                    </View>
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

        }, containerText: {
            textAlign: 'center',
            fontFamily: Fonts.Nunito_Bold,
            fontSize: 15,
            

        },
        loadingIndicator:{
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: 230,
            marginTop:250,

        },
        TitleText: {
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            fontFamily: Fonts.Nunito_ExtraBold,
            fontSize: 22,
            fontWeight: "bold",

        },

        containerAnswer: {

            flex: .1,

            marginTop: 30,
            justifyContent: 'center',
            alignItems: 'center',


        },

        questText: {
            fontWeight: "bold",
            marginTop: 18,
            justifyContent: 'center',
            alignItems: 'center',
            color: Colors.BLACK,
            fontSize: 18,
            fontFamily: Fonts.Nunito_Bold,
        },
        Text: {
            justifyContent: 'center', borderColor: Colors.LITTLE_GREEN, borderRadius: 80, borderWidth: 3, height: 10,
            width: 87,
            height: 85,

        },


        topView:
        {
            alignItems: 'center',
            flex: .6,
            flexDirection: "row",


        },
        questNoText:
        {
            flexDirection: "row",
            justifyContent: 'space-between',
            backgroundColor: Colors.PRIMARY_COLOR,
            color: Colors.WHITE,
            borderRadius: 12,
            paddingRight: 10,
            paddingLeft: 10,
            padding: 3,
            marginLeft: 80,
            marginRight: 100,

            marginTop: 10



        },
        scoreText:
        {
            fontFamily: Fonts.Nunito_back,
            textAlign: 'center',
            fontSize: 35,
            color: Colors.BLACK,

        },

        borderRadius:
        {
            alignItems: 'center',
            elevation: 14,
            borderRadius: 20,

            backgroundColor: Colors.WHITE,
            height: Display.setHeight(78),
            width: Display.setWidth(85),
        },
        borderRadiusThird:
        {
            alignItems: 'center',
            elevation: 14,
            borderRadius: 20,
            paddingLeft: 15,
            paddingRight: 5,

            backgroundColor: Colors.WHITE,
            height: Display.setHeight(76),
            width: Display.setWidth(85),
        },
        borderRadiusSecond:
        {


            alignItems: 'center',
            elevation: 14,
            borderRadius: 20,
            marginTop: 50,
            backgroundColor: Colors.WHITE,
            height: Display.setHeight(80),
            width: Display.setWidth(85),

        },
        titletext:
        {

            textAlign: 'center',
            fontSize: 20,
            color: Colors.BLACK,
            fontFamily: Fonts.Nunito_Bold,

        },
        button:
        {


            justifyContent: 'center', borderColor: Colors.BLACK, borderRadius: 100, borderWidth: 1,
            marginTop: 15,
          
            height: 45,

            justifyContent: 'center',
            alignItems: 'center',
            width:250

        },


        buttontext: {
            fontWeight: "bold",
            fontFamily: Fonts.Nunito_back,
            textAlign: 'center',
            fontSize: 15,
            color: Colors.BLACK,
        },

    }
);

// const mapDispatchToProps = dispatch => {
//     return {
//       setScore: score => dispatch(ScoreAction.setIsQuizScore(score)),
//     };
//   };
export default  QuestionAnswer;