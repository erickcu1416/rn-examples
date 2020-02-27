import React from 'react';
import { Input, Icon, Layout, Button } from '@ui-kitten/components';
import { StyleSheet, View, Dimensions } from 'react-native';
import colors from '../../../assets/styles/colors';
import { IUser } from '../../../common/models/user.interface';
import Messages from '../../../common/classes/messages';

interface Props {
    login(user: IUser): any,
}

export const LoginForm = (props: Props) => {

    React.useEffect(() => {
        
    })

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const [secureTextEntry, setSecureTextEntry] = React.useState(true);

    const onIconPress = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    const getMt = () => {
        let mv = 120;
        const h = Dimensions.get('screen').height;
        if (h > 700) {
            mv = 350;
        }
        return mv;
    }
    
    const renderIcon = (style) => (
        <Icon {...style} name={secureTextEntry ? 'eye-off' : 'eye'}/>
    );

    const onPress = async () => {
        console.log('Holaaa');
        
        if (!email || !password) {
            return await Messages.presentAlertOk('', 'Necesitas llenar todos los campos');
        }

        const user: IUser = {
            email,
            password
        };

        props.login(user);
    };

    return (
        <View>
            <Layout style={styles.container}>
                <Input
                    status='control'
                    style={styles.inputBox}
                    label='EMAIL'
                    labelStyle={styles.labelInput}
                    textStyle={styles.txtInput}
                    placeholder='Email'
                    placeholderTextColor='white'
                    value={email}
                    onChangeText={setEmail}
                    />

                <Input
                    status='control'
                    style={styles.inputBox}
                    label='PASSWORD'
                    labelStyle={styles.labelInput}
                    textStyle={styles.txtInput}
                    value={password}
                    placeholder='********'
                    placeholderTextColor='white'
                    icon={renderIcon}
                    secureTextEntry={secureTextEntry}
                    onIconPress={onIconPress}
                    onChangeText={setPassword}
                    />

            </Layout>

            <View style={styles.containerBtn}>
                <Button
                    onPress={onPress}
                    textStyle={styles.labelBtn} 
                    style={[styles.button, { marginVertical: getMt() }]} 
                    appearance='ghost' 
                    status='primary'>LOGIN</Button>
            </View>
        </View>
        
       
    );
};


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    inputBox: {
        width: 380,
        borderRadius: 6,
        paddingHorizontal: 16,
        fontSize: 16,
        marginVertical: 20,
        height: 43,
        backgroundColor: 'rgba(145, 145, 145, 0.7)',
    },
    labelInput: {
        color: '#ffffff',
        fontSize: 13,
    },
    labelBtn: {
        color: 'black',
        fontSize: 17,
    },
    txtInput: {
        color: 'white',
        fontSize: 16,
    },
    containerBtn: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 8,
    },
    button: {
        margin: 8,
        height: 52,
        width: 350,
        // marginVertical: 120,
        backgroundColor: 'white',
    },
});