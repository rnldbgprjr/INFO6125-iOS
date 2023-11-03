
import React, { useEffect, useState } from 'react'
import { Text, View, FlatList, Pressable, Modal, Button, Switch, Alert } from 'react-native'
import { collection, getDocs, onSnapshot, updateDoc, deleteDoc, doc, queryEqual } from 'firebase/firestore'
import { dbFS } from '../../firebase/firebaseConfig'
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';

export default function LabFourTodoApp() {

    // *** RETRIEVING DATA ****

    const data = []

    const dbCollection = collection( dbFS, 'todo-apps' )

    getDocs( dbCollection )
        .then( ( querySnapshot ) =>{

            querySnapshot.forEach( ( doc ) => {

                const post = {

                    ...doc.data(),
                    id : doc.id
    
                }
    
                data.push( post )

            } )
            console.log( ' DATA : ', data)

        } )
        .catch( ( error ) => {

            console.log( 'TODO ERROR : ', error )
            
        })

    // *** STATUS CHANGE ****

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

    // *** DELETING ****

    const handleDeletePress = ( id ) => {

        Alert.alert('Remove Task', 'This action will permanently delete this task. This action cannot be undone!', [
            {

            text: 'Confirm',
            onPress: () => {
            
                handleDeleteTask( id )
            
            } },

            { text: 'Cancel' },
            
        ] )
    }

    const handleDeleteTask = async ( id ) => {

        // Delete the task in Firestore
    try {
        await deleteDoc(doc(dbFS, 'todo-apps', id));
        setModalVisible(false);
        // Fetch data again after deletion
        const todoCollection = collection(dbFS, 'todo-apps');
        const querySnapshot = await getDocs(todoCollection);
        const todos = [];
        querySnapshot.forEach((doc) => {
          todos.push({ id: doc.id, ...doc.data() });
        });
        setAllTodoData(todos);
      } catch (error) {
        console.error('Error deleting task:', error);
      }
    
        // const todoPost = doc( dbFS, 'todo-apps', id )

        // console.log( todoPost )

        // deleteDoc(todoPost)
        // .then(() => {
        //   console.log(`Task with ID ${id} deleted.`);
        //   setModalVisible(false);
        // })
        // .catch((error) => {
        //   console.error('Error deleting task:', error);
        // });
        
        // try {
          
        //   deleteDoc( doc( dbFS, 'todo-apps', id ) )
        //   console.log( `Task with ID ${ id } deleted.` )

        // } catch ( error ) {

        //   console.error('Error deleting task:', error);

        // }
    }

    // *** M O D A L ****

    // const [ modalVisible, setModalVisible ] = useState( false )

    // const closeModal = (taskIndex) => {

    //     const updatedPost = [ ...post ]
    //     updatedPost[ taskIndex ].modalVisible = false
    //     setPost( updatedPost )

    // }

    const closeModal = () => {
        setModalVisible(false);
      };
    
    const renderItem = ( { item } ) => (

        <View>

            <Pressable onPress={ () => {  setModalVisible( true ) } } >
                <View style = { [ styles.container, { flexDirection: 'column' } ] } >
                    <View style = { styles.secondCon } >

                        <View style = { styles.descriptionCon } >

                            {/* <Text style = { styles.txtDate }> Date : {formatDateFromTimestamp(item.timestamp)} </Text> */}
                            <Text style = { styles.txtDate }> Date : ? ? ? </Text>

                        </View>
                        <View style = { styles.statusCon } > 
                            
                                <Text style = { styles.txtStat } >
                                Status: {item.status ? 'Completed' : 'Ongoing'}
                                </Text>
                            
                        </View>
                    </View>

                    <View style = { styles.thirdCon } >

                        <Text> { item.description }</Text>

                    </View>

                    <Text style = { styles.idTaskStyle }>Id: { item.id }</Text>

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
                                <Text style={ { fontSize : 20, fontStyle : 'italic', paddingTop : 10, marginTop : 5, paddingBottom : 5, marginBottom : 10 } }> { item.description }</Text>
                            </View>

                            <View style={ { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'} }>

                                <View style={ { flexDirection: 'row', alignItems: 'center'} }>

                                    <View>
                                        <Text>{ item.status ? 'Completed' : 'Ongiong'}</Text>
                                    </View>

                                    <View>
                                        
                                    <Switch
                                        trackColor          =   { { false: '#767577', true: '#97e50d' } }
                                        thumbColor          =   { item.status ? '#4e7607' : '#f4f3f4' }
                                        ios_backgroundColor =   "#3e3e3e"
                                        onValueChange       =   { ( newValue ) => handleStatusChange( item.id, newValue ) } 
                                        value               =   { item.status }
                                        style               =   { { transform: [ { scaleX: 1 }, { scaleY: 1 } ] } }
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

    )

// console.log( post )

    return(
        
        <View>
            
            <FlatList data = { data }
                renderItem = { renderItem }
                keyExtractor = { ( item ) => item.id }
            />
    
        </View>

    )

    

}
