import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCarrds from './components/FlatCarrds'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'



const App = () => {
  return (
   <SafeAreaView>
    <ScrollView>
    <FlatCarrds/>
    <ElevatedCards/>
    <FancyCard/>
    <ActionCard/>
    </ScrollView>
   
      
      
      
    </SafeAreaView>
  )
}

export default App