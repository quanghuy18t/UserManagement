import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

export default function ContactThumbnail({ name, phone, avatar, color }) {
  return (
    <View style={styles.container}>
      <View>
        <Image 
          source={{uri: avatar}}
          style={styles.avatar}
        />
      </View>
      <Text style={[styles.name, {color: color}]}>{name}</Text>
      <View style={styles.phoneSelection}>
        <MaterialIcons 
          name='phone'
          size={16}
          style={{color: color}}
        />
        <Text style={[styles.phone, {color: color}]}>{phone}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderColor: 'white',
    borderWidth: 2,
  },
  name: {
    fontSize: 20,
    marginTop: 24,
    marginBottom: 2,
    fontWeight: 'bold',
  },
  phoneSelection: {
    flexDirection: 'row',
    marginTop: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  phone: {
    marginLeft: 4,
    fontSize: 16,
    fontWeight: 'bold',
  },
})