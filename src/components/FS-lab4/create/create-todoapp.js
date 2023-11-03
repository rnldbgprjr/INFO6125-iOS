
import React, { useState } from 'react'
import { Text, View, Pressable, TextInput, Switch } from 'react-native'
import { collection, addDoc} from 'firebase/firestore'
import { dbFS } from '../../../firebase/firebaseConfig'
import styles from './formStyles'
import { useNavigation } from '@react-navigation/native'

export default function NewTodo() {

    const homeNavigation = useNavigation()

    const [ post, setPost ] = useState( { description : '', status : false, date : new Date() } )

    const toggleSwitch = () => {

        setPost( { ...post, status: !post.status } )

      }
   
    function newTodo() {

        const todoDB = collection( dbFS, 'todo-apps' )
      
        addDoc( todoDB, {

          description: post.description,
          status: post.status,
          date: new Date(),

        } ).then( () => {
          
          setPost( { description: '', status: false, date: new Date() } )

        } )

        homeNavigation.navigate('Home!')

    }

    return(
        
        <View style={ styles.mainContainer }>

            <View style={ [ styles.titleForm, {  backgroundColor : 'red ' } ] } >
                <Text style={ [ styles.txtTitle ] } >
                    Todo List Form
                </Text>
            </View>

            <View style={ [ styles.pheriperals ] }>

                <View style={ [ styles.txtInputView ] } >

                    <Text>
                        Descriptions :
                    </Text>
                    <TextInput editable multiline
                    numberOfLines={ 6 } maxLength={ 300890 } 
                    style={ styles.txtInput } value={ post.description }
                    onChangeText={ ( text ) => setPost( { ...post, description : text } ) }/>

                </View>

                <View style={ [ styles.statSwitch ] } >

                    <View style={ [ { paddingRight : 40, paddingTop : 10, backgroundColor : 'white'}]}>
                        <Text  style={ [ { fontSize : 12 }]}>
                            Status :
                        </Text>
                    </View>
                    
                    <View style={ [ { flexDirection : 'row', alignItems : 'center', paddingTop : 10 } ] } >
                        <Text style={ [ styles.txtStatus ] } >{post.status ? 'Completed' : 'Ongoing'}</Text>

                        <Switch
                        trackColor          = { { false: '#767577', true: '#97e50d' } }
                        thumbColor          = { post.status ? '#4e7607' : '#f4f3f4' }
                        ios_backgroundColor = "#3e3e3e"
                        onValueChange       = { toggleSwitch }
                        value               = { post.status }
                        style={ [ Platform.OS === 'ios' ? { transform: [{ scaleX: .7 }, { scaleY: .7 }] } : null ] } />
                    </View>

                </View>

                <View style={ [  styles.viewButton  ] }>
                    <Pressable onPress={ newTodo } style={ [ styles.pressStyle ] } >
                        <Text style={ { fontSize : 18, fontWeight : 'bold', color : 'white' } } >
                            Add ToDo
                        </Text>
                    </Pressable>
                </View>

            </View>
    
        </View>

    )

    

}
