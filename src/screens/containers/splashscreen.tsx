import React from 'react';
import LogIn from './login';
import Home from './home';
import { AsyncStorage, Text } from 'react-native';
import { CompositeNavigationProp, NavigationHelpers, ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Storage from '../../classes/storage';

interface Props {
    navigation: CompositeNavigationProp<StackNavigationProp<ParamListBase, 'params'>, NavigationHelpers<ParamListBase>>;
}
  
interface State {
    isLoggedIn: boolean;
    loggedInStatus: string;
};


export default class SplashScreen extends React.Component<Props, State> {

    static defaultProps = { navigation: {} }

    state: State = {
        isLoggedIn: false,
        loggedInStatus: ''
    };

    async componentDidMount() {
        console.log('Validando el home jeje');
        const item = await Storage.getItemSotrage('loggedInStatus');
        if (item) {
            console.log('Encontré');
            this.setState({ loggedInStatus: 'loggedIn' });
        } else {
            console.log('No encontré');
            this.setState({ loggedInStatus: 'loggedOut' });
        }
    }

    validateRender() {
        if (this.state.loggedInStatus === 'loggedIn') {
            return Home;
        } else if (this.state.loggedInStatus === 'loggedOut') {
            return LogIn;
        }
    }

    render() {
        if (this.state.loggedInStatus === 'loggedIn') {
            return <Home/>
        }
        else if (this.state.loggedInStatus === 'loggedOut') {
            return <LogIn navigation={this.props.navigation}/>
        }
        return <Text>Cargando..</Text>
    }
}