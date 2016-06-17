import React from 'react';
import {render} from 'react-dom';
import store from './store/configureStore';
import {Provider} from 'redux';

import Counter from './components/Counter';


const rootElem = document.getElementById('root');
render(
	<Provider store={store}>
		<Counter />
	</Provider>,
	rootElem
);