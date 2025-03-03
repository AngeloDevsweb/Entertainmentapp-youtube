import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import MoviesList from '../components/MoviesList'

const Home = () => {
  return (
    <ScrollView className="flex-1 bg-zinc-950" nestedScrollEnabled={true}>
      <Text className="text-white text-2xl">Home</Text>
      <View className="py-4">
            <MoviesList />
      </View>
    </ScrollView>
  )
}

export default Home
