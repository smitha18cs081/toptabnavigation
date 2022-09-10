import React,{ useState } from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View,Text, StatusBar, SafeAreaView, FlatList,Image } from 'react-native';
import { StyleSheet } from 'react-native';
import {Platform, Button, Modal,Alert,Pressable,} from 'react-native';  


const Tab = createMaterialTopTabNavigator();

export function Home () {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          /*Alert.alert("Modal has been closed.");*/
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>REACT NATIVE TOP NAVIGATION APP</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hello</Text>

            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
        
      >
        <Text style={styles.textStyle}>Hi Everyone.</Text>
      </Pressable>
    </View>
  );
};




    
        

export function Contacts(){
type props={
  name:string,

}
const DATA = [
    
    {
      name:'Smitha',
      number:'9685134123',
    },
    {
      name:'Shreya',
      number:'9861572388',
    },
    {
      name: 'Ramya',
      number: '9541369572',
    },
    {
       name:'Mahesh',
      number:'9574136254',
    },
     {
       name:'Harish',
      number:'7451326986',
    },
     {
       name:'Rama',
      number:'9821457632',
    },
     {
       name:'manoj',
      number:'8546127536',
    },
        {
      name:'Shravya',
      number:'9911335467',
    },
    {
      name:'Ananya',
      number:'7451241584',
    },
    {
       name:'Revathi',
      number:'6845215478',
    },
     {
       name:'Danya',
      number:'9056321547',
    },
     {
       name:'Ashritha',
      number:'7589461523',
    },
     {
       name:'Kiran',
      number:'6354142898',
    },
    {
      name:'Ajay',
      number:'7524861324',
    },
    {
      name:'Nithya',
      number:'8956471235'
    },
    {
      name:'Manisha',
      number:'9006487575'
    }

  ]
  
return (
      
      <SafeAreaView >
      <View style={styles.container}>
     
        <FlatList
          data={DATA}
          renderItem={({item,index})=>{
            return <Text style={styles.listItem}>
             <View style={styles.avatar}>
              <Text style={styles.letter}>{item.name.slice(0, 1).toUpperCase()}</Text>
      </View>
              <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.number}>{item.number}</Text>
            </Text>
          }}
          keyExtractor={(item ,index)=> index.toString()}
        />
        </View>
       
      </SafeAreaView>
    
      
    );

}
export function Albums(){
    return(
        <View style={styles.container}>
     <Image 
style={styles.img}
  source={{
    uri: "https://lh6.googleusercontent.com/bbp7hq0P5RGjquE7yhlMvzHKz7E9-0uF3jJlW5qL4o3q7dEGyrXyPiYddhUomukPN1zDGbqJrpoGfmvfKOpnaHLQgVaVZYW0I7LYE66x-gUygZjMk9eDgUaBW9Fgc9ub_bUZCCxl",
    
  }}
  />
 <Image
style={styles.img}
  source={{
    uri: "https://lh6.googleusercontent.com/bbp7hq0P5RGjquE7yhlMvzHKz7E9-0uF3jJlW5qL4o3q7dEGyrXyPiYddhUomukPN1zDGbqJrpoGfmvfKOpnaHLQgVaVZYW0I7LYE66x-gUygZjMk9eDgUaBW9Fgc9ub_bUZCCxl",
    
  }}
/>
<Image
style={styles.img}
  source={{
    uri: "https://lh6.googleusercontent.com/bbp7hq0P5RGjquE7yhlMvzHKz7E9-0uF3jJlW5qL4o3q7dEGyrXyPiYddhUomukPN1zDGbqJrpoGfmvfKOpnaHLQgVaVZYW0I7LYE66x-gUygZjMk9eDgUaBW9Fgc9ub_bUZCCxl",
    
  }}
/>
<Image
style={styles.img}
  source={{
    uri: "https://lh6.googleusercontent.com/bbp7hq0P5RGjquE7yhlMvzHKz7E9-0uF3jJlW5qL4o3q7dEGyrXyPiYddhUomukPN1zDGbqJrpoGfmvfKOpnaHLQgVaVZYW0I7LYE66x-gUygZjMk9eDgUaBW9Fgc9ub_bUZCCxl",
    
  }}
/>
<Image
style={styles.img}
  source={{
    uri: "https://lh6.googleusercontent.com/bbp7hq0P5RGjquE7yhlMvzHKz7E9-0uF3jJlW5qL4o3q7dEGyrXyPiYddhUomukPN1zDGbqJrpoGfmvfKOpnaHLQgVaVZYW0I7LYE66x-gUygZjMk9eDgUaBW9Fgc9ub_bUZCCxl",
    
  }}
/>
<Image
style={styles.img}
  source={{
    uri: "https://lh6.googleusercontent.com/bbp7hq0P5RGjquE7yhlMvzHKz7E9-0uF3jJlW5qL4o3q7dEGyrXyPiYddhUomukPN1zDGbqJrpoGfmvfKOpnaHLQgVaVZYW0I7LYE66x-gUygZjMk9eDgUaBW9Fgc9ub_bUZCCxl",
    
  }}
/>

<Image
style={styles.img}
  source={{
    uri: "https://lh6.googleusercontent.com/bbp7hq0P5RGjquE7yhlMvzHKz7E9-0uF3jJlW5qL4o3q7dEGyrXyPiYddhUomukPN1zDGbqJrpoGfmvfKOpnaHLQgVaVZYW0I7LYE66x-gUygZjMk9eDgUaBW9Fgc9ub_bUZCCxl",
    
  }}
/>

<Image
style={styles.img}
  source={{
    uri: "https://lh6.googleusercontent.com/bbp7hq0P5RGjquE7yhlMvzHKz7E9-0uF3jJlW5qL4o3q7dEGyrXyPiYddhUomukPN1zDGbqJrpoGfmvfKOpnaHLQgVaVZYW0I7LYE66x-gUygZjMk9eDgUaBW9Fgc9ub_bUZCCxl",
    
  }}
/>

<Image
style={styles.img}
  source={{
    uri: "https://lh6.googleusercontent.com/bbp7hq0P5RGjquE7yhlMvzHKz7E9-0uF3jJlW5qL4o3q7dEGyrXyPiYddhUomukPN1zDGbqJrpoGfmvfKOpnaHLQgVaVZYW0I7LYE66x-gUygZjMk9eDgUaBW9Fgc9ub_bUZCCxl",
    
  }}
/>

<Image
style={styles.img}
  source={{
    uri: "https://lh6.googleusercontent.com/bbp7hq0P5RGjquE7yhlMvzHKz7E9-0uF3jJlW5qL4o3q7dEGyrXyPiYddhUomukPN1zDGbqJrpoGfmvfKOpnaHLQgVaVZYW0I7LYE66x-gUygZjMk9eDgUaBW9Fgc9ub_bUZCCxl",
    
  }}
/>
<Image
style={styles.img}
  source={{
    uri: "https://lh6.googleusercontent.com/bbp7hq0P5RGjquE7yhlMvzHKz7E9-0uF3jJlW5qL4o3q7dEGyrXyPiYddhUomukPN1zDGbqJrpoGfmvfKOpnaHLQgVaVZYW0I7LYE66x-gUygZjMk9eDgUaBW9Fgc9ub_bUZCCxl",
    
  }}
/>

<Image
style={styles.img}
  source={{
    uri: "https://lh6.googleusercontent.com/bbp7hq0P5RGjquE7yhlMvzHKz7E9-0uF3jJlW5qL4o3q7dEGyrXyPiYddhUomukPN1zDGbqJrpoGfmvfKOpnaHLQgVaVZYW0I7LYE66x-gUygZjMk9eDgUaBW9Fgc9ub_bUZCCxl",
    
  }}
/>

<Image
style={styles.img}
  source={{
    uri: "https://lh6.googleusercontent.com/bbp7hq0P5RGjquE7yhlMvzHKz7E9-0uF3jJlW5qL4o3q7dEGyrXyPiYddhUomukPN1zDGbqJrpoGfmvfKOpnaHLQgVaVZYW0I7LYE66x-gUygZjMk9eDgUaBW9Fgc9ub_bUZCCxl",
    
  }}
/>

<Image
style={styles.img}
  source={{
    uri: "https://lh6.googleusercontent.com/bbp7hq0P5RGjquE7yhlMvzHKz7E9-0uF3jJlW5qL4o3q7dEGyrXyPiYddhUomukPN1zDGbqJrpoGfmvfKOpnaHLQgVaVZYW0I7LYE66x-gUygZjMk9eDgUaBW9Fgc9ub_bUZCCxl",
    
  }}
/>

<Image
style={styles.img}
  source={{
    uri: "https://lh6.googleusercontent.com/bbp7hq0P5RGjquE7yhlMvzHKz7E9-0uF3jJlW5qL4o3q7dEGyrXyPiYddhUomukPN1zDGbqJrpoGfmvfKOpnaHLQgVaVZYW0I7LYE66x-gUygZjMk9eDgUaBW9Fgc9ub_bUZCCxl",
    
  }}
/>

<Image
style={styles.img}
  source={{
    uri: "https://lh6.googleusercontent.com/bbp7hq0P5RGjquE7yhlMvzHKz7E9-0uF3jJlW5qL4o3q7dEGyrXyPiYddhUomukPN1zDGbqJrpoGfmvfKOpnaHLQgVaVZYW0I7LYE66x-gUygZjMk9eDgUaBW9Fgc9ub_bUZCCxl",
    
  }}
/>

<Image
style={styles.img}
  source={{
    uri: "https://lh6.googleusercontent.com/bbp7hq0P5RGjquE7yhlMvzHKz7E9-0uF3jJlW5qL4o3q7dEGyrXyPiYddhUomukPN1zDGbqJrpoGfmvfKOpnaHLQgVaVZYW0I7LYE66x-gUygZjMk9eDgUaBW9Fgc9ub_bUZCCxl",
    
  }}
/>

<Image
style={styles.img}
  source={{
    uri: "https://lh6.googleusercontent.com/bbp7hq0P5RGjquE7yhlMvzHKz7E9-0uF3jJlW5qL4o3q7dEGyrXyPiYddhUomukPN1zDGbqJrpoGfmvfKOpnaHLQgVaVZYW0I7LYE66x-gUygZjMk9eDgUaBW9Fgc9ub_bUZCCxl",
    
  }}
/>

<Image
style={styles.img}
  source={{
    uri: "https://lh6.googleusercontent.com/bbp7hq0P5RGjquE7yhlMvzHKz7E9-0uF3jJlW5qL4o3q7dEGyrXyPiYddhUomukPN1zDGbqJrpoGfmvfKOpnaHLQgVaVZYW0I7LYE66x-gUygZjMk9eDgUaBW9Fgc9ub_bUZCCxl",
    
  }}
/>

<Image
style={styles.img}
  source={{
    uri: "https://lh6.googleusercontent.com/bbp7hq0P5RGjquE7yhlMvzHKz7E9-0uF3jJlW5qL4o3q7dEGyrXyPiYddhUomukPN1zDGbqJrpoGfmvfKOpnaHLQgVaVZYW0I7LYE66x-gUygZjMk9eDgUaBW9Fgc9ub_bUZCCxl",
    
  }}
/>

<Image
style={styles.img}
  source={{
    uri: "https://lh6.googleusercontent.com/bbp7hq0P5RGjquE7yhlMvzHKz7E9-0uF3jJlW5qL4o3q7dEGyrXyPiYddhUomukPN1zDGbqJrpoGfmvfKOpnaHLQgVaVZYW0I7LYE66x-gUygZjMk9eDgUaBW9Fgc9ub_bUZCCxl",
    
  }}
/>



</View>
 
    )
}

