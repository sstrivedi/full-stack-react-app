import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

//import data from './testData';
import App from './components/App';

axios.get('/api/contests')
	.then(res => {
		ReactDOM.render(
			<App initialContests={res.data.contests}/>,
			document.getElementById('root')
		);
	})
	.catch(function (error) {
		console.log(error);
	});

