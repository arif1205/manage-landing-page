import React from "react";
import WhatDifferentItem from "../../utils/WhatDifferentItem";

const data = [
	{
		num: "01",
		title: "Track company-wide progress",
		des: "See how your day-to-day task fits into the wider version. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again",
	},
	{
		num: "02",
		title: "Advanced built-in reports",
		des: "Set internal delivery estimates and track progress toward company goals. Our customizable dashboard helps you build out the reports you need to keep key stakeholders informed.",
	},
	{
		num: "03",
		title: "Everything you need in one place",
		des: "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offer an all-in-one team productivity solution",
	},
];

const WhatDifferent = () => {
	return (
		<div className='pb-[100px] pt-[50px] w-full md:w-[90%] mx-auto lg:w-[75%]'>
			<div className='flex flex-col gap-10 md:flex-row'>
				{/* section header  */}
				<div className='w-[80%] mx-auto'>
					<h1 className='text-center text-4xl font-bold text-darkblue mb-5 md:text-left'>
						What&#39;s Different about Manage?
					</h1>
					<p className='text-darkgrayblue text-base text-center leading-8 md:text-left'>
						Manage provides all the functionality your team needs, without the
						complexity. Our software is tailor-made for modern digital product
						teams.
					</p>
				</div>
				{/* section content */}
				<div className='w-full'>
					<div className='flex flex-col gap-8'>
						{data.map((v, i) => (
							<WhatDifferentItem
								key={i}
								num={v.num}
								title={v.title}
								des={v.des}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhatDifferent;
