import React from "react"
import { StyleSheet } from "react-native"
import * as Yup from "yup"

import {
    Form,
    FormField,
    FormImagePicker,
    FormPicker as Picker,
    SubmitButton,
} from "../components/forms"
import CategoryPickerItem from "../components/CategoryPickerItem"
import Wrapper from "../components/Wrapper"
import { useLocation } from "../hooks"

const validationSchema = Yup.object().shape({
    category: Yup.object().required().nullable().label("Category"),
    description: Yup.string().label("Description"),
    images: Yup.array().min(1, "Please select atleast one image"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    title: Yup.string().required().min(1).label("Title"),
})

const categories = [
    {
        label: "Shisha Amy Deluxe",
        value: 1,
        icon: "floor-lamp",
        backgroundColor: "#fc5c65",
        color: "white"
      },
      {
        label: "Shisha Boss",
        value: 2,
        icon: "floor-lamp",
        backgroundColor: "#fd9644",
        color: "white"
      },
      {
        label: "Shisha Alfaher",
        value: 3,
        icon: "floor-lamp",
        backgroundColor: "#fed330",
        color: "white"
      },
    { label: "Others", value: 4, icon: "application", backgroundColor: "blue" },
]

const ListingEdit = () => {
    const [location] = useLocation()

    const handleSubmit = (values) => {
        console.log({ values, location })
    }

    return (
        <Wrapper style={styles.container}>
            <Form
                initialValues={{
                    category: null,
                    description: "",
                    images: [],
                    price: "",
                    title: "",
                }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <FormImagePicker name="images" />
                <FormField
                    autoCapitalize="sentences"
                    autoCorrect
                    placeholder="Title"
                    name="title"
                    maxLength={255}
                />
                <FormField
                    placeholder="Price"
                    name="price"
                    keyboardType="numeric"
                    maxLength={8}
                    width={120}
                />
                <Picker
                    data={categories}
                    name="category"
                    numOfColumns={3}
                    placeholder="Category"
                    PickerItemComponent={CategoryPickerItem}
                    width="50%"
                />
                <FormField
                    autoCapitalize="sentences"
                    autoCorrect
                    multiline
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />
                <SubmitButton title="Post" />
            </Form>
        </Wrapper>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
})

export default ListingEdit
