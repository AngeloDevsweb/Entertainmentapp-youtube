import { View, Text, FlatList, Image, TouchableOpacity, StatusBar } from "react-native";
import React from "react";
import peliculas from "../data/peliculas";

const MoviesList = () => {
    //console.log(peliculas); // Asegúrate de que tiene datos
  return (
    <View className="px-4 space-y-2 mb-4">
      <StatusBar barStyle="light-content" />
      <Text className="text-gray-300 text-2xl font-bold mb-4 mt-4">Películas Populares</Text>
      <FlatList
        data={peliculas}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity className="mr-4">
            <Image
              source={{ uri: item.imagen_url }}
              className="w-32 h-60 rounded-lg"
            />
          </TouchableOpacity>
        )}
        className=""
      />
    </View>
  );
};

export default MoviesList;
