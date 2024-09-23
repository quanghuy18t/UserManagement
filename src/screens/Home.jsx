import React, {  useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  TouchableOpacity,
} from 'react-native'
import DraggableFlatList from 'react-native-draggable-flatlist'
import { COLORS } from '../constants/colors'


export default Home = ({ navigation }) => {
  const [data, setData] = useState([
    { id: 1, image: 'https://bootdey.com/img/Content/avatar/avatar1.png', name: 'test', age: '1', email: 'demo', phone: '1' },
    { id: 2, image: 'https://bootdey.com/img/Content/avatar/avatar6.png', name: 'test', age: '1', email: 'demo', phone: '1' },
    { id: 3, image: 'https://bootdey.com/img/Content/avatar/avatar2.png', name: 'test', age: '1', email: 'demo', phone: '1' },
    { id: 4, image: 'https://bootdey.com/img/Content/avatar/avatar3.png', name: 'test', age: '1', email: 'demo', phone: '1' },
    { id: 5, image: 'https://bootdey.com/img/Content/avatar/avatar4.png', name: 'test', age: '1', email: 'demo', phone: '1' },
    { id: 6, image: 'https://bootdey.com/img/Content/avatar/avatar5.png', name: 'test', age: '1', email: 'demo', phone: '1' },
    { id: 7, image: 'https://bootdey.com/img/Content/avatar/avatar7.png', name: 'test', age: '1', email: 'demo', phone: '1' },
  ]);
  
  showAlert = () => Alert.alert('Alert', 'Button pressed ' )

  return (
    <DraggableFlatList 
      style={{paddingTop: 10}}
      enableEmptySections={true}
      data={data}
      keyExtractor={item => item.id}
      onDragEnd={({data}) => setData(data)}
      renderItem={({item, drag, isActive}) => (
        <TouchableOpacity 
          style={{backgroundColor: isActive ? COLORS.grey : COLORS.white}}
          onPress={() => navigation.navigate('Profile', {item})}
          onLongPress={drag}
        >
          <View style={styles.box}>
            <Image style={styles.image} source={{ uri: item.image }} />
            <View style={styles.boxContent}>
              <Text style={styles.title}>Title</Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet, elit consectetur</Text>
              <View style={styles.buttons}>
                <TouchableOpacity
                  style={[styles.button, styles.view]}
                  onPress={showAlert}>
                  <Image
                    style={styles.icon}
                    source={{ uri: 'https://img.icons8.com/color/70/000000/filled-like.png' }}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.button, styles.profile]}
                  onPress={showAlert}>
                  <Image
                    style={styles.icon}
                    source={{ uri: 'https://img.icons8.com/color/70/000000/cottage.png' }}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.button, styles.message]}
                  onPress={showAlert}>
                  <Image
                    style={styles.icon}
                    source={{ uri: 'https://img.icons8.com/color/70/000000/plus.png' }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  )
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  box: {
    padding: 20,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  boxContent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    color: '#151515',
  },
  description: {
    fontSize: 15,
    color: '#646464',
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    height: 35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: 50,
    marginRight: 5,
    marginTop: 5,
  },
  icon: {
    width: 20,
    height: 20,
  },
  view: {
    backgroundColor: '#eee',
  },
  profile: {
    backgroundColor: '#1E90FF',
  },
  message: {
    backgroundColor: '#228B22',
  },
})