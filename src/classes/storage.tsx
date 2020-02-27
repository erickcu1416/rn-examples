import { AsyncStorage } from 'react-native';

export default class Messages {
    
    static async getItemSotrage(nameItem: string): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                const item = await AsyncStorage.getItem(nameItem);
                if (item) {
                    resolve(item);
                } else {
                    resolve(false);
                }
            } catch (error) {
                reject(error);
            }
        });
    }

    static async setItemSotrage(nameItem: string, value: any): Promise<boolean> {
        return new Promise(async (resolve, reject) => {
            try {
                await AsyncStorage.setItem(nameItem.toString(), JSON.stringify(value)).then(
                    () => resolve(true)
                );
            } catch (error) {
                reject(error);
            }
        });
    }
}