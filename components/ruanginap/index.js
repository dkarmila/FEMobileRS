import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import RuangInap from './ruanginap';
import RuangInapDetail from './ruanginapdetail';
import RuangInapEdit from './ruanginapedit';
import RuangInapAdd from './ruanginapadd';

export default (RuangInapNav = StackNavigator (
    {
        RuangInap : {screen:RuangInap},
        RuangInapDetail : {screen:RuangInapDetail},
        RuangInapEdit : {screen:RuangInapEdit},
        RuangInapAdd : { screen:RuangInapAdd }
    }
));