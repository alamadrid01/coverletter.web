import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import React, { useState } from "react";
import ChevronOpen from "../Assets/chevron-down.svg";
import { faqQA } from "../Utils/data";

const Faq = () => {
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	const classes =
		"leading-[36px] sm:leading-[48px] sm:text-[40px] text-[24px]";

	return (
		<>
			<div className="bg-primaryDeep h-[192px] md:h-[296px] grid place-items-center relative">
				<div className="text-center text-textWhite">
					<h1
						className={`font-bold sm:font-semibold md:text-[56px] md:leading-[72px] mb-[8px] ${classes}`}
					>
						FAQs
					</h1>
					<h2
						className={`font-semibold md:font-bold mb-[8px] sm:mb-[16px] ${classes}`}
					>
						Frequently Asked Questions
					</h2>
					<p className="text-xs font-semibold w-[252px] mx-auto sm:w-[400px] sm:font-normal sm:text-base md:w-[601px]">
						Find out all you need to know about using Aplicar to
						easily generate professional cover letters.
					</p>
				</div>
			</div>
			<main className="md:px-24 px-6 pt-[56px] pb-[199px] bg-[#f0f0f8] text-center">
				<div></div>
				<p className="mb-[32px] text-sm sm:text-base text-[#101010]">
					Do you have any other questions, comments, or complaints?
					<span className="ml-1 text-primaryDark">Contact Us</span>
				</p>
				<button className="bg-primaryMain w-[327px] h-[80px] md:w-[527px] text-textWhite text-xl font-bold hover:bg-primaryDark active:bg-primaryDeep sm:w-[327px]">
					Generate Cover Letter
				</button>
			</main>
		</>
	);
};

export default Faq;
