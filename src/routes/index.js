import React from 'react';
import {
    createAppContainer,
    createSwitchNavigator
} from "react-navigation";
import {
    createStackNavigator
} from "react-navigation-stack";
import Example from '../screens/Example';
import { Platform, Dimensions } from 'react-native';

const routes = createSwitchNavigator(
    {
        InitialApp: createStackNavigator(
            {
                example: {
                    screen: Example,
                    navigationOptions: {
                        header:null,
                        headerStyle: {
                            height: 0
                        }
                    }
                }
            }
        )
    },
    {
        initialRouteName: "InitialApp"
    }
);


export default createAppContainer(routes);
