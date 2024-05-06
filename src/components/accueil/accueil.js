import {View, Text, FlatList, RefreshControl} from 'react-native';
import Video from '../video/video.js';

import {componentsStyles} from '../components.styles.js';
import {accueilStyles} from './accueil.styles.js';

import {useState} from 'react';
import {useFetchVideoData} from '../../hooks/fetchVideoData.hook.js';

export default function Accueil({navigation}) {
  const [refreshing, setRefreshing] = useState(false);
  const {isLoading, error, data: videos} = useFetchVideoData();

  const onRefresh = async () => {
    setRefreshing(true);
  };

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
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#9Bd35A', '#689F38']}
            tintColor="#689F38"
            title="Chargement..."
            titleColor="#00ff00"
            progressBackgroundColor="#fff"
          />
        }
      />
    </View>
  );
}
