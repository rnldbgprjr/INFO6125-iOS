
import { StyleSheet } from "react-native";

const styles = StyleSheet.create( {

    mainContainer : {

        flex : 1,
        flexDirection : 'column',

        // backgroundColor : 'gray',
        alignSelf : 'stretch',
        flexDirection : 'column',
        padding : 20,

        
        
    },

    titleForm : {

        paddingTop : 40,
        borderBottomColor: 'green',
        borderBottomWidth: 3,
        
    },

    txtTitle : {

        fontWeight : 'bold',
        fontSize : 30
    },

    pheriperals : {

        paddingTop : 40,

    },

    // * * * TEXT INPUT STYLE * * *

    txtInputView : {

        backgroundColor : 'white',
        maxWidth : 500,
        padding : 3

    },

    txtInput : {

        borderWidth : 1,
        height : 130,
        padding : 6,
        textAlignVertical: 'top',
        marginTop : 3,
        
    },

    // * * * STATUS AND SWITCH STYLE * * *
    
    statSwitch : {

        flexDirection : 'column',
        alignContent : 'flex-end',
        alignItems : 'flex-end'

    },

    txtStatus : {

        paddingRight : 10,
        fontWeight : 'bold',
        
    },

    // * * * ADD TODO STYLE * * *

    viewButton : {

        paddingTop : 20,
        alignItems : 'center'

    },

    pressStyle : {

        backgroundColor : '#3C4C24',
        alignItems : 'center',
        justifyContent :'center',
        width : 200,
        height : 50,
        borderRadius : 10

    }

})

export default styles