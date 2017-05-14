import React from 'react';
import hoiStyle from '../StyleSheet'
import {Text, View, TextInput, Button} from 'react-native';

export default class RecordCreateForm extends React.Component {
	render() {
		const sayWhat = () => {
			console.log('????');
		}
		return (
			<View style={{display: 'flex'}}>
				<View>
					<Text>What are you doing?</Text>
					<TextInput
						keyboardAppearance="dark"
						style={hoiStyle.input}
					/>
					<View style={{display: 'flex', flexDirection: 'row'}}>
				        <Button onPress={()=>sayWhat()} title="OK"></Button>
			      	</View>
				</View>

				<View>
					<Text>How Good</Text>
					<TextInput
						keyboardAppearance="dark"
						style={hoiStyle.input}
					/>
				</View>

				<View>
					<Text>How Bad</Text>
					<TextInput
						keyboardAppearance="dark"
						style={hoiStyle.input}
					/>
				</View>
			</View>
		);
	}
}