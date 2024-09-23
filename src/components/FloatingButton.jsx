import { View, StyleSheet, TouchableOpacity, Animated } from 'react-native'
import React, { useRef, useState } from 'react'
import { AntDesign, Entypo, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons"

export default function FloatingButton() {
  const animation = useRef(new Animated.Value(0)).current;
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    const toValue = open ? 0 : 1;

    Animated.spring(animation, {
      toValue,
      friction: 5,
      useNativeDriver: true
    }).start();

    setOpen(!open)
  }

  const rotation = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "360deg"]
        })
      }
    ]
  }

  const getAnimatedStyle = (index) => {
    const angle = (index * (120 / 2) + 75);
    const radius = 90;

    const translateY = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -radius * Math.sin((angle * Math.PI) / 180)]
    });

    const translateX = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, radius * Math.cos((angle * Math.PI) / 180)]
    });

    return {
        transform: [
            { scale: animation }, 
            { translateX },      
            { translateY }     
        ]
    };
  }
  
  return (
    <View style={styles.container}>
      {
        open &&
        [...Array(3)].map((_, index) => (
          <TouchableOpacity key={index}>
            <Animated.View style={[styles.buttons, styles.secondary, getAnimatedStyle(index)]}>
              {
                index === 0 ? (
                  <Entypo name="share" size={24} color="#FFF" />
                ) : index === 1 ? (
                  <FontAwesome name="edit" size={20} color="#FFF" />
                ) : (
                  <MaterialCommunityIcons name="delete" size={20} color="#FFF" />
                )
              }
            </Animated.View>
          </TouchableOpacity>
        ))
      }
      <TouchableOpacity onPress={toggleMenu}>
        <Animated.View style={[styles.button, styles.menu, rotation]}>
            <AntDesign name="plus" size={24} color="#FFF" />
        </Animated.View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        right: 0
    },
    button: {
        position: "absolute",
        bottom: 36,
        right: 36,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        shadowRadius: 10,
        shadowColor: "#F02A4B",
        shadowOpacity: 0.5,
        shadowOffset: {
            width: 0,
            height: 10
        }
    },
    buttons: {
      position: "absolute",
      top: 340,
      left: 300,
      width: 60,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30,
      shadowRadius: 10,
      shadowColor: "#F02A4B",
      shadowOpacity: 0.5,
      shadowOffset: {
          width: 0,
          height: 10
      }
  },
    menu: {
        backgroundColor: "#F02A4B"
    },
    secondary: {
        backgroundColor: "#F02A4B"
    }
})