const types = {
  SET_TOKEN: 'SET_TOKEN',
  SET_QUIZ_SCORE: 'SET_QUIZ_SCORE',
  SET_API_RESPONCE:'SET_API_RESPONCE',

 };
 const axios = require("axios").default;

 
// GET NOTE
export const do_Quiz = () => (dispatch) =>  {
  const instance = axios.create({
    baseURL: "https://opentdb.com/api.php?amount=10",
  });
  instance.get()
      .then(res => {
    
          dispatch({
             type: types.SET_API_RESPONCE,
              payload: res?.data?.results,
                  
          });

       
      }).catch(error => console.log(error));
};



 const setToken = token => {
   return {
     type: types.SET_TOKEN,
     payload: token,
   };
 };
 const setQuizScore = score => {
   return {
     type: types.SET_QUIZ_SCORE,
     payload: score,
   };
 };
 
 
 export default {setQuizScore, setToken, do_Quiz,types};