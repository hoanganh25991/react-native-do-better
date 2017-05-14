import React from 'react';
import hoiStyle from '../StyleSheet'
import {Text, View, TextInput, Button, Slider} from 'react-native';

import {renderIf} from '../utils'

class RecordCreateForm extends React.Component {
	render() {
		let {newRecord} = this.props;

		let {title, howGood, howBad} = newRecord;

		let {createNewRecord, createTitle, createHowGood, createHowBad, thunkNextStep} = this.props;

		return (
			<View style={hoiStyle.flexColumn}>
				<Button title="New Record" onPress={() => createNewRecord()} />
				{renderIf(newRecord.step == 0)(
					<View style={[hoiStyle.flexColumn]}>
						<Text>What are you doing?</Text>
						<TextInput
							keyboardAppearance="dark"
							style={hoiStyle.input}
							value={title}
							onChangeText={value => createTitle(value)}
						/>
						<View style={{display: 'flex', flexDirection: 'row'}}>
							<Button onPress={() => thunkNextStep()} title="OK"></Button>
						</View>
					</View>
				)}

				{renderIf(newRecord.step == 1)(
					<View style={[hoiStyle.flexColumn]}>
						<Text>How Good {Math.floor(howGood * 10)}</Text>
						<Slider value={howGood} onValueChange={value => createHowGood(value)}/>
						<View style={{display: 'flex', flexDirection: 'row'}}>
							<Button onPress={() => thunkNextStep()} title="OK"></Button>
						</View>
					</View>
				)}

				{renderIf(newRecord.step == 2)(
					<View style={[hoiStyle.flexColumn]}>
						<Text>How Bad {Math.floor(howBad * 10)}</Text>
						<Slider value={howBad} onValueChange={value => createHowBad(value)}/>
						<View style={{display: 'flex', flexDirection: 'row'}}>
							<Button onPress={() => thunkNextStep()} title="OK"></Button>
						</View>
					</View>
				)}
			</View>
		);
	}
}

export default RecordCreateForm