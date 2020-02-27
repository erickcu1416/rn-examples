import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: 'transparent' 
    },
    containerForm: {
        flex: 5,
        marginTop: 48,
        backgroundColor: 'transparent' 
    },
    footer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    footerIcons: {
        flexDirection: 'row',
        marginVertical: 5,
        justifyContent: 'space-around'
    },
    btnIcon: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
    },
    left: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingHorizontal: 17,
    },
    rigth: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingHorizontal: 17,
    },
    txtLng: {
        top: 80,
        color: 'white',
    },
    txtRg: {
        top: 81.5,
        marginLeft: 0,
        color: 'white',
    },
    txtRgTxt: {
        marginTop: 80,
        marginLeft: 140,
        color: 'white',
    },
    text: {
        color: 'white',
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
        opacity: 1
    }
});
