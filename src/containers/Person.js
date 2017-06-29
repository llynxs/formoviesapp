import React from 'react';
import { connect } from 'react-redux';

import { personRequest } from '../actions/requestActions';
import { Loader } from '../components/Loader';
import PersonItem from '../components/PersonItem';

class Person extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '',
			allowRender: false,
		};
	};

	componentWillMount() {
		this.setState({
			id: this.props.params.id
		});
	};

	componentDidMount() {
		const { id } = this.state;
		const { apiKey } = this.props;

		this.props.getPerson(id, apiKey);
		this.setState({
			allowRender: true,
		});
	};

	shouldComponentUpdate(nextProps) {
		return nextProps !== this.props;
	};

	render() {
		const { personData } = this.props;

		return (
			<div className="person">
				{
					this.state.allowRender ?
					<PersonItem	personData={personData} /> :
					<div className="loader">
						<Loader />
					</div>
				}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		personData: state.personData.personData,
		apiKey: state.mediaRequestData.apiKey,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getPerson: (id, key) => dispatch(personRequest(id, key))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Person);
