import Image from "next/image";
import React from "react";

const TestimonialItem = ({ name, img, comment }) => {
	return (
		<div className='flex flex-col justify-center items-center text-center gap-4 pb-10 pt-16 px-5 bg-lightgray relative rounded'>
			{/* img  */}
			<div className='img w-[75px] h-[75px] rounded-full absolute left-1/2 -top-[37px] -translate-x-1/2'>
				<Image src={img} alt='Avatar' />
			</div>
			<h1 className='text-darkblue font-bold'>{name}</h1>
			<p className='text-darkgrayblue leading-8 md:min-h-[160px] lg:min-h-[200px] xl:min-h-[160px]'>
				&#34;{comment}&#34;
			</p>
		</div>
	);
};

export default TestimonialItem;
