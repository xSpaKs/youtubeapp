import {View, Text, Button} from 'react-native';

export default function Accueil({navigation}) {
  const goToProfile = () => {
    navigation.navigate('Profil');
  };

  return (
    <View>
      <Text>Mon écran d'accueil</Text>
      <Button title="Aller sur le profil" onPress={goToProfile} />
    </View>
  );
}
