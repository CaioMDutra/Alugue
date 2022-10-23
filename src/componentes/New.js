import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import {Ionicons} from '@expo/vector-icons'

export default function New(props) {
 return (
   <TouchableOpacity onPress={props.onPress} style={styles.counteiner}>
    <Image
    source={props.cover}
    style={styles.cover}
    />
    <View style={styles.content}>
        <Text style={styles.title}>{props.name}</Text>

        <View style={styles.dot}>
        </View>

        <Text style={styles.badge}>Novo</Text>

    </View>

    <Text style={styles.description}>{props.description}</Text>

    <View style={styles.footer}>
        <View style={{width: '80%'}}>
            <Text style={styles.price}>{props.price}</Text>
        </View>
        <View style={{width: '20%'}}>
            <Ionicons name="ios-add-circle" size={24} color='black'/>
        </View>
    </View>
    
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    counteiner:{
        marginTop:20,
        backgroundColor:"#fff",
        width: 200,
        height:250,
        elevation:2,
        borderRadius:10,
        padding:15,
        marginBottom:5,
        marginTop:30,
        marginLeft:2,

    },
    cover:{
        width: 170,
        height:110,
        borderRadius:10,


    },
    content:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:10,

    },
    title:{
        fontFamily:'Montserrat_700Bold',
        fontSize:12,
        color:'#4f4a4a'
    },
    dot:{
        width:4,
        height:4,
        borderRadius:4,
        backgroundColor:'green',
        marginHorizontal:4,

    },
    badge:{
        fontFamily:'Montserrat_700Bold',
        fontSize:8,
        color:'green'
    },
    description:{
        fontFamily:'Montserrat_400Regular',
        fontSize:9,
        color:'#4f4a4a'

    },
    footer:{
        flexDirection:'row',
        marginTop:5,
        alignItems:'center',
        width:'100%',
    },
    price:{
        fontSize:15,
        fontFamily:'Montserrat_700Bold',
    }




});