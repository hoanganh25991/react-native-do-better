import React from 'react';
import hoiStyle from '../StyleSheet'
import {View, Text} from 'react-native';

export default class Header extends React.Component {
	render() {
		return (
			<View style={{height: 100, display: 'flex'}}>
				<Text>Header</Text>
			</View>
		)
	}
}