import React from 'react';
import {Text, View} from 'react-native';

import RecordCreateForm from './components/RecordCreateForm'
import Header from './components/Header'

import rootReducer from './reducers'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';


const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<View style={{flex: 1}}>
					<Text>What the fuck is going on</Text>
					<Header/>
					<RecordCreateForm />
				</View>
			</Provider>
		)
	}
}