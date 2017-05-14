import React from 'react';
import hoiStyle from '../StyleSheet'

import {View, Text, Button } from 'react-native';

import {Notifications} from 'expo'

//import {registerForPushNotificationsAsync} from '../utils';

export default class Notification extends React.Component {
	render() {
		return (
			<View style={{ padding: 10 }}>
				<Button onPress={this._presentLocalNotification} title='Present a notification immediately'></Button>
				<View style={{ height: 10 }} />
				<Button onPress={this._scheduleLocalNotification} title='Schedule notification for 10 seconds from now'></Button>
			</View>
		);
	}

	_presentLocalNotification = () => {
		Notifications.presentLocalNotificationAsync({
			title: 'Here is a local notifiation!',
			body: 'This is the body',
			data: {
				hello: 'there',
			},
			ios: {
				sound: true,
			},
			android: {
				sound: true,
				vibrate: true,
			},
		});
	};

	_scheduleLocalNotification = () => {
		Notifications.scheduleLocalNotificationAsync(
			{
				title: 'Here is a scheduled notifiation!',
				body: 'This is the body',
				data: {
					hello: 'there',
					future: 'self',
				},
				ios: {
					sound: true,
				},
				android: {
					vibrate: true,
				},
			},
			{
				time: new Date().getTime() + 10000,
			}
		);
	};
}