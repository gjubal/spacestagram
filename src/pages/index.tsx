import Head from 'next/head';
import Image from 'next/image';
import {
	Dispatch,
	Fragment,
	ImgHTMLAttributes,
	SetStateAction,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';
import { FaArrowRight, FaHeart, FaRegHeart } from 'react-icons/fa';
import { useQuery } from 'react-query';
import convertToMMDDYYYY from '../utils/convertToMMDDYYYY';
import { getRandomDate } from '../utils/getRandomDate';
import { api } from './api/axios';

type PlanetaryPicture = {
	title: string;
	url: string;
	hdurl: string;
	date: string;
	copyright?: string;
	explanation: string;
};

export default function Home() {
	const [isLiked, setIsLiked] = useState(false);

	const {
		isLoading,
		isError,
		data: pictureInfo,
		refetch,
	} = useQuery('planetaryData', () => {
		return api.get<PlanetaryPicture>(
			`${process.env.NEXT_PUBLIC_NASA_API_URL}`,
			{
				params: {
					api_key: process.env.NASA_API_KEY,
					date: getRandomDate(),
				},
			}
		);
	});

	if (isLoading) {
		return <Panel type="loading" />;
	}

	if (isError) {
		return <Panel type="error" />;
	}

	return (
		<div className="h-full w-full flex flex-col justify-center items-center my-5 py-5">
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
			<main className="grid grid-cols-1">
				<section className="flex flex-col items-center border rounded-lg p-4 max-w-2xl bg-white">
					{pictureInfo?.data && (
						<Fragment key={pictureInfo.data.url}>
							<h1 className="text-xl font-bold">{pictureInfo.data.title}</h1>
							<div className="p-2" />
							<Image
								src={pictureInfo.data.hdurl}
								alt={pictureInfo.data.title}
								width={600}
								height={500}
								className="rounded-lg object-cover"
							/>

							<div className="p-2" />
							<p className="italic">
								Date of capture: {convertToMMDDYYYY(pictureInfo.data.date)}
							</p>
							<div className="p-2" />
							<p className="p-4 text-justify">{pictureInfo.data.explanation}</p>
							<div className="p-2" />
							<div className="flex flex-row">
								<LikeButton isLiked={isLiked} setIsLiked={setIsLiked} />
								<div className="mx-1" />
								<NextImgButton refetch={refetch} setIsLiked={setIsLiked} />
							</div>
						</Fragment>
					)}
				</section>
			</main>
		</div>
	);
}

const LikeButton: React.FC<{
	isLiked: boolean;
	setIsLiked: Dispatch<SetStateAction<boolean>>;
}> = ({ isLiked, setIsLiked }) => {
	useEffect(() => {
		const likeState = localStorage.getItem('likeState');

		likeState === 'true' ? setIsLiked(true) : setIsLiked(false);
	}, [setIsLiked]);

	return (
		<button
			onClick={() => {
				setIsLiked(!isLiked);
				isLiked
					? localStorage.setItem('likeState', 'false')
					: localStorage.setItem('likeState', 'true');
			}}
			className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
		>
			{isLiked ? <FaHeart /> : <FaRegHeart />}
		</button>
	);
};

const NextImgButton: React.FC<{
	refetch: any;
	setIsLiked: Dispatch<SetStateAction<boolean>>;
}> = ({ refetch, setIsLiked }) => {
	return (
		<button
			onClick={() => {
				refetch();
				setIsLiked(false);
				localStorage.setItem('likeState', 'false');
			}}
			className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
		>
			<FaArrowRight />
		</button>
	);
};

const Panel: React.FC<{ type: 'loading' | 'error' }> = ({ type }) => {
	return (
		<div className="h-screen w-screen flex flex-col justify-center items-center">
			{type === 'error' ? (
				<h1 className="text-6xl font-bold text-red-500">Error!</h1>
			) : (
				<h1 className="text-6xl font-bold text-gray-600">Loading...</h1>
			)}
		</div>
	);
};
