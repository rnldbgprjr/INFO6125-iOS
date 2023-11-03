import { Text, KeyboardAvoidingView, Platform  } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './styles';

    export default function Footer() {

        return ( 

            <KeyboardAvoidingView style = { styles.container }  >

                <FontAwesome5 name="copyright" size = { 10 } style = { styles.txtStyle }/>
                <Text style = { styles.txtStyle } > by Bagaporo | INFO6129 - Cross Platform Mobile Dev. </Text>

            </KeyboardAvoidingView>

            
        );

    }
