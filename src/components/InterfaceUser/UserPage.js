import React from 'react';
import InterfaceUser from './InterfaceUser';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
class UserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="InterfaceUser" component={InterfaceUser} />
            </Stack.Navigator>
        );
    }
}

export default UserPage;