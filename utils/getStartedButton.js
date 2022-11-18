import React from "react";

const GetStartedButton = ({ bg, color, text, minW, noShadow }) => {
	return (
		<button
			className={`bg-[${bg}] ${
				bg ? "" : "bg-brightred"
			} hover:opacity-60 text-[${color}] ${
				color ? "" : "text-[white]"
			} font-medium text-sm px-9 py-[14px] rounded-full transition duration-250 shadow-md ${
				noShadow ? "" : "shadow-getStartedBtnShadow"
			} min-w-[${minW}] ${minW ? "" : "min-w-[160px]"}`}>
			{text || "Get Started"}
		</button>
	);
};

export default GetStartedButton;
