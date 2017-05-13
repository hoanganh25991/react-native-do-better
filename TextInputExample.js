import React from 'react';

import {View, TextInput} from 'react-native';

import Layout from './constants/Layout';

export default class TextInputExample extends React.Component {
	state = {
		singleLineValue: '',
		secureTextValue: '',
	};

	render() {
		let textInputStyle = {
			width: Layout.window.width - 20,
			borderRadius: 2,
			borderWidth: 1,
			borderColor: '#eee',
			fontSize: 15,
			padding: 5,
			height: 40,
		};

		const updateSingleLineValue = value =>
			this.setState({singleLineValue: value});
		const updateSecureTextValue = value =>
			this.setState({secureTextValue: value});

		return (
			<View style={{ padding: 10 }}>
				<TextInput
					placeholder="A single line text input"
					onChangeText={updateSingleLineValue}
					style={[{ marginBottom: 10 }, textInputStyle]}
					value={this.state.singleLineValue}
				/>

				<TextInput
					placeholder="A secure text field"
					keyboardAppearance="dark"
					value={this.state.secureTextValue}
					onChangeText={updateSecureTextValue}
					secureTextEntry
					style={textInputStyle}
				/>
			</View>
		);
	}
}