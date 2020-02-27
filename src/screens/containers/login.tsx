import React from 'react';
import { CompositeNavigationProp, NavigationHelpers, ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaView, StatusBar, TouchableOpacity, ImageBackground, View } from 'react-native';
import { LoginForm } from '../../sections/forms/LoginForm';
import { Text, Button, Icon } from '@ui-kitten/components';
import { FacebookIcon, GoogleIcon, TwitterIcon } from '../../sections/components/iconskt';
import { styles } from '../styles/auth.style';
import Storage from '../../classes/storage';
import { LOGGED_STATUS } from '../../../common/constants/status';


interface Props {
  navigation: CompositeNavigationProp<StackNavigationProp<ParamListBase, 'params'>, NavigationHelpers<ParamListBase>>;
}

interface State {
  isLoggedIn: boolean;
  loggedInStatus: string;
};

export default class LoginScreen extends React.Component<Props, State> {

  static defaultProps = {  }

  componentDidMount() {
    this.props.navigation.setOptions({
        header: () => null
    });
  }

  navigateHome = () => {
    console.log('VOY A IR AL HOME');
    
    this.props.navigation.navigate('Home');
  };

  navigateRegister = () => {
    console.log('Navegando');
    this.props.navigation.navigate('Register');
  };

  loginHadler = async user => {
    console.log('Naveganod a home');
    await Storage.saveLoggedStatus(LOGGED_STATUS.LOGGED_IN.toString());
    this.navigateHome();
  }

  render()
  {
    return (
        <ImageBackground source={require('../../../assets/img/login-background.jpg')} style={styles.backgroundImage} >
          <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.left}>
              <Text style={styles.txtLng} category='h1'>LOGIN</Text>
              <TouchableOpacity onPress={this.navigateRegister} style={{flexDirection: 'row'}}>
                <Text style={styles.txtRgTxt} category='h6'>Sign Up </Text>
                <Icon style={styles.txtRg} name='arrow-forward' width={25} height={25} fill='white'/>
              </TouchableOpacity>
            </View>
            <View style={styles.containerForm}>
              <LoginForm login={this.loginHadler}/>
            </View>
            <View style={styles.footer}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.text} category='s1'>Sign with a social account</Text>
              </View>
              <View style={styles.footerIcons}>
                <Button style={styles.btnIcon} icon={GoogleIcon}></Button>
                <Button style={styles.btnIcon} icon={FacebookIcon}></Button>
                <Button style={styles.btnIcon} icon={TwitterIcon}></Button>
              </View>
            </View>
          </SafeAreaView>
        </ImageBackground>
    );
  }
}