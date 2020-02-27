import React from 'react';
import LogIn from './login';
import Home from './home';
import { AsyncStorage, Text } from 'react-native';
import { CompositeNavigationProp, NavigationHelpers, ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Storage from '../../classes/storage';
import { LOGGED_STATUS } from '../../../common/constants/status';

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
        const item = await Storage.getLoggedStatus();
        console.log('ITEMS', item);
        if (!item) {
            console.log('No encontré');  
        } else {
            console.log('Si encontré');  
            this.setState({ loggedInStatus: item.toString() });
            console.log('Estado Actual', this.state.loggedInStatus.toString());
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
        if (this.state.loggedInStatus === LOGGED_STATUS.LOGGED_IN) {
            return <Home/>
        }
        else if (this.state.loggedInStatus === LOGGED_STATUS.LOGGED_OUT) {
            return <LogIn navigation={this.props.navigation}/>
        }
        return <Text>Cargando..</Text>
    }
}