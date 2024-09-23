import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

export default function AddUser() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Add User</Text>
      </View>
      <TextInput 
        placeholder='Enter User Name'
        style={styles.inputStyle}
      />
      <TextInput 
        placeholder='Enter User Email'
        style={styles.inputStyle}
      />
      <TextInput 
        placeholder='Enter User Birthday'
        style={styles.inputStyle}
      />
      <TextInput 
        placeholder='Enter User Phone Number'
        style={styles.inputStyle}
      />
      <TouchableOpacity style={styles.pickBtn}>
        <Text>Pick Avatar</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.uploadBtn}
      >
        <Text style={{color: '#fff'}}>Add User</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    height: 80,
    width: '100%',
    backgroundColor: '#fff',
    elevation: 5,
    paddingLeft: 20,
    justifyContent: 'center',
    paddingTop: 20
  },
  headerText: {
    fontSize: 18,
    fontWeight: '700'
  },
  inputStyle: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 30
  },
  pickBtn: {
    width: '90%',
    height: 50,
    borderWidth: 5,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  uploadBtn: {
    backgroundColor: '#5246f2',
    width: '90%',
    height: 50,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
})