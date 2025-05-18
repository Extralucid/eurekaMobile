import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {AdvancedCheckbox} from 'react-native-advanced-checkbox';

import Icon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { Screen } from 'react-native-screens';
//import  LocalAuthentication from 'react-native-local-auth';

const Login = ({navigation}) => {
  const [isChecked, setChecked] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [isBiometricSupported, setIsBiometricSupported] = React.useState(false);
  const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  const ValidateLogin = Yup.object().shape({
    password: Yup.string()
      .min(8, 'Pssword must me greater that 8 charachters!')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Must be characters, at least one letter, one number and one special character',
      )
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

  const authenticate = async () => {
    // const auth = LocalAuthentication.authenticateAsync({
    //   promptMessage: 'Authenticate with Fingerprint',
    //   fallbackLabel: 'Enter password',
    //   cancelLabel: 'Cancel',
    //   requireConfirmation: false,
    // });

    // auth.then(result => {
    //   setIsAuthenticated(result.success);

    //   if (result.success) {
         navigation.navigate('Home');
    //   }
    // });
  };

  // useEffect(() => {
  //   (async () => {
  //     const compatible = await LocalAuthentication.hasHardwareAsync();
  //     setIsBiometricSupported(compatible);
  //   })();
  // });

  const checked = () => {
    setChecked(false);
  };

  const handleForgot = () => {
    navigation.navigate('Forgot');
  };

  const viewTos = () => {
    navigation.navigate('Politique');
  };

  return (
    <SafeAreaView
      style={{marginTop: StatusBar.currentHeight, backgroundColor: '#023f84'}}>
        <StatusBar hidden={true} />
      <View
        style={{
          backgroundColor: 'white',
          borderBottomLeftRadius: 100,
          borderBottomRightRadius: 100,
          height: Dimensions.get('window').height * 0.8,
        }}>
        <View
          style={{
            padding: 20,
          }}>
          <View style={{alignItems: 'center'}}>
            <ImageBackground
              style={{flex: 0, width: 100, height: 100}}
              source={require('@assets/images/sanlam-allianz.png')}></ImageBackground>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: 25,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                marginRight: 10,
                fontWeight: 'bold',
                fontSize: 18,
                color: '#0082ca',
              }}
              onPress={() => navigation.navigate('Login')}>
              Connexion |
            </Text>
            <Text
              style={{fontSize: 18, fontWeight: 'bold'}}
              onPress={() => navigation.navigate('Register')}>
              {' '}
              Inscription
            </Text>
          </View>
          <View style={{marginTop: 30}}>
            <Formik
              initialValues={{email: '', password: ''}}
              validateOnMount={true}
              validationSchema={ValidateLogin}
              onSubmit={values => navigation.navigate('Home')}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                touched,
                values,
                errors,
                isValid,
              }) => (
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      borderWidth: 1,
                      borderRadius: 5,
                      paddingLeft: 3,
                      borderColor: '#808080',
                      marginBottom: 5,
                      alignItems: 'center',
                    }}>
                    <Icon name="mail" size={18} color="#808080" />
                    <TextInput
                      style={{marginLeft: 10}}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                      placeholder="Email / Téléphone"
                    />
                  </View>
                  <View style={{marginBottom: 20}}>
                    {errors.email && touched.email ? (
                      <Text style={{color: 'red', fontSize: 15}}>
                        {errors.email}
                      </Text>
                    ) : null}
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      borderRadius: 5,
                      paddingLeft: 3,
                      borderWidth: 1,
                      borderColor: '#808080',
                      marginBottom: 5,
                      alignItems: 'center',
                    }}>
                    <Icon name="lock" size={22} color="#808080" />
                    <TextInput
                      style={{marginLeft: 10}}
                      placeholder="Mot de passe"
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                    />
                  </View>
                  <View style={{marginBottom: 20}}>
                    {errors.password && touched.password ? (
                      <Text style={{color: 'red', fontSize: 15}}>
                        {errors.password}
                      </Text>
                    ) : null}
                  </View>

                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginBottom: 30,
                        alignItems: 'center',
                      }}>
                      <AdvancedCheckbox
                        value={isChecked}
                        onValueChange={setChecked}
                        label="se souvenir de moi"
                        checkedColor="#007AFF"
                        uncheckedColor="#ccc"
                        size={24}
                      />
                    </View>

                    <View>
                      <Text style={{color: 'blue'}} onPress={handleForgot}>
                        Mot de passe oublié
                      </Text>
                    </View>
                  </View>

                  <TouchableOpacity
                    style={{
                      backgroundColor: '#0082ca',
                      borderRadius: 10,
                      height: 35,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginBottom: 15,
                    }}
                    onPress={handleSubmit}>
                    <View>
                      <Text style={{color: 'white'}}>Se connecter</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>

            <View>
              <Text style={{alignSelf: 'center'}}>ou continuer en </Text>
            </View>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 10,
              }}
              onPress={()=>{navigation.navigate('Invitee')}}>
              <Text style={{alignSelf: 'center', color: 'blue'}}>Mode Invité </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View
        style={{
          alignItems: 'center',
          height: Dimensions.get('window').height * 0.2,
        }}>
        {isBiometricSupported ? (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={authenticate}
              style={{
                height: 80,
                width: 80,
                borderRadius: 30,
                backgroundColor: '#5c87e6',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Ionicons name="finger-print-outline" size={40} color="white" />
            </TouchableOpacity>
          </View>
        ) : (
          <View
            style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
            <Text style={{color: 'white', fontSize: 20}}>Bienvenue !</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
  },
});

export default Login;
