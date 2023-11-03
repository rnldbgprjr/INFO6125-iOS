
import React from 'react';
import { View, ScrollView } from 'react-native';
import Task from './Task/Task';
import styles from './styles';

export default function Tasks ( props ) {
    
    const reversedTasks = [ ...props.tasks ].reverse();

    return (

        <View style={ styles.container }>

            <ScrollView>

                { reversedTasks.map( ( task, index ) => (

                    <Task
                        task            = { task }
                        key             = { index }
                        onPostDelete    = { props.onPostDelete }
                        switchPost      = { props.switchPost }
                    />

                ))}

            </ScrollView>

        </View>

    );
}