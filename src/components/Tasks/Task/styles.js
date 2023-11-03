import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        margin: 6,
        padding: 10,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#bcbcbc'
    },
    secondCon : {
        flex : 1,
        flexDirection : 'row',
        // backgroundColor : 'red',
        justifyContent : 'space-around'
    },
    thirdCon : {
        flex : 1,
        marginTop : 10,
        marginBottom : 10
    },
    descriptionCon : {
        flex : 1
    },
    statusCon : {
        flex: 2,
        alignItems : 'flex-end'
    },
    idTaskStyle : {
        fontSize : 10,
        marginTop : 13,
        color : 'gray'
    },
    txtStat : {
        fontSize : 12
    },
    txtDate : {
        fontSize : 10
    },

    // MODAL STYLE PROPERTIES

    centeredView : {
        flex            : 1,
        justifyContent  : 'center',
        alignItems      : 'center',
        backgroundColor : 'rgba(52, 52, 52, 0.3)',
    },
    modalView : {
        width           : 300,
        backgroundColor : 'white',
        borderRadius    : 50,
        padding         : 25,
        alignSelf       : 'center',
        shadowColor     : '#000',
        // shadowOffset : {
        //     width       : 1,
        //     height      : 200,
        // },
        // shadowOpacity   : 0.70,
        // shadowRadius    : 5,
        elevation       : 70,
        flexBasis       :'auto'
    },
    modalBtnX : {
        width : 100
    },


});

export default styles;