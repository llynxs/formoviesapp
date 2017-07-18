import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import classNames from 'classnames';
import Button from 'material-ui/Button';
import { Link } from 'react-router';

const styleSheet = createStyleSheet('Pagination', theme => ({
	root: {
		flexGrow: 1,
	},
	demo: {
		height: 240,
	},
	paper: {
		padding: theme.spacing.unit * 20,
		height: '100%',
	},
	control: {
		padding: theme.spacing.unit * 2,
	},
}));

class Pagination extends React.Component {
	pageConverter() {
		let pageArray = [];

		for (let i = 0; i < this.props.pagesLimit; i++) {
			pageArray.push(i + 1);
		}

		return pageArray;
	};

	setPage(page) {
		const { itemsPerPage, currentPage, pagesLimit, url } = this.props;
		const { classes } = this.props;

		let mean = Math.round(itemsPerPage / 2);

		const pager = () => {
			if (currentPage <= mean) {
				return {
					first: 0,
					last: itemsPerPage,
				}
			} else if (currentPage >= pagesLimit) {
				return {
					first: pagesLimit - itemsPerPage,
					last: pagesLimit,
				}
			} else {
				return {
					first: currentPage - (itemsPerPage - mean + ((itemsPerPage % 2 === 0) ? 0 : 1)),
					last: currentPage + (itemsPerPage - mean),
				}
			}
		}

		const pageRange = this.pageConverter().slice(
			pager().first,
			pager().last,
		);

		return pageRange.map((item, i) => {
			const pagesListClass = classNames({
				'pagination-list-item__link': true,
				active: item === page,
			});

			return (
				<Button key={i} className="pagination-list-item">
					<Link className={pagesListClass} to={`/${url}/page=${item}`}>
						{item}
					</Link>
				</Button>
			)
		});
	}

	render() {
		const classes = this.props.classes;
		const { url, currentPage, pagesLimit } = this.props;

		/*todo: fix markup*/

		return (
			<div className="pagination-list">
				<Button className="pagination-list-item">
					<Link to={`/${url}/page=${1}`} className="pagination-list-item__link">{'<<'}</Link>
				</Button>
				<div className="pagination-list-pages">
					{
						this.setPage(currentPage)
					}
				</div>
				<Button className="pagination-list-item">
					<Link to={`/${url}/page=${pagesLimit}`} className="pagination-list-item__link">{'>>'}</Link>
				</Button>
			</div>
		);}
}

Pagination.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Pagination);