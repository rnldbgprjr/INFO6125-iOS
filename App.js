
import { View, Text } from 'react-native';
import * as React from 'react';
import Header from './src/components/Header/Header';
import LabFourTodoApp from './src/components/FS-lab4/lab4-todoapp'
import Form from './src/components/Form/Form';
import Tasks from './src/components/Tasks/Tasks';
import Footer from './src/components/Footer/Footer';
import styles from './src/styles/main';
import uuid from 'react-uuid';
import { NavigationContainer } from '@react-navigation/native';  // new additional Lab3
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // new additional Lab3
import { Ionicons, AntDesign } from '@expo/vector-icons';
import NewTodo from './src/components/FS-lab4/create/create-todoapp';

  export default function App() {

    const [ tasks, setTasks ] = React.useState(
      [
        { 
          id          : uuid(),
          date        : 'Sep 11, 2023',
          description : "Finished Lab Activity #1",
          done        : true
        },
        { 
          id          : uuid(),
          date        : 'Sep 27, 2023',
          description : "Finished Lab Activity #2",
          done        : true
        },
        { 
          id          : uuid(),
          date        : 'October 23, 2023',
          description : "Lab Activity #3",
          done        : false
        },
        
      ]
    )

    
    const handleAddTask = ( taskDescription, taskDone ) => {

      const updatedTasks = [ ...tasks ]

      const getCurrentDate = () => {
    
        const currentDate = new Date();
        const options = { year : 'numeric', month : 'short', day : 'numeric' };
        const formattedDate = currentDate.toLocaleDateString( undefined, options );

        return formattedDate;
        
      }
      
      updatedTasks.push(

        {

          id          : uuid(),
          date        : getCurrentDate(),
          description : taskDescription,
          done        : taskDone

        }

      )

      setTasks( updatedTasks )

    }

    const handlePostDelete = ( id ) => {

      const updatedTasks = tasks.filter( ( task ) => task.id !== id )

      setTasks( updatedTasks )

      // console.log( 'DELETED!' )

    }

    const handleSwitchPost = ( id ) => {

      const updatedStatus = tasks.map( ( task ) => { 

        if ( task.id === id ) { 
          
          task.done = !task.done;
        
        } 

        return task
      
      } )

      setTasks( updatedStatus )
      
    }
   
    function HomeScreen() {

      return (
        
        <View style = { styles.container } >

          <Header />

          <LabFourTodoApp />

        </View>

      );

    }
    
    function TasksForm() {

      return (

        <View style = { styles.container } >

          
          <NewTodo />

          {/* <Text><Form onAddTask = { handleAddTask }/></Text> */}

          {/* <Tasks tasks  = { tasks } 
          onPostDelete  = { handlePostDelete }
          switchPost    = { handleSwitchPost }
          /> */}

        </View>
      );
    }


  const Tab = createBottomTabNavigator();

    return (

      <NavigationContainer >

        <Tab.Navigator>
          <Tab.Screen name = 'Home!' component = { HomeScreen } options = { { tabBarBadge: tasks.length > 0 ? tasks.length : null, headerShown : false, tabBarIcon: ( { color , size } ) => (
            <AntDesign name = "home" color = { color } size = { size } />
          )}}/>
          <Tab.Screen name = "Tasks Form" component = { TasksForm } options = { { length : null ,headerShown : false, headerShown : false,tabBarIcon: ( { color, size } ) => (
            <Ionicons name = "document-attach-outline" color = { color } size = { size } />
          )}}/>
        </Tab.Navigator>
        <View style = { { alignItems: 'center'  } }>
          <Footer />
        </View>
      
      </NavigationContainer>

    );
  }



 
