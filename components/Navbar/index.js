import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../images/logo.png";
import IconHamburger from "../../images/icon-hamburger.svg";
import CloseIcon from "../../images/icon-close.svg";
import GetStartedButton from "../../utils/getStartedButton";

const Navbar = () => {
	const [openModal, setOpenModal] = useState(false);

	useEffect(() => {
		const nav = document.getElementById("nav");
		const scrollIndicator = document.getElementById("scrollIndicator");
		const hamburgericon = document.getElementById("hamburgericon");
		const navContainer = [...document.getElementsByTagName("nav")][0];
		const modalContainer = document.getElementById("modalContainer");

		// common functions
		const scrollAndShrink = (e) => {
			if (
				document.documentElement.scrollTop > 80 ||
				document.body.scrollTop > 80 ||
				openModal
			) {
				nav.style.transition = "all .3s";
				nav.style.padding = "1.5rem 0";
				navContainer.style.boxShadow =
					"rgba(33, 35, 38, 0.5) 0px 10px 10px -10px";
				navContainer.style.background = "white";

				// scroll indication
				const winScroll =
					document.body.scrollTop || document.documentElement.scrollTop;
				const height =
					document.documentElement.scrollHeight -
					document.documentElement.clientHeight;
				const scrolled = (winScroll / height) * 100;
				scrollIndicator.style.width = scrolled + "%";
			} else {
				nav.style.padding = "4rem 0";
				navContainer.style.boxShadow = "0 0 0 0";
				scrollIndicator.style.width = "0" + "%";
				navContainer.style.background = "transparent";
			}
		};

		// onscroll event functions
		window.addEventListener("scroll", scrollAndShrink);
		// onload event fuctions
		window.addEventListener("load", scrollAndShrink);
		// hamburgericon onclick
		// hamburgericon.addEventListener("click", (e) => {
		// 	setOpenModal(true);
		// 	scrollAndShrink();
		// });

		// for modal section
		if (openModal) {
			modalContainer.style.top = "115%";
			scrollAndShrink();
		} else {
			modalContainer.style.top = "-500%";
			scrollAndShrink();
		}
	}, [openModal]);

	const scrollToTop = () => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	};

	return (
		<nav className={`bg-transparent fixed top-0 w-full z-40`}>
			<div className='relative'>
				{/* scroll indicator  */}
				<div
					className='absolute h-1 bottom-0 left-0 bg-brightred'
					id='scrollIndicator'></div>
				{/* navigation  */}
				<div className='w-[90%] lg:w-[80%] xl:w-[75%] mx-auto py-16' id='nav'>
					<div className='flex justify-between items-center flex-row gap-5'>
						{/* logo  */}
						<div
							className='logo w-24 md:w-[180px] cursor-pointer pt-3'
							onClick={scrollToTop}>
							<Image
								src={logo}
								alt='Manage Landing Page Logo'
								className='max-w-full object-contain'
							/>
						</div>
						{/* links  */}
						<div className='links hidden justify-center gap-10 md:flex'>
							{["Pricing", "Product", "About Us", "Careers", "Community"].map(
								(v, i) => (
									<a
										href='http://'
										target='_blank'
										rel='noopener noreferrer'
										key={i}
										className='font-medium text-darkblue cursor-pointer text-sm hover:text-darkgrayblue transition'>
										{v}
									</a>
								)
							)}
						</div>
						{/* menu icon  */}
						<div
							className='bars block md:hidden'
							id='hamburgericon'
							onClick={() => setOpenModal((prev) => !prev)}>
							{openModal ? <CloseIcon /> : <IconHamburger />}
						</div>
						{/* modal container  */}
						<div
							className={`flex flex-col bg-[white] justify-center items-center gap-5 absolute w-[90%] py-5 rounded-sm shadow-mobileNavShadow transition-all ease-out duration-500 md:hidden z-10`}
							id='modalContainer'>
							{["Pricing", "Product", "About Us", "Careers", "Community"].map(
								(v, i) => (
									<a
										href='http://'
										target='_blank'
										rel='noopener noreferrer'
										key={i}
										className='font-medium text-darkblue cursor-pointer text-sm hover:text-darkgrayblue transition'>
										{v}
									</a>
								)
							)}
						</div>
						{/* get started button  */}
						<div className='hidden md:block'>
							<GetStartedButton />
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
