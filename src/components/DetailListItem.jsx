import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

export default function DetailListItem({ icon, title, subTitle }) {  
  return (
    <View style={styles.borderContainer}>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          {icon && (
            <MaterialIcons 
              name={icon}
              size={24}
              style={{color: '#000000', marginRight: 20}}
            />
          )}
          <View style={styles.contentContainer}>
            <Text style={styles.title}>{title}</Text>
            {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  borderContainer: {
    paddingLeft: 24,
  },
  wrapper: {
    flexDirection: 'row',
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 24,
    borderBlockColor: '#d8d8d8',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  subTitle: {
    color: '#3498db',
    fontSize: 15,
    marginTop: 4,
  },
})