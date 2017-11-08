import React, { Component } from 'react';
import { Text, AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from '../login/index';
import Logout from './logout';
import Home from '../header/header';

export default (LogoutNav = StackNavigator (
    {
        Login : { screen : Login },
        Logout : { screen : Logout },
        Home : { screen : Home }
    }
))