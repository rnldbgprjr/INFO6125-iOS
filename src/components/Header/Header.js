import { View, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './styles';

    export default function Header() {

            return (

                <View style = { [ styles.container, styles.headerPadding ] } >
                    
                    <FontAwesome5 name="tasks" size = { 20 } />
                    <Text style = { styles.txtTodo }> Todo App | Lab Activity #4</Text>
                    
                </View>

            );

    }
