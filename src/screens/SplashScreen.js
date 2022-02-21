import React from "react";
import { View, Text , StyleSheet ,Image,StatusBar} from "react-native";
import Colors from "../contants/Colors";
import Images  from "../contants/Images";
import Fonts from "../contants/fonts";
import { TouchableOpacity } from "react-native-gesture-handler";
import Display from '../utils/Display';
const SplashScreen = ({navigation}) => {
    
//    useEffect(() => {
//           setTimeout(() => {
//             navigation.navigate('QuestionAnswer');
//           }, 1500);
//         }, []);
    


    return (
  <View style = { styles.container  }>
      <StatusBar barStyle="light-content"
      backgroundColor={Colors.PRIMARY_COLOR}
      translucent/>



   <View style = { styles.container  }>
      <Image source={Images.LOGO} resizeMode="contain" style={styles.image}/>
      <Text style={styles.titletext }>Trivia </Text>
      </View>
    
     <TouchableOpacity style ={styles.button}
     
     onPress={() => navigation.navigate("QuestionAnswer")}
     >
     <Text style={styles.buttontext}>Start Playing </Text>

     </TouchableOpacity>

  </View> 
    );
};
const styles = StyleSheet.create(
    {
                container:{
            backgroundColor: Colors.PRIMARY_COLOR,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
                                                     
        },
        image :
        {

            height: Display.setHeight(15),
            width: Display.setWidth(35),
        },
        titletext:
        {
       
            textAlign:'center',
            fontSize: 20,
          
            color:Colors.BLACK,
            fontFamily:Fonts.Nunito_Bold,
          
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
        },
        buttontext:{

            fontFamily:Fonts.Nunito_back,
            textAlign:'center',
            fontSize: 15,
            color:Colors.BLACK,
        }
    }
);
export default SplashScreen;