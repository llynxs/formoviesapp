export const stable = function(arr, cmp) {
	cmp = cmp ? cmp : (a, b) => {
		if (a < b) return -1;
		if (a > b) return 1;
		return 0;
	};

	let stabilizedThis = arr.map((el, index) => [el, index]);

	let stableCmp = (a, b) => {
		let order = cmp(a[0], b[0]);

		if (order != 0) return order;
		return a[1] - b[1];
	}

	stabilizedThis.sort(stableCmp);

	for (let i=0; i < arr.length; i++) {
		arr[i] = stabilizedThis[i][0];
	}
	return arr;
}