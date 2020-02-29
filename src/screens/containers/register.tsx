import React from 'react';
import { CompositeNavigationProp, NavigationHelpers, ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaView, StatusBar, TouchableOpacity, ImageBackground, View } from 'react-native';
import { LoginForm } from '../../sections/forms/LoginForm';
import { Text, Icon } from '@ui-kitten/components';
import { styles } from '../styles/auth.style';

interface Props {
  navigation: CompositeNavigationProp<StackNavigationProp<ParamListBase, 'params'>, NavigationHelpers<ParamListBase>>;
}

interface State {
  isLoggedIn: boolean;
  loggedInStatus: string;
};

export default class RegisterScreen extends React.Component<Props, State> {

  componentDidMount() {
    this.props.navigation.setOptions({
        header: () => null
    });
  }

  navigateLogin = () => {
    this.props.navigation.replace('Login', {});
  };

  loginHadler = user => {
    console.log('datos', user);
  }

  render()
  {
    return (
        <ImageBackground source={require('../../../assets/img/register-background.jpg')} style={styles.backgroundImage} >
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={styles.left}>
                    <Text style={styles.txtLng} category='h1'>REGISTER</Text>
                    <TouchableOpacity onPress={this.navigateLogin} style={{flexDirection: 'row'}}>
                        <Text style={styles.txtRgTxt} category='h6'>LogIn</Text>
                        <Icon style={styles.txtRg} name='arrow-forward' width={25} height={25} fill='white'/>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerForm}>
                    <LoginForm login={this.loginHadler}/>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
  }
}