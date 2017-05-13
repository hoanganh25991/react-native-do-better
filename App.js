import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import HoiBrowser from './HoiBrowser'

import RecordCreateForm from './RecordCreateForm'

export default class App extends React.Component {
	render() {
		return (
			<View style={{flex: 1}}>
				<View style={styles.container}>
					<Text>What are you doing?</Text>
				</View>
				<HoiBrowser style={{flex: 1}}/>
				<RecordCreateForm style={{flex: 1}}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
/////