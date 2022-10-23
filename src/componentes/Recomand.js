import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

export default function Recomand({cover, name, offer}) {
 return (
   <ImageBackground
   source={cover}
   style={styles.counteiner}
   blurRadius={3}
    >
    <Text style={[styles.house, styles.shadow]}>{name}</Text>
    <Text style={[styles.describe, styles.shadow]}>{offer} Off</Text>
   </ImageBackground>
  );
}

const styles = StyleSheet.create({
    counteiner:{
        height:130,
        width: 230,
        marginRight:20,
        marginBottom: 40,
        marginTop:20,
        marginLeft:2,
        padding:12,        
        opacity:0.8,
        backgroundColor:'#000'

    },
    house:{
        color:'#fff',
        fontFamily:'Montserrat_700Bold',
        fontSize:16,

    },
    describe:{
        color:'#fff',
        fontFamily:'Montserrat_700Bold',
        fontSize:12,
    },
    shadow:{
        textShadowOffset:{width:1, height:2},
        textShadowRadius: 2,
        textShadowColor: "#000"
    }

});