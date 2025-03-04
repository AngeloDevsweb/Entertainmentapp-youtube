import { View, Text, FlatList, Image, TouchableOpacity, StatusBar } from "react-native";
import React from "react";
import animes from "../data/animes.json";
import {useNavigation} from '@react-navigation/native'

const AnimesList = () => {
    const navigation = useNavigation()
  return (
    <View className="px-4 space-y-2 mb-4">
      <StatusBar barStyle="light-content" />
      <Text className="text-gray-300 text-2xl font-bold mb-4 mt-4">Animes del Momento</Text>
      <FlatList
        data={animes}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity className="mr-4" onPress={()=>navigation.navigate('Detail', {content:item})}>
            <Image
              source={{ uri: item.imagen_url }}
              className="w-32 h-60 rounded-lg"
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default AnimesList;
