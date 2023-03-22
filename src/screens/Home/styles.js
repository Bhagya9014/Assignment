import { StyleSheet, Dimensions, Platform } from 'react-native';
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20
    },
    itemStyle:{
        width: windowWidth-40,
        backgroundColor: "#FAFAFA",
        alignSelf: 'center',
        justifyContent:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        borderRadius:10,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 7,
        paddingVertical:20,
        marginBottom: 20,
        paddingLeft: 20
    }
})

export default styles;