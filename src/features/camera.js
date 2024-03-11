import {View, Text, Button} from 'react-native';

export default function Camera({navigation}) {
  const goToProfile = () => {
    navigation.navigate('Profil');
  };

  return (
    <View>
      <Text>Mon écran Caméra</Text>
      <Button title="Aller sur le profil" onPress={goToProfile} />
    </View>
  );
}
