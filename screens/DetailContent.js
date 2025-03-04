import { View, Text, Image, ScrollView,StatusBar, ActivityIndicator  } from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native'
import YoutubeIframe from 'react-native-youtube-iframe'
import {useState} from 'react'

const DetailContent = () => {
    const route = useRoute()
    const {content} = route.params;
    const [isLoading, setIsLoading] = useState(true); 
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
        <Text className="text-white text-2xl font-bold text-center mt-4 mb-2">Descripcion</Text>
        <Text className="text-gray-300 p-6 text-lg">
          {content.descripcion}
        </Text>
      </View>

     {/* Reproductor de YouTube con Spinner */}
     <View className="items-center justify-center relative">
        {isLoading && (
          <ActivityIndicator size="large" color="#FFFFFF" className="absolute" />
        )}
        <YoutubeIframe
          videoId={content.video_url}
          width={'100%'}
          height={250}
          onReady={() => setIsLoading(false)} // Oculta el spinner cuando el video está listo
        />
      </View>

    <View>
        <Text className="text-gray-300 font-bold">{content.rate}</Text>
    </View>


    </ScrollView>
  );
};

export default DetailContent;
