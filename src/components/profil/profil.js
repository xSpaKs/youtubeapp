import {View, TextInput, Button, Text} from 'react-native';
import authHook from '../../hooks/auth.hook.js';
import {useAuth} from '../../hooks/authContext.hook.js';

import {componentsStyles} from '../components.styles.js';
import {profilStyles} from './profil.styles.js';

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
    logout,
  } = authHook();

  const {user} = useAuth();
  console.log(user);

  return (
    <>
      <Text style={componentsStyles.h1}>Mon profil</Text>
      <View style={profilStyles.view}>
        {user == null && (
          <>
            <TextInput
              style={profilStyles.input}
              placeholder="Login"
              onChangeText={text => setLogin(text)}
              value={login}
            />
            <TextInput
              style={profilStyles.input}
              placeholder="Mot de passe"
              onChangeText={text => setMotDePasse(text)}
              value={motDePasse}
              secureTextEntry={true}
            />

            <Button
              color="red"
              height="25px"
              title="Créer un compte"
              onPress={signUp}
            />
            <Button
              color="red"
              height="25px"
              title="Se connecter"
              onPress={signIn}
            />

            <TextInput
              style={profilStyles.input}
              placeholder="Login"
              onChangeText={text => setLogin(text)}
              value={login}
            />
            <TextInput
              style={profilStyles.input}
              placeholder="otp"
              onChangeText={text => setOTP(text)}
              value={otp}
            />
            <Button color="red" title="Confirmer l'OTP" onPress={handleOTP} />
          </>
        )}
        {user !== null && (
          <>
            <Button color="red" title="Se déconnecter" onPress={logout} />
          </>
        )}
      </View>
    </>
  );
}
