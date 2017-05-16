import React from 'react';
import hoiStyle from './StyleSheet'
import {Text, View} from 'react-native';

import Header from './components/Header'
import HoiRecordCreateForm from './containers/HoiRecordCreateForm'
import HoiRecordList from './containers/HoiRecordList'
import HoiNotification from './containers/HoiNotification'


import rootReducer from './reducers'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk';
// import loggerMiddleware from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';


const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<View style={{flex: 1}}>
					<Header/>
					<HoiRecordCreateForm />
					<HoiRecordList />
					<Text style={[hoiStyle.h1]}>--Debug--</Text>
					<HoiNotification />
				</View>
			</Provider>
		)
	}
}