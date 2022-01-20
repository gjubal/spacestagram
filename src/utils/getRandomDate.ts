import { format } from 'date-fns';

export const getRandomDate = () => {
	const y = Math.floor(Math.random() * 25) + 1996;
	const m = Math.floor(Math.random() * 12) + 1;
	const d = Math.floor(Math.random() * 31) + 1;

	return format(new Date(y, m, d), 'yyyy-MM-dd');
};
