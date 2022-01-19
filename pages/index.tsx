import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
	const randomDate = () => {
		const y = Math.floor(Math.random() * 20 + 1) + 2000;
		const m = Math.floor(Math.random() * 3) + 10;
		const d = Math.floor(Math.random() * 20 + 1) + 10;

		return `${y}-${m}-${d}`;
	};

	return (
		<div className="h-screen w-screen flex flex-col">
			<h1 className="text-3xl font-bold underline">Spacestagram</h1>

			<p>{randomDate()}</p>
		</div>
	);
}
