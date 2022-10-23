import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import {Feather, Ionicons} from '@expo/vector-icons'
import SwiperComponent from '../componentes/Swiper';
import Stars from 'react-native-stars'


export default function Datail() {
 return (
   <View style={styles.counteiner}>
    <View style={styles.swiperConteint}>
      <SwiperComponent/>
    </View>

    <View style={styles.headerCounteiner}>
    <View style={{width: '65%'}}>
      <Text style={styles.house}>  Casa Na praia    </Text>
    </View>
    <View style={{width: '35%'}}>
      <Text style={styles.rating}>  Avaliações    </Text>
      <View style={{flexDirection:'row', alignItems:'center'}}>
        <Stars
        default={4}
        count={5}
        half={true}
        starSize={20}
        fullStar={<Ionicons name="md-star" size={24} style={styles.myStar} />}
        emptyStar={<Ionicons name="md-star-outline" size={24} style={styles.myStar} />}
        halfStar={<Ionicons name="md-star-half" size={24} style={styles.myStar} />}
        
        />
      </View>      
    </View> 
    </View>

    <Text style={styles.price}>  Preço R$ 1.250,00   </Text>
    <Text style={styles.describe}>  Casa a duas quadra da praia, local seguro e vigiado </Text>     
    
   </View>
  );
}

const styles = StyleSheet.create({
  counteiner:{
    flex:1,
    backgroundColor:'#fff',
        

  },
  swiperConteint:{
    flexDirection:'row',
    height:340,
    width:'100%',

  },
  headerCounteiner:{
    paddingHorizontal:20,
    alignItems:'center',
    flexDirection:'row',
    width:'100%',
    marginTop:20,

  },
  house:{
    fontFamily:'Montserrat_700Bold',
    fontSize:18,
    color:'#4f4a4a'

  },
  rating:{
    fontFamily:'Montserrat_700Bold',
    fontSize:9,
    color:'#4f4a4a'

  },
  myStar:{
    color:'#DAA520',
    backgroundColor:'tranparent',
  },
  describe:{
    fontSize:16,
    paddingHorizontal:20,
    lineHeight:20,
    marginTop:15,
    fontFamily:'Montserrat_400Regular'

  },
  price:{
    fontSize:18,
    paddingHorizontal:20,
    marginTop:15,
    justifyContent:'center',
    fontFamily:'Montserrat_700Bold'

  }
  

});