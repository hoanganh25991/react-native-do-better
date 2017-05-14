import {connect} from 'react-redux'

import {actionCreateNewRecord, actionCreateTitle, actionCreateHowGood, actionCreateHowBad, actionThunkNextStep} from '../actions'

import RecordCreateForm from '../components/RecordCreateForm'

const mapStateToProps  = ({newRecord}) => ({newRecord})

const mapActionToProps = (dispatch) => {
	return {
		createNewRecord: ()        => dispatch(actionCreateNewRecord()),
		createTitle:     (title)   => dispatch(actionCreateTitle(title)),
		createHowGood:   (howGood) => dispatch(actionCreateHowGood(howGood)),
		createHowBad:    (howBad)  => dispatch(actionCreateHowBad(howBad)),
		thunkNextStep:   ()        => dispatch(actionThunkNextStep()),
	}
}

export default connect(mapStateToProps, mapActionToProps)(RecordCreateForm)

