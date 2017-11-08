import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import Diagnosa from './diagnosa';
import DiagnosaDetail from './diagnosadetail';
import DiagnosaEdit from './diagnosaedit';
import DiagnosaAdd from './diagnosaadd';

export default (DiagnosaNav = StackNavigator (
    {
        Diagnosa : {screen: Diagnosa},
        DiagnosaDetail : {screen: DiagnosaDetail},
        DiagnosaEdit : {screen: DiagnosaEdit},
        DiagnosaAdd : { screen: DiagnosaAdd }
    }
));