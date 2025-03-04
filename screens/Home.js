import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import MoviesList from '../components/MoviesList'
import AnimesList from '../components/AnimesList'
import SeriesList from '../components/SeriesList'

const Home = () => {
  return (
    <ScrollView className="flex-1 bg-zinc-950" nestedScrollEnabled={true}>
      <Text className="text-white text-2xl font-bold text-center mt-6">APPMOVIEDEV</Text>
      <View className="py-4">
            <MoviesList />
            <AnimesList />
            <SeriesList />
      </View>
    </ScrollView>
  )
}

export default Home
