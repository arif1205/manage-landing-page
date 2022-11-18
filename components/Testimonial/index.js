import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// import images
import anisha from "../../images/avatar-anisha.png";
import rechard from "../../images/avatar-richard.png";
import ali from "../../images/avatar-ali.png";
import shanai from "../../images/avatar-shanai.png";
import TestimonialItem from "../../utils/TestimonialItem";
import GetStartedButton from "../../utils/getStartedButton";

// fake data
const data = [
	{
		name: "Anisha Li",
		comment:
			"Manage has supercharged our team's workflow. The maintain visibility on larger milestones at all times keeps everyone motivated.",
		img: anisha,
	},
	{
		name: "Ali Bravo",
		comment:
			"We have able to cancel so many other subscriptions since using manage. There is no more cross channel confusion and everyone is much more focused.",
		img: ali,
	},
	{
		name: "Rechard Watts",
		comment:
			"Manage allows us to provide structure and procedure keeps us organized and focused. I can't stop recommending them to everyone I talk to!",
		img: rechard,
	},
	{
		name: "Shanai L.",
		comment:
			"We have able to cancel so many other subscriptions since using manage. There is no more cross channel confusion and everyone is much more focused.",
		img: shanai,
	},
];

const Testimonial = () => {
	return (
		<div className='pb-[80px] md:pb-[200px]'>
			{/* section header  */}
			<div className='section-header'>
				<h1 className='text-center text-4xl font-bold text-darkblue mb-[50px] px-4'>
					What they&#39;ve said
				</h1>
			</div>
			{/* section content  */}
			{/* slider container  */}
			<div className='w-[90%] mx-auto md:w-full'>
				<Swiper
					slidesPerView={1}
					spaceBetween={20}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination]}
					className='mySwiper'
					breakpoints={{
						640: {
							slidesPerView: 1,
						},
						768: {
							slidesPerView: 2,
						},
						1024: {
							slidesPerView: 3,
						},
					}}>
					{data.map((v, i) => (
						<SwiperSlide key={i}>
							<TestimonialItem img={v.img} name={v.name} comment={v.comment} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			{/* btn  */}
			<div className='text-center mt-5 md:mt-8'>
				<GetStartedButton />
			</div>
		</div>
	);
};

export default Testimonial;
