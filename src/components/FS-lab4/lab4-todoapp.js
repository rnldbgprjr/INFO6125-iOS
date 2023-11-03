

import React, { useEffect, useState } from 'react'
import { Text, View, Pressable, Modal, Button, Switch, Alert,ScrollView } from 'react-native'
import { collection, getDocs, updateDoc, deleteDoc, doc, onSnapshot } from 'firebase/firestore'
import { Platform } from 'react-native'
import { dbFS } from '../../firebase/firebaseConfig'
import { Ionicons } from '@expo/vector-icons'
import styles from './styles'


function LabFourTodoApp() {

    const [ data, setData ] = useState( [] )
    const [ selectedItem, setSelectedItem ] = useState( null )
    const [ todoDate, setDate ] = useState( null )

    useEffect( () => {

    const dbCollection = collection( dbFS, 'todo-apps' );
    const unsubscribe = onSnapshot( dbCollection, ( snapshot ) => {
      
        const newData = []
        snapshot.forEach( ( doc ) => {

        const dateTimestamp = doc.data().date
        const dateStamp = dateTimestamp.toDate()
        setDate( dateStamp );

        const post = {

            id: doc.id,
            ...doc.data(),

        }

        newData.push( post )

        } )
        console.log( 'DATA: ', newData )
        setData( newData )
    } )

    return () => {
        
        unsubscribe()

    }

    }, [] )


    // * * *  DATE FORMAT CONTROL * * * * 

    const formatDate = ( date ) => {
        const options = { year: 'numeric', month: 'long', day: '2-digit' };
        return date.toLocaleDateString(undefined, options);
      }

    // * * *  MODAL SECTION CONTROL * * * *  * * *

    const openModal = ( item ) => {

        setSelectedItem( item )
        setModalVisible( true )
        
    }

    const [ modalVisible, setModalVisible ] = useState( false )

    const closeModal = () => {

        setModalVisible( false )

    }


    // * * *  REMOVE / DELETE SECTION CONTROL * * * * 

    const handleDeletePress =  ( id  ) => {
        
        const deleteRef = doc ( dbFS, 'todo-apps', id )
        console.log( 'deleteRef :', deleteRef)

        Alert.alert('Remove Task', 'This action will permanently delete this task. This action cannot be undone!', [
            {
                
                text: 'Confirm',
                onPress: async () => {
                    try {
                        
                        await deleteDoc( deleteRef )
                    }
                    catch( error ) {
                        console.log( 'Error in deleteing : ', error )
                    }            
                }
            },
            { text: 'Cancel' }
        ] )
    }


    // * * *  STATUS SECTION CONTROL ( Completed / Ongoing ) * * * * 

     const handleStatusChange = async ( id, newStatus ) => {

        try {

            await updateDoc( doc( dbFS, 'todo-apps', id ), {

              status: newStatus

            } )

            setModalVisible( false )

        } catch ( error ) {

            console.error( 'Error updating status:', error )

        }

    }

  return (
    <ScrollView>
      {data.map( ( item ) => (
        
        <Pressable key={ item.id } onPress={ () => openModal( item ) } >

          <View style={ [ styles.container, { flexDirection: 'column' } ] } >
            <View style= {styles.secondCon } >
              <View style={ styles.dateView } >
                <Text style={ styles.txtDate }> Date Post : </Text>
                <Text style={ styles.txtDateFormat }> { todoDate ? formatDate( todoDate ) : '' }  </Text>
              </View>
              <View style={ styles.statusCon } >
                <Text style={ styles.txtStat } >
                  Status: { item.status ? 'Completed' : 'Ongoing' }
                </Text>
              </View>
            </View>
            <View style={ styles.thirdCon } >
              <Text> { item.description } </Text>
            </View>
            <Text style={ styles.idTaskStyle } > Id: { item.id } </Text>
          </View>

        </Pressable>
      ) ) }

        {/***************** MODEL SECTION */}

        <Modal animationType="fade" transparent = { true } visible = { modalVisible } onRequestClose = { () => { setModalVisible( !modalVisible ) } } >
        { selectedItem && (
                    <View style = { [ styles.centeredView ] } >
                        <View style = { [ styles.modalView ] } >

                            <View style={ { flexDirection: 'row', alignItems: 'flex-end', alignSelf: 'flex-end' } }>
                                <View style={ { flexDirection: 'row', alignItems: 'center' } } >                                    
                                <Button title="X"
                                        onPress={ () => {

                                            setModalVisible(!modalVisible)

                                        } } />
                                    <Pressable onPress={ closeModal } >
                                        <Text style={ { margin : 5 } }>Close</Text>
                                    </Pressable>
                                </View>
                            </View>

                             <View>
                                <Text style={ { fontSize : 20, fontStyle : 'italic', paddingTop : 10, marginTop : 5, paddingBottom : 5, marginBottom : 10 } }> {selectedItem.description}</Text>
                            </View> 

                             <View style={ { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'} }>
                                <View style={ { flexDirection: 'row', alignItems: 'center'} }>

                                    <View>
                                         <Text> { selectedItem.status ? 'Completed' : 'Ongiong'}</Text>
                                    </View>

                                    <View>
                                        <Switch
                                            trackColor          =   { { false: '#767577', true: '#97e50d' } }
                                            thumbColor          =   { selectedItem.status ? '#4e7607' : '#f4f3f4' }
                                            ios_backgroundColor =   "#3e3e3e"
                                            onValueChange       =   { ( newValue ) => handleStatusChange( selectedItem.id, newValue ) } 
                                            value               =   { selectedItem.status }
                                            // style               =   { { transform: [ { scaleX: 1 }, { scaleY: 1 } ] } }
                                            style={ [ Platform.OS === 'ios' ? { transform: [{ scaleX: .7 }, { scaleY: .7 }] } : null ] } />    
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
                     ) }
                </Modal> 

    </ScrollView>
    
  );
}

export default LabFourTodoApp
