export default function convertToMMDDYYYY(date: string) {
	const numArr = date.split('-');
	return `${numArr[1]}/${numArr[2]}/${numArr[0]}`;
}
