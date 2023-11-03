
import { View, Text, Pressable, Modal, Button, Switch, Alert } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';

    export default function Task( props ) {

        const handleDeletePress = () => {

            // props['onPostDelete']( props.task.id )

            Alert.alert( 'Remove Task', 'This action will permanently delete this task. This action cannot be undone!', [ { 
                text: 'Confirm',
                onPress: () => { 

                    // props.onTaskRemoval( props.task.id );
                    props['onPostDelete']( props.task.id )

                } }, 
                { text: 'Cancel' }
            ] );

        }

        const handleSwitchPress = () => {

            props['switchPost']( props.task.id )
            
        }

        const [ taskDone, setTaskDone ] = useState( false )

        const handleSwitchChange = ( newValue ) => {

            toggleSwitch()
            onValueChange( newValue )
            
        }

        const toggleSwitch = () => handleStatusChange( previousState => !previousState );

        const handleStatusChange = ( value ) => {

            setTaskDone( value )

        }

        const onValueChange = statValue => {
            
            setValue( statValue )
          
        }

       
        const [ statValue, setValue ] = useState( false )

        const [ modalVisible, setModalVisible ] = useState( false )

        const closeModal = () => { 
            
            setModalVisible( !modalVisible )
        
        }

        const com = "Completed"

        return (
            <View>
                <Pressable onPress={ () => {  setModalVisible( true ) } } >
                    <View style = { [ styles.container, { flexDirection: 'column' } ] } >
                    
                        <View style = { styles.secondCon } >

                            <View style = { styles.descriptionCon } >

                                <Text style = { styles.txtDate }> { props.task.date }</Text>
                                
                            </View>
                            
                            <View style = { styles.statusCon } > 
                            
                                <Text style = { styles.txtStat } >
                                    Status: { props.task.done ? 'Completed' : 'Ongiong'}
                                </Text>
                            
                            </View>

                        </View>

                        <View style = { styles.thirdCon } >

                            <Text> { props.task.description }</Text>

                        </View>

                        <Text style = { styles.idTaskStyle }>Id: { props.task.id }</Text>
                        
                    </View>
                </Pressable>

                <View style = { { flex: 1, width : 'auto', height : 'auto' } } >

                    <Modal animationType="fade" transparent = { true } visible = { modalVisible } onRequestClose = { () => { setModalVisible( !modalVisible ) } } >
                        <View style = { [ styles.centeredView ] } >
                            <View style = { [ styles.modalView ] } >

                                <View style={ { flexDirection: 'row', alignItems: 'flex-end', alignSelf: 'flex-end' } }>
                                    
                                    <View style={ { flexDirection: 'row', alignItems: 'center' } }>
                                        
                                        <Button style={ { borderRadius: 10 } } title="X" color={ 'red' } onPress={ () => { setModalVisible( !modalVisible ) }} />
                                        
                                        <Pressable onPress={ closeModal } >
                                            <Text style={ { margin : 5 } }>Close</Text>
                                        </Pressable>

                                    </View>

                                </View>

                                <View>
                                    <Text style={ { fontSize : 20, fontStyle : 'italic', paddingTop : 10, marginTop : 5, paddingBottom : 5, marginBottom : 10 } }> { props.task.description }</Text>
                                </View>

                                <View style={ { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'} }>

                                    <View style={ { flexDirection: 'row', alignItems: 'center'} }>

                                        <View>
                                            <Text>{ props.task.done ? 'Completed' : 'Ongiong'}</Text>
                                        </View>

                                        <View>
                                            
                                            <Switch
                                            trackColor          = { { false: '#767577', true: '#97e50d' } }
                                            thumbColor          = { taskDone ? '#4e7607' : '#f4f3f4' }
                                            ios_backgroundColor = "#3e3e3e"
                                            onValueChange       = { handleSwitchChange }
                                            // value               = { taskDone }
                                            value               = { props.task.done == com ? false : props.task.done == true  }
                                            style               = { { transform: [ { scaleX: 1 }, { scaleY: 1 } ] } }
                                            onChange            = { handleSwitchPress }
                                            />  

                                        </View>

                                    </View>

                                    <View>

                                        <Pressable style={ { flexDirection: 'row', alignItems: 'center' } } onPress={ handleDeletePress }>
                                        
                                        <Ionicons name="trash" color={ 'red' } size={ 26 } />
                                        <Text style={ { color: 'red' } }>  Remove</Text>
                                        
                                        </Pressable>

                                    </View>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>
            </View>

        ); 
    }


