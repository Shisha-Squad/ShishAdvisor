import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

import AppText from './app/components/AppText';
import Card from './app/components/Card';

import {MaterialCommunityIcons} from '@expo/vector-icons';
import { Fragment } from 'react/cjs/react.development';
import MessagesScreen from './app/screens/MessagesScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import { useState } from 'react';

const categories = [
    {label: "Love66", value: 1},
    {label: "Niculae", value: 2},
    {label: "Apple", value: 3},
]

export default function App() {
    const [category, setCategory] = useState(categories[0]);
    return (
        <Fragment>
            {/* { <WelcomeScreen/>} */}
            
            {/* <MaterialCommunityIcons name="email" /> */}
            {/* <AppText>tst</AppText> */}
            {/* <ViewImageScreen/> */}
            {/* <AppButton title="login" onPress={() => console.log("tapped")} /> */}
            {/* {<Card title="test title" subtitle="100$" image={require('./app/assets/places/whys1.jpg')}/>} */}

            {/* <ListingDetailsScreen /> */}
            {/* {<MessagesScreen />} */}
            {/* {<Screen>
                <ListItem title="Title" description="Nicu"
                IconComponent={<Icon name="email"></Icon>}/>
            </Screen>} */}
            {/* {<AccountScreen/>} */}
            {<AppPicker 
                selectedItem={category}
                onSelectItem={item => setCategory(item)}
                placeholder="Category"
                items = {categories}/>}
            {<AppTextInput placeholder="Username" icon ="email"/>}
        </Fragment>
    ); 
}//test
