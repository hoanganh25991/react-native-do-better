import React from 'react';
import hoiStyle from '../StyleSheet'
import {View, Text, Button } from 'react-native';

//import {registerForPushNotificationsAsync} from '../utils';

export default class Notification extends React.Component {
	componentDidMount(){
		let {schedulePushNotification} = this.props;
		// Run shedule self loop
		schedulePushNotification();
	}

	render() {

		let {reRunSchedulePushNotification, debugPushNotification} = this.props

		return (
			<View style={[hoiStyle.flexRow]}>
				<View style={[hoiStyle.flexColumn, hoiStyle.bgGray, hoiStyle.flex1]}>
					<Text>Add new schedule few minutes later. Press 'Debug' to test</Text>
					<Button title="Debug"
					        onPress={() => debugPushNotification()}
					></Button>
				</View>
			</View>
		);
	}
}