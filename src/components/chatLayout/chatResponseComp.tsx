"use client";
import React from "react";
import { ArrowLeft } from "lucide-react";
import { ChatResponseCompProps } from "@/app";
import ChatResponseTopBar from "./chatResponseTopBar";

const ChatResponseComp = ({
	isMobile,
	toggleMobileView,
}: ChatResponseCompProps) => {
	return (
		<div className='h-full bg-gray_1'>
			<div className='flex items-center p-4'>
				{isMobile && (
					<button
						onClick={toggleMobileView}
						className='mr-4 p-2 hover:bg-gray-100 rounded-full'
					>
						<ArrowLeft className='w-5 h-5' />
					</button>
				)}
				<ChatResponseTopBar />
			</div>
			<div className='p-4'>
				<div className='bg-gray-50 rounded-lg h-[calc(100vh-8rem)] p-4 overflow-y-auto'>
					Response content would go here...
				</div>
			</div>
		</div>
	);
};

export default ChatResponseComp;
