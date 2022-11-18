import Link from "next/link";
import React from "react";
import GetStartedButton from "../../utils/getStartedButton";
import {
	FaFacebookSquare,
	FaYoutube,
	FaTwitter,
	FaPinterest,
	FaInstagram,
} from "react-icons/fa";
import logo from "../../images/logo-white.png";
import Image from "next/image";

const Footer = () => {
	return (
		<div className='bg-verydarkblue py-8 px-6 lg:py-16'>
			<div className='grid grid-cols-2 gap-y-12 lg:grid-cols-4 lg:gap-y-4 lg:w-[75%] mx-auto'>
				{/* newsletter  */}
				<div className='col-span-2 flex flex-row gap-2 lg:col-span-1 lg:col-start-4 lg:row-start-1 lg:items-start'>
					<div className='grow'>
						<input
							type='text'
							name='email'
							id='email'
							placeholder='Update in your inbox...'
							className='bg-[white] rounded-full w-full h-full lg:h-auto py-3 px-8 text-sm'
						/>
					</div>
					<GetStartedButton text='Go' minW='60px' noShadow={true} />
				</div>
				{/* links  */}
				<div className='left-links flex flex-col pl-10 gap-3 text-sm lg:col-start-2 lg:row-start-1'>
					{["Home", "Pricing", "Products", "About Us"].map((v, i) => (
						<Link href='/' key={i}>
							<a className='text-[#9ca3af] hover:text-[white] transition'>
								{v}
							</a>
						</Link>
					))}
				</div>
				<div className='right-links flex flex-col pl-10 gap-3 text-sm lg:col-start-3 lg:row-start-1'>
					{["Careers", "Community", "Privacy Policy"].map((v, i) => (
						<Link href='/' key={i}>
							<a className='text-[#9ca3af] hover:text-[white] transition'>
								{v}
							</a>
						</Link>
					))}
				</div>
				{/* social icons  */}
				<div className='col-span-2 lg:row-start-2 lg:col-start-1'>
					<div className='flex gap-7 justify-center lg:justify-start'>
						{[
							FaFacebookSquare,
							FaYoutube,
							FaTwitter,
							FaPinterest,
							FaInstagram,
						].map((V, i) => (
							<div
								key={i}
								className='text-[#9ca3af] hover:text-[white] transition text-3xl'>
								<V />
							</div>
						))}
					</div>
				</div>
				{/* logo */}
				<div className='logo col-span-2 text-center lg:col-span-1 lg:text-left lg:col-start-1 lg:row-start-1'>
					<Image src={logo} alt='logo' />
				</div>
				<div className='col-span-2 lg:row-start-2 lg:col-start-4'>
					<p className='text-[#4b5563] text-sm text-center lg:text-right'>
						Copyright 2020. All Right Reserved.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
