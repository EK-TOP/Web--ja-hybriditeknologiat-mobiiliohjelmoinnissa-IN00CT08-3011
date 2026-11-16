import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export type RowProps = {
    image: string;
    title: string;
    description: string;
};

const Row = ({ image, title, description }: RowProps) => (
    <View style={styles.row}>
        <Image
            source={{ uri: image }}
            style={styles.image}
            resizeMode="cover"
        />
        <View style={styles.textcontainer}>
            <Text style={styles.title}>{title}</Text>
            <Text>{description}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        padding: 10,
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    textcontainer: {
        flex: 1,
    },
    title: {
        fontWeight: 'bold',
    },
});

export default Row;