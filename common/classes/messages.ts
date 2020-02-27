import { Alert } from 'react-native';

export default class Messages {

    static presentAlertOk(title = '', message = ''): Promise<Boolean> {
        return new Promise((resolve, reject) => {
            Alert.alert(
                title,
                message,
                [
                  {text: 'OK', onPress: () => resolve(true)},
                ],
                {cancelable: false},
            );
        });
    }
}