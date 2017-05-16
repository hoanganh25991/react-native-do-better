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

		let {reRunSchedulePushNotification} = this.props

		return (
			<View style={[hoiStyle.flexRow]}>
				<Button title='Rerun schedule push notification'
				        onPress={() => reRunSchedulePushNotification()}
				></Button>
			</View>
		);
	}
}