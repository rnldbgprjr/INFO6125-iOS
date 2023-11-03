import { StyleSheet } from 'react-native';

const styles = StyleSheet.create( {
    container : {
        alignSelf   : 'stretch',
    },
    centeredView : {
        flex            : 1,
        justifyContent  : 'center',
        alignItems      : 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.3)'
    },
    rightView : {
        alignItems      : 'flex-end',
        backgroundColor : '#e0e0e0'
    },
    modalView : {
        backgroundColor : 'white',
        borderRadius    : 20,
        padding         : 35,
        alignSelf       : 'center',
        shadowColor     : '#000',
        shadowOffset : {
            width       : 0,
            height      : 10,
        },
        shadowOpacity   : 0.50,
        shadowRadius    : 10,
        elevation       : 50,
        flexBasis       :'auto'
    },
    button : {
        borderRadius    : 10,
        padding         : 12,
    },
    modalButton : {
        borderRadius    : 10,
        margin          : 10,
        width           : 100
    },
    buttonClose : {
        backgroundColor : '#2196F3', // background Add button
    },
    buttonCancel : {
        backgroundColor : '#FF6961', // background Cancel button
    },
    pressableView : {
        flexDirection   : 'row',
        alignItems      : 'flex-start',
        justifyContent  : 'center',
    },
    textStyle : {
        color           : 'white',
        fontWeight      : 'bold',
        textAlign       : 'center',
    },
    addTasks : {
        color           : 'black',
        fontWeight      : 'bold',
        textAlign       : 'center',
        justifyContent  : 'center',
        fontSize        : 17,
        padding         : 10
    },
    modalText : {
        marginBottom    : 15,
        textAlign       : 'center',
    },
    txtInput : {
        borderStyle     : 'solid',
        borderRadius    : 10,
        borderWidth     : 1,
        height          : 50,
        width           : 300,
        textAlign       : 'center',
        justifyContent  : 'center',
    },
    errMessage : {
        color           : '#FF6961',
        fontWeight      : 'bold',
        margin          : 10
    },
    switchView : {
        flexDirection   : 'row',
        justifyContent  : 'flex-end',
        marginBottom    : 10
    }
});

export default styles;