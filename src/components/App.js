import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';

class App extends React.Component {
	state = {
		pageHeader:'Naming Contests',
		contests: this.props.initialContests
	};
	componentDidMount() {
	//ajax
	}
	render() {
		return (
				<div>
					<Header message={this.state.pageHeader} />
					<div className="app-wrapper">
						{this.state.contests.map(contest =>
							<ContestPreview key={contest.id} {...contest} />
						)}
					</div>
				</div>
		);
	}
}

export default App;

