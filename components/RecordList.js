import React from 'react';
import hoiStyle from '../StyleSheet'

import {View, Text} from 'react-native';

import Record from './Record'

export default class RecordList extends React.Component {
	render() {
		let {records} = this.props;

		return (
			<View style={[hoiStyle.flexColumn]}>
				{records.map((record, index) => (
					<Record record={record} key={index}/>
				))}
			</View>
		)
	}
}