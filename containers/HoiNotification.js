import {connect} from 'react-redux'

import {actionSchedulePushNotification, actionReRunSchedulePushNotification} from '../actions'

import Notification from '../components/Notification'

const mapStateToProps  = ({records}) => ({records})

const mapActionToProps = (dispatch) => {
	return {
		schedulePushNotification:      () => dispatch(actionSchedulePushNotification()),
		reRunSchedulePushNotification: () => dispatch(actionReRunSchedulePushNotification())
	}
}

export default connect(mapStateToProps, mapActionToProps)(Notification)

