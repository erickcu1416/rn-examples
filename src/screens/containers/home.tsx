import React from 'react';
import { Header } from '../../sections/components/header';
import { Props } from '../../../common/classes/props.interface';
import { FacebookAction } from '../../sections/components/actions-icon';
  
interface State {
    isLoggedIn: boolean;
    loggedInStatus: string;
};

export default class HomeScreen extends React.Component<Props, State> {

    static defaultProps = { navigation:{} }

    navigateBack = () => {
        this.props.navigation.goBack();
    };

    loger = () => {
        console.log('Vengo desde una acción');
    }

    setActions(): JSX.Element[] {
        const actions: JSX.Element[] = [
            <FacebookAction onPress={this.loger}/>
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