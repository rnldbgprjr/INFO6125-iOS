   
   
   
   
   
   
    useEffect(() => {
    
        const fetchData = async () => {
          const dbCollection = collection(dbFS, 'todo-apps');
          try {
            const querySnapshot = await getDocs(dbCollection);
    
            const newData = [];
            querySnapshot.forEach((doc) => {
              const post = {
                ...doc.data(),
                id: doc.id,
              };
              newData.push(post);
            });
    
            setData(newData);
          } catch (error) {
            console.error('TODO ERROR:', error);
          }
        }
    
        fetchData();
      }, [])


      
   // const [allTodoData, setAllTodoData] = useState([]);
        // const [modalVisible, setModalVisible] = useState(false);

        // useEffect( () => {
            
        //     const fetchData = async () => {

        //         const todoCollection = collection( dbFS, 'todo-apps' )
        //         const querySnapshot = await getDocs( todoCollection )
        //         const todos = []
        //         querySnapshot.forEach( ( doc ) => {

        //             todos.push( { id: doc.id, ...doc.data() } )
                
        //         } )
                
        //         setAllTodoData( todos )
            
        //     }

        //     fetchData()

        // }, [] )

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
    // const allTodoData = []
    // const dbCollection = collection( dbFS, 'todo-apps' )

    // getDocs( dbCollection )
    //     .then( ( querySnapshot ) => {
            
    //         querySnapshot.forEach( ( doc ) => {

    //             const allTodo = {

    //                 ...doc.data(),
    //                 id : doc.id

    //             }
    //             allTodoData.push( allTodo )
    //         } )
    //         console.log( allTodoData )
    //     } )
    //     .catch( ( error ) => {
    //         console.log( 'Error : ', error )
    //     })
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
    // const [ post, setPost ] = useState()
    // const [ loading, setLoading ] = useState( false )

    // useEffect( () => {

    //     setLoading( true ) 

    //     const todoQuery = collection( dbFS, 'todo-apps' )

    //     onSnapshot( todoQuery, ( snapshot ) => {

    //         let todoList = []
    //         snapshot.docs.map( ( doc ) => todoList.push( { ...doc.data(), id : doc.id } ) )
    //         setPost( todoList )
    //         setLoading( false )

    //         // console.log( todoList )

    //     } )

    // }, [] )