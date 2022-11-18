import React from "react";
import GetStartedButton from "../../utils/getStartedButton";

const SimplifyTeam = () => {
	return (
		<div className='bg-brightred py-[80px]'>
			<div className='w-[85%] mx-auto flex flex-col gap-8 md:w-[75%] lg:w-[75%] lg:flex-row lg:items-center lg:justify-between'>
				<h1 className='text-[white] text-5xl font-medium text-center lg:text-left lg:w-[50%]'>
					Simplify how your team works today.
				</h1>
				<div className='btn text-center'>
					<GetStartedButton bg='white' color='#f25f3a' />
				</div>
			</div>
		</div>
	);
};

export default SimplifyTeam;
