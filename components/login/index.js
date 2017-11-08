import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import Login from './login';
import Home from '../header/header';

export default (LoginNav = StackNavigator (
    {
        Login : {screen:Login},
        Home : {screen: Home}
    }
));