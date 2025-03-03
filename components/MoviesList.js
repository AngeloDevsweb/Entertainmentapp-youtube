import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import peliculas from "../data/peliculas";

const MoviesList = () => {
    //console.log(peliculas); // Asegúrate de que tiene datos
  return (
    <View className="px-4 space-y-2 mb-4">
      <Text className="text-white text-xl font-bold">Películas Populares</Text>
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
