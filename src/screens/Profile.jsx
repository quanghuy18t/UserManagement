import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import ContactThumbnail from '../components/ContactThumbnail';
import DetailListItem from '../components/DetailListItem';
import AppBar from '../components/AppBar';
import FloatingButton from '../components/FloatingButton';

export default function Profile({ navigation }) {
  const route = useRoute();
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.avatarSection}>
        <AppBar 
          icon={'sharealt'}
          onPress={() => navigation.goBack()}
          top={50}
          left={20}
          right={20}
          drop={true}
        />
        <ContactThumbnail 
          avatar={item.image}
          name={item.name}
          phone={item.phone}
        />
      </View>
      <View style={styles.detailsSection}>
        <DetailListItem icon='123' title={'Age'} subTitle={item.age} />
        <DetailListItem icon='mail' title={'Email'} subTitle={item.email} />
        <FloatingButton />
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3498db',
  },
  detailsSection: {
    flex: 1,
    backgroundColor: 'white',
  },
})