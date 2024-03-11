import {View, TextInput, Button} from 'react-native';
import authHook from '../../hooks/authHook';

export default function Profil({navigation}) {
  let {
    login,
    setLogin,
    motDePasse,
    setMotDePasse,
    otp,
    setOTP,
    signIn,
    signUp,
    handleOTP,
  } = authHook();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        style={{
          height: 40,
          width: 300,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 20,
        }}
        placeholder="Login"
        onChangeText={text => setLogin(text)}
        value={login}
      />
      <TextInput
        style={{
          height: 40,
          width: 300,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 20,
        }}
        placeholder="Mot de passe"
        onChangeText={text => setMotDePasse(text)}
        value={motDePasse}
        secureTextEntry={true}
      />
      <Button title="Créer un compte" onPress={signUp} />
      <Button title="Se connecter" onPress={signIn} />

      <TextInput
        style={{
          height: 40,
          width: 300,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 20,
        }}
        placeholder="Login"
        onChangeText={text => setLogin(text)}
        value={login}
      />
      <TextInput
        style={{
          height: 40,
          width: 300,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 20,
        }}
        placeholder="otp"
        onChangeText={text => setOTP(text)}
        value={otp}
      />
      <Button title="Confirmer l'OTP" onPress={handleOTP} />
    </View>
  );
}
