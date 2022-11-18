import Image from "next/image";
import React from "react";
import Graph from "../../images/illustration-intro.png";
import GetStartedButton from "../../utils/getStartedButton";

const Banner = () => {
	return (
		<div className='min-h-screen'>
			<div className='pt-[150px] pb-[100px] md:pt-[220px]'>
				<div className='flex flex-col gap-10 w-10/12 mx-auto md:flex-row-reverse md:items-center md:w-[75%]'>
					{/* maps and icons  */}
					<div className='graph'>
						<div className=''>
							<Image src={Graph} alt='Illustration intro' />
						</div>
					</div>
					{/* banner text  */}
					<div className='banner-text'>
						<h1 className='font-bold text-darkblue text-4xl text-center mb-3 md:text-left md:text-6xl md:w-[80%] md:mb-8'>
							Bring everyone together to build better products.
						</h1>
						<p className='text-darkgrayblue text-center leading-6 text-base mb-8 md:text-left md:w-[50%]'>
							Manage makes it simple for software teams to plan day-to-day tasks
							while keeping the larger team goals in view.
						</p>
						<div className='bannerBtn text-center md:text-left'>
							<GetStartedButton />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
