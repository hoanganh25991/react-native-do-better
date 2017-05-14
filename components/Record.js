import React from 'react';
import hoiStyle from '../StyleSheet'

import {View, Text} from 'react-native';

export default class Record extends React.Component {
	render() {
		let {record} = this.props;
		
		return (
			<View style={[hoiStyle.flexRow]}>
				<Text>{record.title} | {Math.floor(record.howGood * 10)} | {Math.floor(record.howBad * 10)}</Text>
			</View>
		)
	}
}