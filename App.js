import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Button } from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ListingEditScreen from "./app/screens/ListingEditScreen";


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
import React, {useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const categories = [
    {label: "Love66", value: 1},
    {label: "Niculae", value: 2},
    {label: "Apple", value: 3},
]

const Link = () => {
    const navigation = useNavigation();
    return (
        <Button
        title='Click'
        onPress={() => navigation.navigate('TweetDetails', {id: 1})} />
    );
}
const Tweets = ({navigation}) => (
    <Screen>
        <Text>Tweets</Text>
        <Link/>
    </Screen>
)
const TweetDetails = ({route}) => (
    <Screen>
        <Text>Tweet details {route.params.id} </Text>
    </Screen>
)

const Stack = createStackNavigator();
const StackNavigator = () => (
    <Stack.Navigator
        screenOptions={{
            headerStyle: { backgroundColor: "dodgerblue"},
                headerTintColor: "white",
                headerShown: true,
        }}>
        <Stack.Screen name="Tweets" component={Tweets}/>
        <Stack.Screen name="TweetDetails" component={TweetDetails}
            options={({route}) => ({ title: route.params.id})}/>
    </Stack.Navigator>
)

const Account = () => <Screen><Text>Account</Text></Screen>
const Tab = createBottomTabNavigator();
const TabNavigator = () => (
    <Tab.Navigator
        screenOptions = {{
            activeBackgroundColor: 'blue',
            activeTintColor: 'white',
            inactiveBackgroundColor: '#eee',
            inactiveTintColor: "black"
        }}>
        <Tab.Screen name="Feed" component={StackNavigator}
            options={{
              tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="home" size={size} color={color}/>  
            }}/>
        <Tab.Screen name="Account" component={Account}/>
    </Tab.Navigator>
)
export default function App() {
    return (
        <NavigationContainer>
            <TabNavigator/>
        </NavigationContainer>
    );
    // return <ListingEditScreen/>;


    // const [imageUris, setImageUris] = useState([]);

    // const handleAdd = uri => {
    //     setImageUris([...imageUris, uri]);
    // }

    // const handleRemove = uri => {
    //     setImageUris(imageUris.filter(imageUri => imageUri !== uri));
    // }

    // return (
    //     <Fragment>
    //         {/* { <WelcomeScreen/>} */}
            
    //         {/* <MaterialCommunityIcons name="email" /> */}
    //         {/* <AppText>tst</AppText> */}
    //         {/* <ViewImageScreen/> */}
    //         {/* <AppButton title="login" onPress={() => console.log("tapped")} /> */}
    //         {/* {<Card title="test title" subtitle="100$" image={require('./app/assets/places/whys1.jpg')}/>} */}

    //         {/* <ListingDetailsScreen /> */}
    //         {/* {<MessagesScreen />} */}
    //         {<Screen>
    //             {/* <ListItem title="Title" description="Nicu"
    //             IconComponent={<Icon name="email"></Icon>} /> */}
    //             <ImageInputList 
    //                 imageUris={imageUris}
    //                 onAddImage={handleAdd}
    //                 onRemoveImage={handleRemove}
    //             />
    //         </Screen>}
    //         {/* {<AccountScreen/>} */}
    //         {/* {<AppPicker 
    //             selectedItem={category}
    //             onSelectItem={item => setCategory(item)}
    //             placeholder="Category"
    //             items = {categories}/>}
    //             {<AppTextInput placeholder="Username" icon ="email"/>} */}
    //         {/* {<ListingEditScreen/>} */}
    //     </Fragment>
    // ); 
}//test
