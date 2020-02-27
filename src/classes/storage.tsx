import { AsyncStorage } from 'react-native';

export default class StorageManager {
    
    private static LOGGED_STATUS = 'LOGGED_STATUS';

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

    public static saveLoggedStatus(status: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.setItemSotrage(this.LOGGED_STATUS.toString(), JSON.stringify(status)).then(() => resolve(true)).catch(() => resolve(false));
        });
    }

    public static getLoggedStatus(): Promise<any> {
        return new Promise(async (resolve, reject) => {
            const res = await this.getItemSotrage(this.LOGGED_STATUS);
            if (!res) {
                resolve(false);
            } else {
                resolve(res);
            }
        });
    }
}