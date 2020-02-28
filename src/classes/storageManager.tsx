import { AsyncStorage } from 'react-native';

export default class StorageManager {

    private static LOGGED_STATUS = 'LOGGED_STATUS';

    private static async clearStorage() {
        return new Promise((resolve, reject) => {
            try {
                AsyncStorage.clear().then(
                    () => resolve(true)
                );
            } catch (error) {
                reject(error);
            } 
        });
    }

    private static async removeItemStorage(nameItem: string) {
        return new Promise((resolve, reject) => {
            try {
                AsyncStorage.removeItem(nameItem).then(() => resolve(true))
            } catch (error) {
                reject(error);
            } 
        });
    }

    private static async getItemSotrage(nameItem: string): Promise<any> {
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

    private static async setItemStorage(nameItem: string, value: any): Promise<boolean> {
        return new Promise(async (resolve, reject) => {
            try {
                await AsyncStorage.setItem(nameItem.toString(), value).then(
                    () => resolve(true)
                );
            } catch (error) {
                reject(error);
            }
        });
    }

    public static saveLoggedStatus(status: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            console.log('Estado a guardar', status);
            this.setItemStorage(this.LOGGED_STATUS.toString(), status).then(() => resolve(true)).catch(() => resolve(false));
        });
    }

    public static updatedLoggedStatus(status: string): Promise<boolean> {
        return new Promise(async (resolve, reject) => {
            console.log('Estado a actualizar', status);
            await this.removeItemStorage(this.LOGGED_STATUS.toString());
            this.setItemStorage(this.LOGGED_STATUS.toString(), status).then(() => resolve(true)).catch(() => resolve(false));
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