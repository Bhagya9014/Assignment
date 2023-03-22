import React, { useState } from "react";
import {
    View, Text, TouchableOpacity, TextInput
} from "react-native";
import styles from './styles';
import Home from "../Home";

const Edit = (props) => {
    const [data, setData] = useState('');
    const [goBack,setGoBack] = useState(false);
    const [changedData, setChangedData] = useState(props.entireArr);

    const onChangeText = (text) =>{
        setData(text)
    }

    const submit = async() =>{
        if(data == ''){
            alert('please enter title')
        }
        else{
        let arr = props.entireArr;
        let selectedIndex = arr.findIndex(item => item == props.selectedItem)
        arr[selectedIndex].title = data;
        await setChangedData(arr)
        setGoBack(true)
        }
    }

    return(
        <View style={styles.container}>
            {goBack ? <Home entiredArr={changedData}/> :
            <View>
            <Text style={styles.header}>EDIT</Text>
            <TextInput
                style={styles.input} 
                placeholder='Enter Titlemiddle'
                onChangeText={onChangeText}
                value={data}
            />
            <View style={styles.rowStyle}>
             <TouchableOpacity onPress={() => submit()} style={styles.button}>
                <Text style={styles.text}>SAVE</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setGoBack(true)} style={styles.button}>
                <Text style={styles.text}>CANCEL</Text>
            </TouchableOpacity>
            </View>
            </View> }
        </View>
    )
}

export default Edit;