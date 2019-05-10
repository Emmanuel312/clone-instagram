import React from 'react';
import { createBottomTabNavigator,createAppContainer,createSwitchNavigator, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Addphoto from './Screens/Addphoto'
import Feed from './Screens/Feed';
import Profile from './Screens/Profile'
import Login from './Screens/Login'
import Register from './Screens/Register'


const authRouter = createStackNavigator(
{
    Login: { screen: Login, navigationOptions: { title: 'Login'}},
    Register: { screen: Register, navigationOptions: { title: 'Register'}},
    
},
{
    initialRouteName: 'Login'
})

const loginOrProfileRoutes = createSwitchNavigator(
{
    Profile,
    Auth: authRouter
},
{
    initialRouteName: 'Profile'
})

const MenuRoutes = createBottomTabNavigator({
    Feed: {
        name: 'Feed',
        screen: Feed,
        navigationOptions: {
            title: 'Feed',
            tabBarIcon: ({ tintColor }) => <Icon name='home' size={30} color={tintColor} />
        }
    },
    Add: {
        name: 'Add photo',
        screen: Addphoto,
        navigationOptions: {
            title: 'Adicionar foto',
            tabBarIcon: ({ tintColor }) => <Icon name='camera' size={30} color={tintColor} />
        }
    },
    Profile: {
        name: 'Profile',
        screen: loginOrProfileRoutes,
        navigationOptions: {
            title: 'Profile',
            tabBarIcon: ({ tintColor }) => <Icon name='user' size={30} color={tintColor} />
        }
    }
})
 
const MenuConfig = {
    initialRouteName:'Feed',
    tabBarOptions: {
        showLabel: false,
    }
}
 
const MenuNavigator = createAppContainer(MenuRoutes,MenuConfig);
export default MenuNavigator;