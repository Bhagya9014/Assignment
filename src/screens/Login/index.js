import React, { useState, useEffect } from "react";
import {
    View, Text, TouchableOpacity,BackHandler
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import OTPInputView from 'react-native-otp-inputs'
import Home from "../Home";

const Login = (props) => {
    const [otp, setOtp] = useState('');
    const [otpSuccess, setOtpSuccess] = useState(false);

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        return () => {
          BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
        };
      }, [])

      const handleBackButtonClick = () =>{
        BackHandler.exitApp();
        return true;
      }

    const handleOTPChange = (otp) =>{
        // console.log("OTP:::::",otp)
       setOtp(otp)
    }

    const submit = async() =>{
        if(otp.length == 0){
            alert('please enter otp')
        }
        else{
            if(otp == '1234'){
                await AsyncStorage.setItem('status','loggedIn')
                setOtpSuccess(true)
            }
            else{
                alert('Please enter valid OTP')
            }
        }
    }

    return(
        <View style={styles.container}>
            {otpSuccess ? <Home from={'login'}/>  :
            <View>
            <Text style={styles.header}>LOGIN</Text>
            <OTPInputView
                style={styles.otp1}
                numberOfInputs={4} 
                selectTextOnFocus={false}
                inputContainerStyles={styles.input}
                code={otp}
                handleChange = {code => {handleOTPChange(code)}}
                autoFocusOnLoad
                keyboardType="phone-pad"
                placeholderTextColor={'#000'}
                inputStyles={styles.input1}
            />
            <TouchableOpacity onPress={() => submit()} style={styles.button}>
                <Text style={styles.text}>LOGIN</Text>
            </TouchableOpacity>
            </View>}
        </View>
    )
}

export default Login;