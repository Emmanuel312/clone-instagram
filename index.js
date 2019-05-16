import {AppRegistry} from 'react-native';
import Navigator from './src/Navigator'
import {name as appName} from './app.json';
import React from 'react'
import {Provider} from 'react-redux'
import storeConfig from './src/store/storeConfig'

import axios from 'axios'
axios.defaults.baseURL = 'https://fir-app-43252.firebaseio.com/'


const store = storeConfig()
const Redux = () =>
(
    <Provider store={store}>
        <Navigator />
    </Provider>
)

AppRegistry.registerComponent(appName, () => Redux);
