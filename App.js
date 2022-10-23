import * as React from 'react';
import {AppLoading} from 'expo';
import { StatusBar } from "react-native";
import { useFonts,
  Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

import  Routes  from "./src/routes";

export default function App() {   
  const fontsLoaded = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <>
      <StatusBar backgroundColor="#000" barStyle="light" translucent={false}/>
      <Routes/>
    </>
  );
}