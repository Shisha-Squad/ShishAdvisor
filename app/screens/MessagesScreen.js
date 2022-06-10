import { StyleSheet, Text, View, FlatList, SafeAreaView, Platform, StatusBar } from 'react-native'
import React, { useState }   from 'react'
import ListItem from '../components/ListItem'

import Constants from 'expo-constants'
import Screen from '../components/Screen'
import ListItemSeparator from '../components/ListItemSeparator'
import ListItemDeleteAction from '../components/ListItemDeleteAction'

const initialMessages = [
    {
        id: 1,
        title: 'Abdul Haloumni',
        description: 'Hello, is this good shisha?',
        image: require('../assets/shops/narghilea_egipteana.png')
    },
    {
        id: 2,
        title: 'Daniel Cirlan',
        description: 'Good morning',
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

export default function MessagesScreen() {

  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    console.log('delete ', message)
    setMessages(messages.filter(m => m.id !== message.id));
  }

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
            onDelete={() => {handleDelete(item)}}

            // renderRightActions={() => 
            //     <ListItemDeleteAction onPress={() => console.log("message swuped")} />
        />} 
        ItemSeparatorComponent={ListItemSeparator}
        refreshing = {refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: 'Daniel Cirlan',
              description: 'Good morning',
              image: require("../assets/shops/narghilea_egipteana.png"),
            },
          ]);
        }}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
    },
})