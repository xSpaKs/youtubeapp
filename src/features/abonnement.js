import {View, Text, Button} from 'react-native';

export default function Abonnements({navigation}) {
  const goToProfile = () => {
    navigation.navigate('Profil');
  };

  return (
    <View>
      <Text>Mon écran d'abonnement</Text>
      <Button title="Aller sur le profil" onPress={goToProfile} />
    </View>
  );
}
