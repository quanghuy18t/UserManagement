import { Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { COLORS } from '../constants/colors'
import { Ionicons } from '@expo/vector-icons'
import Checkbox from 'expo-checkbox';
import Button from '../components/Button';
import { signInWithPhoneNumber } from 'firebase/auth';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { app, auth } from '../../firebaseConfig';

export default function Signup({navigation}) {
  const [shown, setShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const [isVerifying, setIsVerifying] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const recaptchaVerifier = useRef(null);
  const [verificationWrong, setVerificationWrong] = useState(false);

  console.log(recaptchaVerifier.current);
  const loginWithPhoneNumber = async (phoneNumber) => {
    const result = await signInWithPhoneNumber(
      auth,
      phoneNumber,
      recaptchaVerifier.current
    );
    console.log(result);
    setConfirmationResult(result);
    setIsVerifying(true);
  };
  const verifyCode = async (code) => {
    if (confirmationResult) {
      try { 
        const userCredential = await confirmationResult.confirm(code);
      } catch (error) {
        setVerificationWrong(true);
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <FirebaseRecaptchaVerifierModal 
        ref={recaptchaVerifier}
        firebaseConfig={app.options}
      />
      <View style={{flex: 1, marginHorizontal: 22}}>
        <View style={{marginVertical: 22}}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              marginVertical: 12,
              color: COLORS.black
            }}
          >Create Account</Text>
          <Text style={{fontSize: 16, color: COLORS.black}}>Connect to Managemnt</Text>
        </View>
        <View style={{marginBottom: 30}}>
            <View style={styles.inputContainer}>
              <TextInput 
                placeholder='Email or phone number'
                placeholderTextColor={COLORS.black}
                keyboardType={'email-address' || 'numeric'}
                style={{width: '100%', fontSize: 16}}
              />
            </View>
        </View>
        <View style={{marginBottom: 30}}>
          <View style={styles.inputContainer}>
            <TextInput 
              placeholder='Password'
              placeholderTextColor={COLORS.black}
              secureTextEntry={shown}
              style={{width: '100%', fontSize: 16}}
            />
            <TouchableOpacity
              style={{position: 'absolute', right: 12}}
              onPress={() => setShown(!shown)}
            >
              <Ionicons 
                name= {shown ? 'eye' : 'eye-off'}
                size={24}
                color={COLORS.black}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginBottom: 30}}>
          <View style={styles.inputContainer}>
            <TextInput 
              placeholder='Password Again'
              placeholderTextColor={COLORS.black}
              secureTextEntry={shown}
              style={{width: '100%', fontSize: 16}}
            />
            <TouchableOpacity
              style={{position: 'absolute', right: 12}}
              onPress={() => setShown(!shown)}
            >
              <Ionicons 
                name= {shown ? 'eye' : 'eye-off'}
                size={24}
                color={COLORS.black}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginVertical: 6}}>
          <Checkbox 
            style={{marginRight: 8}}
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? COLORS.primary : undefined}
          />
          <Text>I agree to the terms and conditions</Text>
        </View>
        <Button 
          title='Sign Up'
          filled
          style={{
            marginTop: 18,
            marginBottom: 4
          }}
          options={loginWithPhoneNumber('+842829243')}
        />

        <View style={styles.signupContainer}>
          <View style={styles.signupWrapper} />
          <Text style={{fontSize: 14}}>Or Sign up with</Text>
          <View style={styles.signupWrapper} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {}}
          >
            <Image 
              source={require('../../assets/images/facebook.svg')}
              style={{
                height: 36,
                width: 36,
                marginRight: 8,
                resizeMode: 'contain'
              }}
            />
            <Text>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {}}
          >
            <Image 
              source={require('../../assets/images/google.png')}
              style={{
                height: 36,
                width: 36,
                marginRight: 8,
                resizeMode: 'contain'
              }}
            />
            <Text>Google</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginVertical: 22}}>
          <Text style={{fontSize: 16, color: COLORS.black}}>Already have an account </Text>
          <Pressable onPress={() => navigation.navigate('Login')}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.primary,
                fontWeight: 'bold',
                marginLeft: 6
              }}
            >Login</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: 45
  },
  inputContainer: {
    width: '100%',
    height: 48,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 22,
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  signupWrapper: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.grey,
    marginHorizontal: 10
  },
  buttonStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 52,
    borderWidth: 1,
    borderColor: COLORS.grey,
    marginRight: 4,
    borderRadius: 10
  },
})