import React from 'react';
import { Header } from '../../sections/components/header';
import { Props } from '../../../domain/interfaces/props/props.interface';
import { FacebookAction, LookAction } from '../../sections/components/icons/actions-icon';
import StorageManager from '../../../services/classes/storageManager';
import { LOGGED_STATUS } from '../../../domain/constants/status';
import { BackHandler, View } from 'react-native';
import Messages from '../../../domain/helpers/messages';
import HomeMessages from '../../../common/messages/homeMessages';
import { DocumentPickerForm } from '../../sections/forms/DocumentForm';
  
interface State {
    isLoggedIn: boolean;
    loggedInStatus: string;
};

export default class HomeScreen extends React.Component<Props, State> {

    backHandler: any;

    componentDidMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress)
    }

    componentWillUnmount() {
        console.log('Saliendo jeje'); 
        this.backHandler.remove();
    }

    handleBackPress = async () => {
        console.log('Propuedades', this.props.navigation);
        if (this.props.navigation.canGoBack()) {
            const res = await Messages.presentAlertOk('', HomeMessages.closeSession.toString());
            if (res) {
                this.closeSession();
                return true;
            }
        } else {
            BackHandler.exitApp();
            return true;
        }
    }

    navigateBack = () => {
        this.props.navigation.goBack();
    };

    navigateToLogin = () => {        
        this.props.navigation.replace('Login', {});
    };

    loger = () => {
        console.log('Vengo desde una acción');
    }

    closeSession = async () => {
        console.log('Propuedades', this.props.navigation.canGoBack());
        await StorageManager.updatedLoggedStatus(LOGGED_STATUS.LOGGED_OUT.toString());
        this.navigateToLogin();
    }

    setActions(): JSX.Element[] {
        const actions: JSX.Element[] = [
            <LookAction onPress={this.closeSession}/>
        ];
        return actions;
    }

    render()
    {
        return (
            <View>
                <Header title="Inicio" actions={this.setActions()} noBackButton={true}/>
                <DocumentPickerForm/>
            </View>
        );
    }
}