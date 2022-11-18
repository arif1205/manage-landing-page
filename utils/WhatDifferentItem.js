import React from "react";

const WhatDifferentItem = ({ num, title, des }) => {
	return (
		<div>
			{/* item header  */}
			<div className='pl-4'>
				{/* item header container */}
				<div className='bg-verypalered flex items-center gap-3 rounded-l-full pr-3 md:bg-[transparent]'>
					<div className='text-[white] bg-brightred rounded-full font-bold py-2 px-7'>
						{num}
					</div>
					<div className='font-bold text-darkblue text-base'>{title}</div>
				</div>
			</div>
			{/* item content */}
			<div className='pl-4 pr-5 py-4 text-darkgrayblue leading-8 text-sm'>
				{des}
			</div>
		</div>
	);
};

export default WhatDifferentItem;
