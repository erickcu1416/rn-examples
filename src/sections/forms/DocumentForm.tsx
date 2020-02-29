import React, { useState } from 'react';
import { Button } from '@ui-kitten/components';
import * as DocumentPicker from 'expo-document-picker';
import { StyleSheet, View } from 'react-native';
import _DocumentPickerManager from '../../../services/expo/documentPickerManager';

export const DocumentPickerForm = () => {

    const [items, setItems] = useState<DocumentPicker.DocumentResult[]> ([])

    const pickDocument = async () => {
        const i = await _DocumentPickerManager._pickDocument();
        if (i.type === 'cancel') return
        setItems([...items, i]);
        console.log('ITEMS', items);
    }

    return (
        <View style={styles.container}>
            <Button
                style={styles.button}
                onPress={pickDocument}
                textStyle={styles.labelBtn} 
            >
                Select Document jejeje
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        height: 52,
        width: 350,
        // marginVertical: 120,
        backgroundColor: 'red',
    },
    labelBtn: {
        color: 'black',
        fontSize: 17,
    },
});