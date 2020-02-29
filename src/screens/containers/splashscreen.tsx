import React from 'react';
import LogIn from './login';
import Home from './home';
import { View, Image, StyleSheet, Text, Animated } from 'react-native';
import { CompositeNavigationProp, NavigationHelpers, ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Storage from '../../../services/classes/storageManager';
import { LOGGED_STATUS } from '../../../domain/constants/status';

interface Props {
    navigation: CompositeNavigationProp<StackNavigationProp<ParamListBase, 'params'>, NavigationHelpers<ParamListBase>>;
}
  
interface State {
    isLoggedIn: boolean;
    loggedInStatus: string;
    LogoAnime: any;
    LogoText: any;
    loadingSpinner: boolean;
};

export default class SplashScreen extends React.Component<Props, State> {

    static defaultProps = { navigation: {} }

    state: State = {
        isLoggedIn: false,
        loggedInStatus: '',
        LogoAnime: new Animated.Value(0),
        LogoText: new Animated.Value(0),
        loadingSpinner: false,
    };

    async componentDidMount() {
        this.validateRender();
        const {LogoAnime, LogoText} = this.state;
        Animated.parallel([
        Animated.spring(LogoAnime, {
            toValue: 1,
            tension: 10,
            friction: 2,
        }),
        Animated.timing(LogoText, {
            toValue: 1,
            duration: 1800,
        }),
        ]).start(() => {
            this.setState({
                loadingSpinner: true,
            });
        });
    }

    async validateRender() {
        setTimeout(async() => {
            const item = await Storage.getLoggedStatus();
            if (!item) {
            } else {
                this.setState({ loggedInStatus: item.toString() });
            }
        }, 8000);
    }

    render() {
        if (this.state.loggedInStatus === LOGGED_STATUS.LOGGED_IN) {
            return <Home navigation={this.props.navigation}/>
        }
        else if(this.state.loggedInStatus === LOGGED_STATUS.LOGGED_OUT)  {
            return <LogIn navigation={this.props.navigation}/>
        }
        return  <View style={styles.container}>
                    <Animated.View style={{
                        opacity: this.state.LogoAnime,
                        top: this.state.LogoAnime.interpolate({
                            inputRange: [0, 1],
                            outputRange: [80, 0],
                        }),
                    }}>
                        <Image source={require('../../../assets/icons/Logo.png')}/>
                    </Animated.View>
                    <Animated.View style={{opacity: this.state.LogoText}}>
                        <Text style={styles.logoText}> Taskses </Text>
                    </Animated.View>
                </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CB6333',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoText: {
        color: '#FFFFFF',
        fontFamily: 'GoogleSans-Bold',
        fontSize: 30,
        marginTop: 29.1,
        fontWeight: '300',
    },
});