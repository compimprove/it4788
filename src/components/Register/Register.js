import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterThamgia from './RegisterThamgia';
import RegisterHoten from './RegisterHoten';
import Email from './Email';
import Phone from './Phone';
import ChoseDate from './ChoseDate';
import ChoseGioiTinh from './ChoseGioiTinh';
import DoneRegister from './DoneRegister';
import Pass from './Pass';
import XacnhanTK from './XacnhanTK';
import SaveInfo from './SaveInfo';

const Stack = createStackNavigator();

class Register extends React.Component {
	constructor(props) {
		super(props);

	}
	render() {
		return (
			<Stack.Navigator>
				<Stack.Screen name="RegisterThamGia" component={RegisterThamgia} />
				<Stack.Screen name="RegisterHoten" component={RegisterHoten} />
				<Stack.Screen name="Email" component={Email} />
				<Stack.Screen name="Phone" component={Phone} />
				<Stack.Screen name="ChoseDate" component={ChoseDate} />
				<Stack.Screen name="ChoseGioiTinh" component={ChoseGioiTinh} />
				<Stack.Screen name="Pass" component={Pass} />
				<Stack.Screen name="XacnhanTK" component={XacnhanTK} />
				<Stack.Screen name="DoneRegister" component={DoneRegister} />
				<Stack.Screen name="SaveInfo" component={SaveInfo} />
			</Stack.Navigator>
		);
	}
}

export default Register;