import React, { Component } from 'react'
import { View,Text,StyleSheet,TouchableOpacity,TextInput } from 'react-native'


export default class Register extends Component
{
    state = 
    {
        name: '',
        email: '',
        password: ''
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input} value={this.state.name} placeholder="Nome" autoFocus={true} onChangeText={name => this.setState({ name })}/>
                <TextInput style={styles.input} value={this.state.email} placeholder="Email" keyboardType="email-address"  onChangeText={email => this.setState({ email })}/>
                <TextInput style={styles.input} value={this.state.password} placeholder="Senha" secureTextEntry={true} onChangeText={password => this.setState({ password })}/>
                <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create(
{   
    container:
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button:
    {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttonText:
    {
        fontSize: 20,
        color: '#FFF'
    },
    input:
    {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
        paddingLeft: 15
    }
})