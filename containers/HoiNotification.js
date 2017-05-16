import {connect} from 'react-redux'

import {actionSchedulePushNotification, actionReRunSchedulePushNotification, actionDebugPushNotification} from '../actions'

import Notification from '../components/Notification'

const mapStateToProps  = ({records}) => ({records})

const mapActionToProps = (dispatch) => {
	return {
		schedulePushNotification:      () => dispatch(actionSchedulePushNotification()),
		reRunSchedulePushNotification: () => dispatch(actionReRunSchedulePushNotification()),
		debugPushNotification:         () => dispatch(actionDebugPushNotification()),
	}
}

export default connect(mapStateToProps, mapActionToProps)(Notification)

