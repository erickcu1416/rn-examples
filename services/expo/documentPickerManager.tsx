import * as DocumentPicker from 'expo-document-picker';

export default class DocumentPickerManager {
    
    public static _pickDocument(): Promise<DocumentPicker.DocumentResult> {
        return new Promise(async (resolve, reject) => {
            const result = await DocumentPicker.getDocumentAsync({});
            resolve(result);
        });
    }
}
