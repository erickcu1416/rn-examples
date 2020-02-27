import React from 'react';
import { SafeAreaView } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { CompositeNavigationProp, NavigationHelpers, ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const BackIcon = (style) => (
  <Icon {...style} name='arrow-back' />
);

interface Props {
    navigation: CompositeNavigationProp<StackNavigationProp<ParamListBase, 'params'>, NavigationHelpers<ParamListBase>>;
}
  
interface State {
    isLoggedIn: boolean;
    loggedInStatus: string;
};

export default class HomeScreen extends React.Component<Props, State> {

    static defaultProps = { navigation:{} }

    navigateBack = () => {
        this.props.navigation.goBack();
    };

    BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={this.navigateBack}/>
    );
  
    render()
    {
        return (
            <SafeAreaView>
                <TopNavigation title='Home' alignment='center' leftControl={this.BackAction()}/>
                <Divider/>
                <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text category='h1'>HOME</Text>
                </Layout>
            </SafeAreaView>
        );
    }
}