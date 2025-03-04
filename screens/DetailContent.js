import { View, Text, Image, ScrollView,StatusBar } from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native'

const DetailContent = () => {
    const route = useRoute()
    const {content} = route.params;
  return (
    <ScrollView className="flex-1 bg-zinc-950">
        <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor="transparent"
      />
        
      <View className="">
        <Image
          source={{ uri: content.imagen_url }}
          className="w-full rounded-lg mb-4"
          style={{ height: 550 }}
        />
      </View>

      <View>
        <Text className="text-white text-2xl font-bold text-center mt-4 mb-3">Descripcion</Text>
        <Text className="text-gray-300 p-6 text-lg">
          {content.descripcion}
        </Text>
      </View>


    </ScrollView>
  );
};

export default DetailContent;
