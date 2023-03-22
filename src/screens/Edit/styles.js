import { StyleSheet, Dimensions, Platform } from 'react-native';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        // paddingHorizontal: 20
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
      header: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: -50,
        marginBottom: 50
    },
      button:{
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        marginBottom: 15,
        backgroundColor:'#25408F',
        width: width/2.5
    },
    text: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500'
    },
    rowStyle:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default styles;