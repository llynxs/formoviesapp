import React from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';

const styleSheet = createStyleSheet('CircularIndeterminate', theme => ({
	progress: {
		margin: `0 ${theme.spacing.unit * 2}px`,
	},
}));

function Loader(props) {
	const classes = props.classes;
	return (
		<CircularProgress size={60} className={classes.progress} />
	)
};

export default withStyles(styleSheet)(Loader);
