import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';

export default class RecordCreateForm extends React.Component {
	constructor(props){
		super(props);

		this.state = {};
	}


	render() {




		return (
			<View style={styles.container}>
				<View id="step1">
					<Text>What are you doing?</Text>
					<TextInput
						style={{height: 40, borderColor: 'gray', borderWidth: 1}}
						onChangeText={(text) => this.setState({text})}
						value={this.state.text}
					/>
				</View>
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
////