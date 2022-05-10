import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';

import {MaterialCommunityIcons} from '@expo/vector-icons';
import { Fragment } from 'react/cjs/react.development';


export default function App() {
    return (
        <Fragment>
            <WelcomeScreen/>
            {/* <MaterialCommunityIcons name="email" /> */}
            {/* <AppText>tst</AppText> */}
            {/* <ViewImageScreen/> */}
            <AppButton title="login" onPress={() => console.log("tapped")}>

            </AppButton>
        </Fragment>
    ); 
}
