import { StyleSheet, Text, View, FlatList, SafeAreaView, Platform, StatusBar } from 'react-native'
import React from 'react'
import ListItem from '../components/ListItem'

import Constants from 'expo-constants'
import Screen from '../components/Screen'
import ListItemSeparator from '../components/ListItemSeparator'
import ListItemDeleteAction from '../components/ListItemDeleteAction'

var messages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/shops/narghilea_egipteana.png')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/shops/narghilea_egipteana.png')
    },
]

const handlePress = (message) => {}

Array.prototype.removeByValue = function (val) {
    for (var i = 0; i < this.length; i++) {
      if (this[i] === val) {
        this.splice(i, 1);
        i--;
      }
    }
    return this;
  }

const handleDelete = (_id) => {
    console.log("delete ", _id);
    messages.removeByValue(messages.find(ob => ob.id == _id));
}

export default function MessagesScreen() {
  return (
    <Screen>
      <FlatList 
      data={messages}
      keyExtractor={message => message.id.toString()}
      renderItem={({item}) => <ListItem 
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => {console.log("message pressed ", item)}}
            onDelete={() => {handleDelete(item.id)}}

            // renderRightActions={() => 
            //     <ListItemDeleteAction onPress={() => console.log("message swuped")} />
        />} 
        ItemSeparatorComponent={ListItemSeparator} 
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
    },
})