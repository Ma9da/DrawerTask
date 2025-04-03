import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
const ProfileInfo = () => {
return (
    <>
        <View>
        <Text style={styles.name}>Abdelrhman adel</Text>
        <Text style={styles.number}>970569122000</Text>
        </View>
    </>
);
};
export default ProfileInfo;
const styles = StyleSheet.create({
    name: {
        color: Colors.dark.darkGray,
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 5
            },
    number:{
        color: Colors.dark.darkGray,
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: '400',
    }
})