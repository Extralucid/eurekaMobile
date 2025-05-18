import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Dimensions,
} from "react-native";

import Icon from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
//import * as LocalAuthentication from "expo-local-authentication";
import sanlam from "@assets/images/sanlam-allianz.png";

const Register = ({ navigation }) => {
  const [isChecked, setChecked] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [isBiometricSupported, setIsBiometricSupported] = React.useState(false);
  const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  const ValidateRegister = Yup.object().shape({
    password: Yup.string()
      .min(8, "Password must me greater that 8 charachters!")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Must be characters, at least one letter, one number and one special character"
      )
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    nom: Yup.string().required("Required"),
    prenom: Yup.string().required("Required"),
  });

  const authenticate = async () => {
    // const auth = LocalAuthentication.authenticateAsync({
    //   promptMessage: "Authenticate with Fingerprint",
    //   fallbackLabel: "Enter password",
    //   cancelLabel: "Cancel",
    //   requireConfirmation: false,
    // });

    // auth.then((result) => {
    //   setIsAuthenticated(result.success);

    //   if (result.success) {
         navigation.navigate("Home");
    //   }
    // });
  };

  useEffect(() => {
    (async () => {
      //const compatible = await LocalAuthentication.hasHardwareAsync();
      //setIsBiometricSupported(compatible);
    })();
  });

  const checked = () => {
    setChecked(false);
  };

  const handleForgot = () => {
    navigation.navigate("Forgot");
  };

  const viewTos = () => {
    navigation.navigate("Politique");
  };

  return (
    <SafeAreaView
      style={{ marginTop: StatusBar.currentHeight, backgroundColor: "#023f84" }}
    >
      <View
        style={{
          backgroundColor: "white",
          borderBottomLeftRadius: 100,
          borderBottomRightRadius: 100,
          height: Dimensions.get("window").height * 0.8,
        }}
      >
        <View
          style={{
            padding: 40,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <ImageBackground
              style={{flex:0, width: 100, height: 100}}
              source={require('@assets/images/sanlam-allianz.png')}
            ></ImageBackground>
            
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: 25,
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold", }} onPress={() => navigation.navigate('Login')}>Connexion |</Text>
            <Text style={{ 
                marginRight: 10,
                fontWeight: "bold",
                fontSize: 18,
                color: "#0082ca" }} onPress={() => navigation.navigate('Register')}> Inscription</Text>
          </View>
          <View style={{ marginTop: 30 }}>
            <Formik
              initialValues={{ email: "", password: "" }}
              validateOnMount={true}
              validationSchema={ValidateRegister}
              onSubmit={(values) => navigation.navigate("Home")}
            >
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
                      flexDirection: "row",
                      borderWidth: 1,
                      borderRadius: 5,
                      paddingLeft: 3,
                      borderColor: "#808080",
                      marginBottom: 5,
                      alignItems: "center",
                    }}
                  >
                    <Icon name="mail" size={18} color="#808080" />
                    <TextInput
                      style={{ marginLeft: 10 }}
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      value={values.email}
                      placeholder="Email / Téléphone"
                    />
                  </View>
                  <View style={{ marginBottom: 20 }}>
                    {errors.email && touched.email ? (
                      <Text style={{ color: "red", fontSize: 15 }}>
                        {errors.email}
                      </Text>
                    ) : null}
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      borderWidth: 1,
                      borderRadius: 5,
                      paddingLeft: 3,
                      borderColor: "#808080",
                      marginBottom: 5,
                      alignItems: "center",
                    }}
                  >
                    <Icon name="edit" size={18} color="#808080" />
                    <TextInput
                      style={{ marginLeft: 10 }}
                      onChangeText={handleChange("nom")}
                      onBlur={handleBlur("nom")}
                      value={values.nom}
                      placeholder="Nom"
                    />
                  </View>
                  <View style={{ marginBottom: 20 }}>
                    {errors.nom && touched.nom ? (
                      <Text style={{ color: "red", fontSize: 15 }}>
                        {errors.nom}
                      </Text>
                    ) : null}
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      borderWidth: 1,
                      borderRadius: 5,
                      paddingLeft: 3,
                      borderColor: "#808080",
                      marginBottom: 5,
                      alignItems: "center",
                    }}
                  >
                    <Icon name="edit" size={18} color="#808080" />
                    <TextInput
                      style={{ marginLeft: 10 }}
                      onChangeText={handleChange("prenom")}
                      onBlur={handleBlur("prenom")}
                      value={values.prenom}
                      placeholder="Prénoms"
                    />
                  </View>
                  <View style={{ marginBottom: 20 }}>
                    {errors.prenom && touched.prenom ? (
                      <Text style={{ color: "red", fontSize: 15 }}>
                        {errors.prenom}
                      </Text>
                    ) : null}
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      borderRadius: 5,
                      paddingLeft: 3,
                      borderWidth: 1,
                      borderColor: "#808080",
                      marginBottom: 5,
                      alignItems: "center",
                    }}
                  >
                    <Icon name="lock" size={22} color="#808080" />
                    <TextInput
                      style={{ marginLeft: 10 }}
                      placeholder="Mot de passe"
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      value={values.password}
                    />
                  </View>
                  <View style={{ marginBottom: 20 }}>
                    {errors.password && touched.password ? (
                      <Text style={{ color: "red", fontSize: 15 }}>
                        {errors.password}
                      </Text>
                    ) : null}
                  </View>

                  <TouchableOpacity
                    style={{
                      backgroundColor: "#0082ca",
                      borderRadius: 10,
                      height: 35,
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: 15,
                    }}
                    onPress={handleSubmit}
                  >
                    <Text style={{ color: "white" }}>S'inscrire</Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>
          </View>
        </View>
      </View>

      <View
        style={{
          alignItems: "center",
          height: Dimensions.get("window").height * 0.2,
        }}
      >
       <Text style={{ fontSize: 17, marginTop: 10, color:'white' }}>
            En vous inscrivant, vous acceptez
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                fontSize: 18,
                marginTop: 5,
              }}
            >
              <Text style={{ color: "white" }}>Nos</Text>
              <Text style={{ color: "white" }} onPress={viewTos}>&nbsp;Conditions et politique de confidentialité</Text>
            </View>
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

export default Register;
