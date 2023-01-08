import { StyleSheet } from 'react-native'; // Uvozimo knjižnico za stiliranje iz knjižnice React Native

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingTop: 40
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ebebeb',
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        paddingBottom: 20
    },
    input: {
        flex: 1,
        height: 50,
        fontSize: 16,
        padding: 10,
        borderColor: '#ebebeb',
        borderWidth: 1,
        borderRadius: 4,
    },
    dateButton: {
        width: 150,
        height: 50,
        backgroundColor: '#fff',
        borderColor: '#ebebeb',
        borderWidth: 1,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dateText: {
        fontSize: 16,
    },
    button: {
        width: 90,
        height: 50,
        backgroundColor: '#1abc9c',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    list: {
        flex: 1,
    },
    todoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: '#ebebeb',
        borderWidth: 1,
        padding: 15,
        margin: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    todoText: {
        fontSize: 16,
    },
    todoDate: {
        fontSize: 12,
        color: '#a3a3a3',
        alignSelf: 'flex-end',
    },
    removeButton: {
        backgroundColor: '#e74c3c',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    removeButtonText: {
        color: '#fff',
        fontSize: 14,
    },
});

export default styles;
