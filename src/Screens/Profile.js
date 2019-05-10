import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Gravatar } from 'react-native-gravatar'
import commomStyles from '../styles/CommonStyles'

class Profile extends Component
{
    logout = () => {
        this.props.navigation.navigate('Auth')
    }

    render()
    {
        const options = {email: 'fulanodetal@gmail.com', secure: true}
        return (
            <View style={styles.container}>
                <Gravatar options={options} style={styles.avatar} />
                <Text style={styles.nickname}>Fulano de Tal</Text>
                <Text style={styles.email}>fulanodetal@gmail.com</Text>
                <TouchableOpacity onPress={this.logout} style={commomStyles.buttom}>
                    <Text style={commomStyles.buttomText}>Sair</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create(
{
    container:
    {
        flex : 1,
        alignItems: 'center'
    },
    avatar:
    {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop: 180
    },
    nickname:
    {
        marginTop: 30,
        fontSize: 30,
        fontWeight: 'bold'
    },
    email:
    {
        marginTop: 20,
        fontSize: 25
    }
})

export default Profile