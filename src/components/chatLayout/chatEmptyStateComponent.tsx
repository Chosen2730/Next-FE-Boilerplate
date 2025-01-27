import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

import logo from "@/assets/images/logo.png";
import btnGroup from "@/assets/images/btn-group.png";
const ChatEmptyStateComponent = () => {
	return (
		<div
			className={`flex flex-col items-center justify-center
			`}
		>
			<Image
				className='w-full max-w-[215px] object-contain'
				alt='logo'
				src={logo}
			/>
			<div className='text-center my-4'>
				<Typography className='text-sec text-2xl font-semibold'>
					Welcome to ChatERP!
				</Typography>
				<Typography className='text-sm mt-2'>
					The easy way to manage your business. Starting with HR & Payroll. Sign
					up to experience:
				</Typography>
			</div>
			<Image
				src={btnGroup}
				className='w-full max-w-[340px] mx-auto '
				alt='btn-group'
			/>
		</div>
	);
};

export default ChatEmptyStateComponent;
