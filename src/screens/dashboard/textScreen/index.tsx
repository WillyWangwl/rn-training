import React, { useReducer } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const defaultUser:User = {
    username: "Admin",
    password: "password123",
    visible: false,
}
enum ActionType {
    LOGIN = "login",
    RESET = "reset",
    USERNAME = "username",
    PASSWORD = "password",
    VISIBLE = "visible",
}
type Action = {
    type: ActionType,
    payload?: string,
    visible?: boolean,
}
type User = {
    username: string;
    password: string;
    visible: boolean;
}
const initialUser:User = {
    username: "",
    password: "",
    visible: false,
}
const userChecking = (user:User):boolean => {
    return (user.username === defaultUser.username && user.password === defaultUser.password ) ? true: false
}

const reducer = ( state:User, action:Action ): User => {
    switch(action.type) {
        case ActionType.USERNAME:
        case ActionType.PASSWORD:
            return {...state, [action.type as keyof User ]:action.payload }
        case ActionType.LOGIN:
            if( userChecking(state) ) {
                Alert.alert("Log in successful",`Welcome ${state.username}`)
                return initialUser;
            } else {
                Alert.alert("Invalid Username or Password");
                return state;
            }
        case ActionType.RESET:
            return initialUser;
        case ActionType.VISIBLE:
            return {...state, [action.type as keyof User ]:action.visible }
    }
}

const TextScreen = () => {
    const [user, dispatch] = useReducer( reducer, initialUser )

    return (
        <View style = { styles.backgroundStyle }>
            <Text style = { styles.titleStyle } >LOG IN </Text>
            <View style = { styles.textContainer}>
                <TextInput 
                    autoCapitalize = 'none'
                    autoCorrect = { false }
                    placeholder = 'Username'
                    style = { styles.textStyle }
                    value = { user.username }
                    onChangeText = { (newUsername) => dispatch( {type:ActionType.USERNAME, payload: newUsername } ) } 
                />
            </View>
            <View style = { styles.textContainer}>
                <TextInput 
                    autoCapitalize = 'none'
                    autoCorrect = { false }
                    placeholder = 'Password'
                    style = { [ styles.textStyle, {left: 15} ] }
                    value = { user.password }
                    onChangeText = { (newPassword) => dispatch( {type:ActionType.PASSWORD, payload: newPassword } ) } 
                    onSubmitEditing = { () => dispatch( {type:ActionType.LOGIN } ) }
                    secureTextEntry = { !user.visible }
                />
                <TouchableOpacity 
                    style = { styles.visibility }
                    onPress = { () => dispatch( { type:ActionType.VISIBLE, visible: (!user.visible) }) }
                >
                    <MaterialIcons name={  (user.visible ) ? "visibility-off" : "visibility" } size={24} color="black" />               
                </TouchableOpacity> 
            </View>
             <Text style = { styles.passwordText }>{user.password.length < 8 ? "Minimum 8 character": " "}</Text>
             <View style = { styles.btnContainer } >
             <TouchableOpacity 
                style = { styles.btnStyle }
                onPress = { () => dispatch( {type:ActionType.LOGIN } ) }
            >
                        <Text>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style = { styles.btnStyle }
                    onPress = { () => dispatch( {type:ActionType.RESET } ) }
                >
                        <Text>Reset</Text>
                </TouchableOpacity>
             </View>
        </View>
    );
}



export default TextScreen;