import React, { useEffect } from 'react';
import { Divider, TopNavigation } from '@ui-kitten/components';
import { View, StatusBar, StyleSheet, SafeAreaView } from 'react-native';
import { PropsHeader } from '../../../common/classes/props.interface';
import { BackAction } from './icons/actions-icon';

export const Header = (props: PropsHeader) => {

    useEffect(() => {
        return () => {
        };
    })

    const navigateBack = () => {
        props.navigation.goBack();
    };

    const BackHadler = () => {
        let back = <BackAction onPress={navigateBack}/>;
        if (props.noBackButton) {
           back = null; 
        }
        return back;
    }

    const renderLeftControl = () => [
        <BackHadler/>
    ];

    const renderRightControls = () => {
        let actions: JSX.Element[] = [];
        let renderActions = [];

        if (props.actions.length > 0) {
            actions = props.actions;
        } else {
            return renderActions;
        }

        for (const action of actions) {
            renderActions.push(action);
        }

        return renderActions;
    } 

    return (
        <View>
            <SafeAreaView>
                <View style={style.container}>
                    <StatusBar barStyle="dark-content" />
                    <TopNavigation 
                        title={ props.title ? props.title : 'Inicio'} 
                        alignment='center' 
                        leftControl={BackHadler()}
                        rightControls={renderRightControls()}
                        />
                    <Divider/>
                </View>
            </SafeAreaView>
        </View>
    );
};

const style = StyleSheet.create({
    logo: {
        width: 80,
        height: 26,
        resizeMode: 'contain' //hace que se ajuste al espacio del width
    },
    container: {
        marginTop: 28,
    },
    rigth: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
});