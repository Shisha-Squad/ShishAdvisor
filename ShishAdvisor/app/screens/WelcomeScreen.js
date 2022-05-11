import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import AppButton from "../components/AppButon"

function WelcomeScreen(props) {
    return (
        <ImageBackground 
            blurRadius={2}
            style={styles.background}
            source={require("../assets/background.jpg")}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/ShishLogo.png")}/>
                <Text style={styles.tagline}>Smoke the best shisha in your area</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton title="Login" />
                <AppButton title="Register" color="secondary" />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,     // image takes up the entire screen
        justifyContent: "flex-end",
        alignItems: 'center'
    },
    buttonsContainer: {
        padding: 20,
        width: "100%",
    },
    // loginButton: {
    //     width: '100%',
    //     height: 70,
    //     backgroundColor: "#ffc000"
    // },
    // registerButton: {
    //     width: '100%',
    //     height: 70,
    //     backgroundColor: "#787878"
    // },
    logo: {
        width: 400,
        height: 150,
    },
    logoContainer: {
        position: 'absolute',
        alignItems: "center",
        top: 45
    },
    motto: {
        color: 'white',
        fontSize: 18,
        bottom: 35
    },
    tagline: {
        color: 'white',
        fontSize: 25,
        fontWeight: "600",
        bottom: 35,
    }
})

export default WelcomeScreen;