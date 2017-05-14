import {StyleSheet} from 'react-native'
import {Layout} from './constants'

const hoiStyle = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},

	input: {
		width: Layout.window.width - 20,
		// borderRadius: 2,
		// borderWidth: 1,
		// borderColor: '#eee',
		fontSize: 35,
		padding: 5,
		height: 40,
	},
	
	borderDefault: {
		borderStyle: 'solid',
		borderColor: 'black',
	}
})
	
	
export default hoiStyle