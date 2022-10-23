import React from 'react';
import { View, TextInput, ScrollView, StyleSheet, Text, } from 'react-native';
import {Feather} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';


import New from '../componentes/New';
import House from '../componentes/House';
import Recomand from '../componentes/Recomand';

export default function Home() {
  const navigation = useNavigation(); 

 return (
   <ScrollView
   showsVerticalScrollIndicator={false}
   style={{backgroundColor:'#fff'}}
   >
    <View style={styles.header}>
      <View style={styles.inptArea}>
        <Feather name='search' size={24} color="#000"/>
        <TextInput placeholder='O que está procurando?' style={styles.input}/>
      </View>      
    </View>

    <View style={styles.contentNew}>
      <Text style={styles.title}>Novidades</Text>
    </View>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15}}>
      <New
      cover={require('../../assets/house1.jpg')}
      name='Casa na praia'
      description='Casa de frente para o mar, vigiada 24h'
      price='1.250,00'
      onPress={()=> navigation.navigate('datail')}
      />
       <New
      cover={require('../../assets/house2.jpg')}
      name='Rancho SP'
      description='Casa de frente para o mar, vigiada 24h'
      price='1.100,00'
      onPress={()=>navigation.navigate('datail')}
      />
       <New
      cover={require('../../assets/house3.jpg')}
      name='Casa Floripa'
      description='Casa de frente para o mar, vigiada 24h'
      price='1.400,00'
      onPress={()=>navigation.navigate('datail')}
      />
    </ScrollView>

    <View style={styles.contentNew}>
      <Text style={[styles.title,{marginTop:20}]}>Proximo de você</Text>
    </View>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15}}>
      <House
      cover={require('../../assets/house4.jpg')}
      />
      <House
      cover={require('../../assets/house5.jpg')}
      />
      <House
      cover={require('../../assets/house6.jpg')}
      />
    </ScrollView>
    
    <View style={styles.contentNew}>
    <Text style={[styles.title,{marginTop:20}]}>Dica do dia</Text>
    </View>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15}}>
      <Recomand
      cover={require('../../assets/house1.jpg')}
      name='Casa na praia'
      offer='25%'
      />
        <Recomand
      cover={require('../../assets/house2.jpg')}
      name='Rancho SP'
      offer='20%'
      />
        <Recomand
      cover={require('../../assets/house3.jpg')}
      name='Casa Floripa'
      offer='15%'
      />
    </ScrollView>

   </ScrollView>
  );
}

const styles = StyleSheet.create({
  header:{
    paddingHorizontal:15,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
    width: '100%',
    marginVertical:20, 

  },
  inptArea:{
    paddingHorizontal:10,
    flexDirection: 'row',
    alignItems:'center',
    width: '98%',
    backgroundColor:"#fff",
    elevation:2,
    borderRadius:10,
    height:37,
    
  },
  input:{
    fontFamily:'Montserrat_500Medium',
    paddingHorizontal:10,
    fontSize:13,
    width:'99%',
    
  },
  contentNew:{
    flexDirection:'row',
    alignItems:'center',
    width:'100%',
  },
  title:{
    fontFamily:'Montserrat_700Bold',
    fontSize:18,
    paddingHorizontal: 15,
    color:'#4f4a4a'

  },

});