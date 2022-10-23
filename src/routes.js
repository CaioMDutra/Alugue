import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons'
 
import Home from './pages/Home';
import Datail from './pages/Datail';


const Stack = createNativeStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
         <Stack.Navigator>
          <Stack.Screen
            name="home"
            component={Home}
            options={{
                title: "ALUGUE",
                headerTitleStyle:{
                    fontFamily: 'Montserrat_700Bold',                    
                },
                headerRight: ()=>(
                 <TouchableOpacity style={{marginRight: 15,}}>
                    <Feather
                    name='shopping-bag'
                    size={24}
                    color="#000"
                    />
                </TouchableOpacity>
              )      
            }}
            />
            
        <Stack.Screen
            name="datail"
            component={Datail}
            options={{
                title: "DETALHE",
                headerTitleStyle:{
                    fontFamily: 'Montserrat_700Bold',
                },
                headerRight: ()=>(
                    <TouchableOpacity style={{marginRight: 15 }}>
                    <Feather
                    name='shopping-bag'
                    size={24}
                    color="#000"
                    />
                </TouchableOpacity>
                ) 
                
            }}
        />    
            </Stack.Navigator>
        </NavigationContainer>
        
    )
}

export default Routes;