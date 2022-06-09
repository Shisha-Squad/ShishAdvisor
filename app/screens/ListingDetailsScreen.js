import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import AppText from '../components/AppText'
import ListItem from '../components/ListItem'

import colors from '../config/colors'

export default function ListingDetailsScreen() {
  return (
    <View>
        <Image style={styles.image} source={require('../assets/products/narghilea-aladin-mvp-360-limited-hero-edition-iron-man_370.jpg')} />
        <View style={styles.detailsContainer}>
            <AppText style={styles.title}>aladin mvp 360</AppText>
            <AppText style={styles.price}>370 lei</AppText>
            <View style={styles.userContainer}>
                <ListItem 
                    image={require('../assets/shops/narghilea_egipteana.png')}
                    title="Narghileaua Egipteana"
                    subTitle="5 listings"
                />
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
    },
    detailsContainer: {
        padding: 20,
        
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
    },
    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10,
    },
    userContainer: {
        marginVertical: 40,
    }
})