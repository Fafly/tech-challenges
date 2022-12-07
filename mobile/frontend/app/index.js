/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Home from './src/pages/Home/Home';
import {name as appName} from './app.json';
import './apiMock';

AppRegistry.registerComponent(appName, () => Home);
