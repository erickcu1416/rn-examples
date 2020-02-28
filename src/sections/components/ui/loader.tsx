import React from 'react';
import { StyleSheet, View, Text, Animated, ActivityIndicator } from 'react-native';

export const Loader = () => {
    return(
        <View style={styles.containerIndicator}>
            <ActivityIndicator
                size="large"
                color={'#9acffa'}
                animating={true}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    containerIndicator: {
        flex: 1,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0,0, 0.5)'
    },
});