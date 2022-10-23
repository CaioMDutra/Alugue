import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import {Ionicons} from '@expo/vector-icons'

export default function House({cover}) {
 return (
    <TouchableOpacity style={styles.counteiner}>
    <Image
    source={cover}
    style={styles.cover}
    />
    <View style={styles.content}>
        <Text style={styles.description}>Casa para você morar, show de bola!</Text>
        <Text style={styles.price}>R$ 1.400,99</Text>
    </View>

    

    <View style={styles.footer}>
        <View style={{width: '80%'}}>
            
        </View>
        <View style={{width: '20%'}}>
        </View>
    </View>
    
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    counteiner:{
        flexDirection:'row',
        backgroundColor:"#fff",
        width: 260,
        height:70,
        elevation:2,
        borderRadius:10,
        padding:6,
        marginVertical:5,
        marginRight:20,
        marginLeft:2,

    },
    cover:{
        width: 60,
        height:50,
        borderRadius:10,

    },
    content:{
        width:'65%',
        paddingHorizontal:10,
        height:'100%',
        justifyContent:'flex-end',

    },
    description:{
    fontFamily:'Montserrat_500Medium',
    fontSize:9,
    color:'#4f4a4a'

    },
    price:{
    fontSize:12,
    fontFamily:'Montserrat_700Bold',
}




});
