import {View, Text, Button} from 'react-native';

export default function Shorts({navigation}) {
  const goToAccueil = () => {
    navigation.navigate('Accueil');
  };

  return (
    <View>
      <Text>Mon écran de shorts</Text>
      <Button title="Aller sur l'accueil" onPress={goToAccueil} />
    </View>
  );
}
