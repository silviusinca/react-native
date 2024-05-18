import React, {useState} from "react";
import styled from "styled-components/native";
import { Text } from "react-native";
import PrettyText from "./PrettyText";

const Container = styled.View`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    padding: 50px;
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
    onSubmit: (email: string, password: string) => void
}

const Register: React.FC<ILogin> = ({onSubmit}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => onSubmit(email, password)

    return (
        <Container>
            <PrettyText text="Register" size={40}></PrettyText>
            <Input keyboardType="email-address" onChangeText={setEmail} placeholder="Enter email here..." placeholderTextColor="#000"/>
            <Input secureTextEntry onChangeText={setPassword} placeholder="Enter password here..." placeholderTextColor="#000"/>
            <Button onPress={handleSubmit}>
                <PrettyText text="Submit!" size={30}></PrettyText>
            </Button>
        </Container>
    )
}

export default Register;