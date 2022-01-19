import Head from 'next/head';
import Image from 'next/image';
import {
	FaArrowRight,
	FaBeer,
	FaHeart,
	FaRegHeart,
	FaRegThumbsUp,
	FaThumbsUp,
} from 'react-icons/fa';

export default function Home() {
	const randomDate = () => {
		const y = Math.floor(Math.random() * 20 + 1) + 2000;
		const m = Math.floor(Math.random() * 3) + 10;
		const d = Math.floor(Math.random() * 20 + 1) + 10;

		return `${y}-${m}-${d}`;
	};

	return (
		<div className="h-screen w-screen flex flex-col justify-center items-center">
			<header className="title">
				<h1 className="text-6xl font-bold underline text-center mb-4">
					Spacestagram
				</h1>
				<h3 className="text-lg text-center">
					Where the the beauty of space can be explored from the comfort of
					one&apos;s home.
				</h3>
			</header>
			<div className="p-6" />
			<main className="grid grid-cols-2">
				<section className="flex flex-col items-center border rounded-lg p-4 max-w-xl bg-white">
					<h1 className="text-xl font-bold">Eclipse at Moonset</h1>
					<div className="p-2" />
					<Image
						src="https://apod.nasa.gov/apod/image/1410/tle20141008_beletsky900.jpg"
						alt="Eclipse at moonset picture"
						width={500}
						height={500}
						className="rounded-lg object-cover"
					/>
					<div className="p-2" />
					<p>Date of capture: {randomDate()}</p>
					<div className="p-2" />
					<p className="text-justify">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, at
						illum minima quam dolorum repellat adipisci voluptatem commodi,
						molestias tempore odio fugit impedit velit tenetur. Suscipit impedit
						a culpa recusandae optio fugit officia quas saepe tempora laborum!
						Illum ipsum, consectetur incidunt, itaque vitae cumque aliquam esse
						ipsam labore odit neque, iste voluptatum? Aspernatur ab, neque
						officia similique a sequi libero?
					</p>
					<div className="p-2" />
					<div className="flex flex-row">
						<LikeButton />
						<div className="mx-1" />
						<NextImgButton />
					</div>
				</section>
				<section className="date-picker ml-4">
					<h2 className="text-2xl">Date picker</h2>
				</section>
			</main>
		</div>
	);
}

const LikeButton = () => {
	return (
		<button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
			<FaRegHeart />
		</button>
	);
};

const NextImgButton = () => {
	return (
		<button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
			<FaArrowRight />
		</button>
	);
};
