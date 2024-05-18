import React, {useState} from "react";
import styled from "styled-components/native";
import { Text } from "react-native";
import PrettyText from "./PrettyText";

const Container = styled.View`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 50px;
    margin-top: 30px;
`

const Input = styled.TextInput`
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-bottom: 15px;
    padding: 8px;
`

const Button = styled.TouchableOpacity`
    margin-top: 30px;
`

export interface ILogin {
    onSubmit: (email: string, password: string) => void;
    goToRegister: () => void;
}

const Login: React.FC<ILogin> = ({onSubmit, goToRegister}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => onSubmit(email, password)

    return (
        <Container>
            <PrettyText text="Login" size={40}></PrettyText>
            <Input keyboardType="email-address" onChangeText={setEmail} placeholder="Enter email here..." placeholderTextColor="#000"/>
            <Input secureTextEntry onChangeText={setPassword} placeholder="Enter password here..." placeholderTextColor="#000"/>
            <Button onPress={handleSubmit}>
                <PrettyText text="Submit!" size={30}></PrettyText>
            </Button>
            <Button onPress={goToRegister}>
                <PrettyText text="Register here!" size={20}></PrettyText>
            </Button>
        </Container>
    )
}

export default Login;