import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { COLORS } from '../constants/colors'
import Button from '../components/Button'

export default function Welcome({ navigation }) {
  return (
    <LinearGradient 
      style={{flex: 1, paddingTop: 45}}
      colors={[COLORS.secondary, COLORS.primary]}
    > 
      <View>
        <View>
          <Image 
            source={require('../../assets/images/hero1.jpg')}
            style={[styles.user(20, 50, '-15deg'), {top: 10}]}
          />
          <Image 
            source={require('../../assets/images/hero2.jpg')}
            style={[styles.user(50, 50, '-5deg'), {top: -30, left: 100}]}
          />
          <Image 
            source={require('../../assets/images/hero3.jpg')}
            style={[styles.user(50, 50, '15deg'), {top: 130, left: -50}]}
          />
          <Image 
            source={require('../../assets/images/hero1.jpg')}
            style={[styles.user(50, 50, '-15deg'), {top: 110, left: 100, height: 200, width: 200}]}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.textStyle(50, 800)}>Let's Get</Text>
          <Text style={styles.textStyle(46, 800)}>Started</Text>
          <View style={{marginVertical: 22}}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
                marginVertical: 4
              }}
            >
              Management User
            </Text>
          </View>
          <Button 
            title='Join Now'
            onPress={() => navigation.navigate('Signup')}
            style={{marginTop: '30%', width: '100%'}}
          />
          <View style={styles.loginStyle}>
            <Text style={{fontSize: 16, color: COLORS.white}}>Already have an account ?</Text>
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text 
                style={{
                  fontSize: 16, 
                  color: COLORS.white, 
                  fontWeight: 'bold',
                  marginLeft: 4
                }}
              >Login</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  user: (x, y, rotate) => ({
    height: 100,
    width: 100,
    borderRadius: 20,
    position: 'absolute',
    transform: [
      { translateX: x },
      { translateY: y },
      { rotate: rotate }
    ]
  }),
  container: {
    paddingHorizontal: 22,
    position: 'absolute',
    top: 400,
    width: '100%'
  },
  textStyle: (size, weight) => ({
    fontSize: size,
    fontWeight: weight,
    color: COLORS.white
  }),
  loginStyle: {
    flexDirection: 'row',
    marginTop: 12,
    justifyContent: 'center'
  },
})