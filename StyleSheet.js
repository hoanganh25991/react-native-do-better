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
		height: 50,
	},
	
	borderDefault: {
		borderStyle: 'solid',
		borderColor: 'black',
	},
	
	flexRow: {
		display: 'flex',
		flexDirection: 'row'
	},

	flexColumn: {
		display: 'flex',
		flexDirection: 'column'
	},
	
	flex1: {
		flex: 1,
	},
	
	hidden: {
		display: 'none'
	}
})
	
	
export default hoiStyle