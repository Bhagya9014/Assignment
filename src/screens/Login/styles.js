import { StyleSheet, Dimensions, Platform } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    button:{
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        marginBottom: 15,
        backgroundColor:'#25408F',
    },
    text: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500'
    },
    header: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: -50,
        marginBottom: 50
    },
    otp1:{width: '90%', height: 50,alignSelf:'center',marginTop:20,flexDirection:'row',
    justifyContent:'space-between',alignItems:'center',color:'#000'},
    input:{borderWidth:1,borderColor:'grey',backgroundColor:'#FAFAFB',
    color:'#000', },
    input1:{color:'#000',textAlign:'center', width:50,height:50,}
})

export default styles;