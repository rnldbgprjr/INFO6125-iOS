import { View, Text, Modal, Pressable, TextInput, Switch, Keyboard } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import React, { useState } from 'react';
import styles from './styles';

    export default function Form( props ) { 

        const [ modalVisible, setModalVisible ] = useState( false )

        const [ statValue, setValue ] = useState( false )

        const [ taskDescription, setTaskDescription ] = useState( '' )

        const [ taskDone, setTaskDone ] = useState( false )

        const [ errorMessage, setErrorMessage] = useState( null )

        const toggleSwitch = () => handleStatusChange( previousState => !previousState );

        const handleAddPress = () => {

            if ( taskDescription ) {

                props.onAddTask( taskDescription, taskDone )

                setErrorMessage( null )
                setTaskDescription( '' )
                setTaskDone( false )
                
                Keyboard.dismiss()
                
            } 

        }

        const handleDescriptionChange = ( value ) => {

            setTaskDescription( value )

        }

        const handleStatusChange = ( value ) => {

            setTaskDone( value )

        }

        const clearInputText = () => {
            
            setTaskDescription( '' )

        }

        const onValueChange = statValue => {
            
            setValue( statValue )
          
        }

        const handleSwitchChange = ( newValue ) => {

            toggleSwitch() 
            onValueChange( newValue )

        }

        
        return ( 
            
            <View style = { styles.container } >

                <View style = { { flex: 1, width : 'auto', height : 'auto' } } >

                    <View>

                            <View style = { [ styles.modalView ] } >

                                <View style = { [ styles.switchView ] } >

                                    <View style = { [ { flexDirection : 'column', justifyContent : 'center', marginRight : 10 } ] } >
                                        
                                        <Text> { statValue ? "Completed" : "Ongoing" } </Text>
                                        
                                    </View>

                                    <View >

                                        <Switch
                                            trackColor          = { { false: '#767577', true: '#97e50d' } }
                                            thumbColor          = { taskDone ? '#4e7607' : '#f4f3f4' }
                                            ios_backgroundColor = "#3e3e3e"
                                            onValueChange       = { handleSwitchChange }
                                            value               = { taskDone }
                                            style               = { { transform: [ { scaleX: .7 }, { scaleY: .7 } ] } }
                                        />

                                    </View>

                                </View>


                                <View style = { { alignItems : 'center' } }>
                                    
                                    <TextInput
                                        placeholder     = 'Enter your task description'
                                        maxLength       = { 100 }
                                        style           = { styles.txtInput }
                                        onChangeText    = { handleDescriptionChange }
                                        defaultValue    = { taskDescription } />

                                    { errorMessage && (

                                            <View>

                                                <Text style = { styles.errMessage } > { errorMessage } </Text>
                                            
                                            </View>

                                        ) 
                                    }

                                </View>


                                <View style = { [ styles.pressableView ] } >
                                
                                    <Pressable
                                        style = { [ styles.button, styles.buttonClose, styles.modalButton ] }
                                        onPress = { () => {
                                            
                                            if ( taskDescription ) {
            
                                                handleAddPress()
                                                setModalVisible( !modalVisible )
                                                clearInputText()
                                                handleSwitchChange()
                                                handleStatusChange()
                                                
                                            } else {
            
                                                setErrorMessage( 'Your tasks description is required.' )
                                    
                                            }                
            
                                        }} >

                                        <Text style = { styles.textStyle } >Add</Text>
                                    
                                    </Pressable>
        
                                    {/* <Pressable
                                        style = { [ styles.button, styles.buttonCancel, styles.modalButton ] }
                                        onPress = { () => {
            
                                                setModalVisible( !modalVisible )
                                                clearInputText()
                                                setErrorMessage("")
                                                handleSwitchChange()
                                                handleStatusChange()
                                                

                                        }} >

                                        <Text style = { styles.textStyle } >Cancel</Text>
                                    
                                    </Pressable> */}
        
                                </View>
                            
                            </View>
                        
                        </View>
    
                </View>

            </View>
            
        ); 
    }
