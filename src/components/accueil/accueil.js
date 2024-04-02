import {View, Text, FlatList} from 'react-native';

import Video from '../video/video.js';

import {componentsStyles} from '../components.styles.js';
import {accueilStyles} from './accueil.styles.js';

import {useFetchVideoData} from '../../hooks/fetchVideoData.hook.js';

export default function Accueil({navigation}) {
  const {videos} = useFetchVideoData();

  return (
    <View style={accueilStyles.container}>
      <Text style={componentsStyles.h1}> Accueil</Text>
      <FlatList
        data={videos}
        keyExtractor={item => item.id.toString()}
        numColumns={1}
        renderItem={({item}) => (
          <View style={accueilStyles.videoContainer}>
            <Video videoId={item.videoId} title={item.title} />
          </View>
        )}
      />
    </View>
  );
}