const styles=StyleSheet.create({
  centeredView: {
    flex: 2,
    justifyContent: "center",
    backgroundColor: "lightpink",
    alignItems: "center",
    marginTop: 22,
    marginBottom:50
  
  },
  button: {
    borderRadius: 80,
    padding: 10,
    elevation: 2,
  },

  buttonOpen: {
    backgroundColor: "blue",
  },

  buttonClose: {
    backgroundColor: "red",
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  
  },

  modalText: {
    
    marginBottom: 20,
    textAlign: "center",
    fontWeight:'bold'
  },

  modalView: {
    margin: 30,
    backgroundColor: "lightgreen",
    borderRadius: 15,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
  },

  /*shadowOffset: {
    width: 2,
    height: 4
  },*/


  listItem: {
     padding: 10,
     backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
   
  },

  
   name: {
         color:'black',
         fontSize:15,
         paddingLeft:35,
         fontWeight:'bold',
         alignItems:'center',

   }, 
     
   letter: {
     fontSize:15,
     color:'black'

   },


  number: {
    fontSize: 15,
    color: 'blue',
    paddingLeft:60,
    justifyContent:'center',
    },
  
  avatar: {
    width: 30,
    height: 30,
    alignItems: 'center',
    borderRadius: 11,
    backgroundColor: 'purple',
    marginLeft:10,
    justifyContent: 'center'
  },

  img:{
height:175,
width:195,
marginLeft:15,
alignItems:"center",
  },

  container:{
    flexDirection:"row",
    flexWrap:"wrap"
  },
});


  
  