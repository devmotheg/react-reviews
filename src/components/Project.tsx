/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import React, { useState, useEffect } from "react";
import reviews from "../data/reviews";

interface SVGProps {
	className?: string;
}

interface ReviewProps {
	id: number;
	name: string;
	job: string;
	image: string;
	text: string;
}

interface ArrowButtonProps {
	isDisabled: string | boolean;
	clickHandler: () => void;
	text: string;
	ArrowSVG: (props: SVGProps) => JSX.Element;
}

const QuoteSVG = (props: SVGProps) => {
	return (
		<svg
			{...props}
			id="icon-quote"
			viewBox="0 0 512 512"
			xmlns="http://www.w3.org/2000/svg">
			<title>quote</title>
			<path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
		</svg>
	);
};

const ArrowLeftSVG = (props: SVGProps) => {
	return (
		<svg
			{...props}
			id="icon-quote"
			viewBox="0 0 320 512"
			xmlns="http://www.w3.org/2000/svg">
			<title>arrow left</title>
			<path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
		</svg>
	);
};

const ArrowRightSVG = (props: SVGProps) => {
	return (
		<svg
			{...props}
			id="icon-quote"
			viewBox="0 0 320 512"
			xmlns="http://www.w3.org/2000/svg">
			<title>arrow right</title>
			<path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
		</svg>
	);
};

const Review = (props: ReviewProps) => {
	const { name, job, image, text } = props;
	return (
		<>
			<div className="relative mx-auto rounded-full w-36 h-36 before:absolute before:bg-blue-400 before:h-full before:w-full before:rounded-full before:-top-2 before:-right-2 before:-z-10">
				<img
					className="object-cover w-full h-full rounded-full"
					src={image}
					alt="Person Image"
				/>
				<span className="absolute left-0 p-2 bg-blue-400 rounded-full top-2">
					<QuoteSVG className="w-5 h-5 fill-blue-50" />
				</span>
			</div>
			<div className="mx-auto space-y-2 text-center w-fit">
				<h2 className="text-lg font-bold capitalize">{name}</h2>
				<span className="text-sm text-blue-400 uppercase">{job}</span>
			</div>
			<p className="text-slate-500">{text}</p>
		</>
	);
};

const ArrowButton = (props: ArrowButtonProps) => {
	const { isDisabled, clickHandler, text, ArrowSVG } = props;
	return (
		<button disabled={!!isDisabled} onClick={clickHandler}>
			<span className="sr-only">{text}</span>
			<ArrowSVG
				className={String(
					`w-6 h-6 flex jusitfy-center transition  ${isDisabled || "fill-blue-300 hover:fill-blue-400"}`
				)}
			/>
		</button>
	);
};

const Project = () => {
	const [review, setReview] = useState(0);
	const [disabledLeft, setDisabledLeft] = useState<string | boolean>(true);
	const [disabledRight, setDisabledRight] = useState<string | boolean>(false);

	useEffect(() => {
		if (review === 0) setDisabledLeft("fill-red-400");
		else setDisabledLeft(false);
		if (review === reviews.length - 1) setDisabledRight("fill-red-400");
		else setDisabledRight(false);
	});

	return (
		<>
			<h1 className="relative py-4 mb-12 text-4xl font-bold capitalize after:w-2/4 after:h-1 after:absolute after:bottom-0 after:left-2/4 after:-translate-x-1/2 after:bg-blue-500">
				our reviews
			</h1>
			<section className="p-4 space-y-4 transition rounded shadow-lg hover:shadow-black/20 max-w-[40rem]">
				<Review {...reviews[review]} />
				<div className="flex items-center gap-5 mx-auto w-fit">
					<ArrowButton
						isDisabled={disabledLeft}
						clickHandler={() => setReview(review - 1)}
						text="previous"
						ArrowSVG={ArrowLeftSVG}
					/>
					<ArrowButton
						isDisabled={disabledRight}
						clickHandler={() => setReview(review + 1)}
						text="next"
						ArrowSVG={ArrowRightSVG}
					/>
				</div>
				<button
					className="block p-1 mx-auto text-blue-400 capitalize transition rounded bg-blue-50 w-fit hover:bg-blue-400 hover:text-blue-50"
					onClick={() => setReview(Math.floor(Math.random() * reviews.length))}>
					surprise me
				</button>
			</section>
		</>
	);
};

export default Project;
