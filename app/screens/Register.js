import React from "react"
import { Image, StyleSheet } from "react-native"
import * as Yup from "yup"

import Wrapper from "../components/Wrapper"
import { Form, FormField, SubmitButton } from "../components/forms"
import colors from "../config/colors"

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
})

const Register = () => {
    const handleRegistration = ({ email, password }) => {
        console.log({ email, password })
    }

    return (
        <Wrapper style={styles.container}>
            <Image
                source={require("../assets/shishaicon.png")}
                style={styles.logo}
            />
            <Form
                initialValues={{ email: "", password: "" }}
                onSubmit={handleRegistration}
                validationSchema={validationSchema}
            >
                <FormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />
                <FormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />
                <SubmitButton title="Register" color="secondary" />
            </Form>
        </Wrapper>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 30,
    },
})

export default Register
