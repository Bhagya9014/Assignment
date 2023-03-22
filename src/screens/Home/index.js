import React, { useState, useEffect } from "react";
import {
    View, Text, TouchableOpacity, FlatList, BackHandler
} from "react-native";
import styles from "./styles";
import Edit from "../Edit";

const Home = (props) => {
    const [data, setData] = useState([
        {
          id: '1',
          title: 'First Item',
        },
        {
          id: '2',
          title: 'Second Item',
        },
        {
          id: '3',
          title: 'Third Item',
        },
      ]);
      const [selectedItem,setSelectedItem] = useState({});
      const [setItem,setSetItem] = useState(false); 

      useEffect(() => {
        if(props.entiredArr){
          setData(props.entiredArr)
        }
        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        return () => {
          BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
        };
      }, [])

      const handleBackButtonClick = () =>{
        return true;
      }
    
      const _renderItem = (item, index) => {
        return (
          <TouchableOpacity style={styles.itemStyle} onPress={() => {
            setSelectedItem(item)
            setSetItem(true)
          }}>
            <View style={styles.cityTextView}>
              <Text style={styles.cityItemText}>{item?.title}</Text>
            </View>
          </TouchableOpacity>
        )
      }

    return(
      <View style={[styles.container,{  paddingHorizontal: props.from == 'app' ? 20 : 0 }]}>
        {setItem ? <Edit selectedItem={selectedItem} entireArr={data} /> :
            <View>
            <Text style={styles.header}>HOME</Text>
            <FlatList
                data={data}
                renderItem={({ item, index }) => _renderItem(item, index)}
                keyExtractor={item => item.id}
            />
            </View>}
        </View>
    )
}

export default Home;