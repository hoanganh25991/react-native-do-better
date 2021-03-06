import {connect} from 'react-redux'

// import {actionCreateNewRecord, actionCreateTitle, actionCreateHowGood, actionCreateHowBad, actionNextStep} from '../actions'

import RecordList from '../components/RecordList'

const mapStateToProps  = ({records}) => ({records})

// const mapActionToProps = (dispatch) => {
// 	return {
// 		createNewRecord: ()        => dispatch(actionCreateNewRecord()),
// 		createTitle:     (title)   => dispatch(actionCreateTitle(title)),
// 		createHowGood:   (howGood) => dispatch(actionCreateHowGood(howGood)),
// 		createHowBad:    (howBad)  => dispatch(actionCreateHowBad(howBad)),
// 		nextStep:        ()        => dispatch(actionNextStep()),
// 	}
// }

export default connect(mapStateToProps, null)(RecordList)

