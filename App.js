
import React,{useEffect,useState} from "react";
import { SafeAreaView } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from './src/screens/Login';
import Home from "./src/screens/Home";

const App = () =>{
  const [getStatus,setGetStatus] = useState('')
  useEffect(() => {
    checkStatus()
  }, [])

  const checkStatus = async() =>{
    var status = await AsyncStorage.getItem('status')
    await setGetStatus(status)
  }

  return(
   <SafeAreaView style={{flex: 1,backgroundColor: '#000'}}>
      {getStatus == 'loggedIn' ? <Home from={'app'}/> : <Login />}
   </SafeAreaView>
  )
}

export default App;