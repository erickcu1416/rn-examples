import React from 'react';
import { Header } from '../../sections/components/header';
import { Props } from '../../../common/classes/props.interface';
import { FacebookAction, LookAction } from '../../sections/components/icons/actions-icon';
import StorageManager from '../../classes/storageManager';
import { LOGGED_STATUS } from '../../../common/constants/status';
  
interface State {
    isLoggedIn: boolean;
    loggedInStatus: string;
};

export default class HomeScreen extends React.Component<Props, State> {

    navigateBack = () => {
        this.props.navigation.goBack();
    };

    navigateSplashScreen = () => {
        this.props.navigation.navigate('Splash');
    };

    loger = () => {
        console.log('Vengo desde una acción');
    }

    closeSession = async () => {
        await StorageManager.updatedLoggedStatus(LOGGED_STATUS.LOGGED_OUT.toString());
        this.navigateSplashScreen();
    }

    setActions(): JSX.Element[] {
        const actions: JSX.Element[] = [
            <FacebookAction onPress={this.loger}/>,
            <LookAction onPress={this.closeSession}/>
        ];
        return actions;
    }

    render()
    {
        return (
            <Header title="Inicio" actions={this.setActions()} noBackButton={true}/>
        );
    }
}