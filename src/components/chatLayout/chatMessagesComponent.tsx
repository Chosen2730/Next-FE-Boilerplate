import { ChatMessagesComponentProps } from "@/app";
import { ChatToggle } from "@/assets/svgs";
import { Expand } from "lucide-react";
import React from "react";
import MessageInput from "./messageInput";
import ChatEmptyStateComponent from "./chatEmptyStateComponent";
import ChatPrompts from "./chatPrompts";

const ChatMessagesComponent = ({
	isExpanded,
	isMobile,
	setIsExpanded,
}: ChatMessagesComponentProps) => {
	const isEmpty = true;
	return (
		<div className='h-full bg-white p-4'>
			<div className='flex justify-between items-center p-4'>
				<h2 className='text-xl font-semibold'>Chat</h2>
				{!isMobile && (
					<button
						onClick={() => setIsExpanded(!isExpanded)}
						className='p-2 hover:bg-gray-100 rounded-full'
					>
						{isExpanded ? <ChatToggle /> : <Expand size={14} />}
					</button>
				)}
			</div>
			<div className='p-4 h-[calc(100vh-10rem)] overflow-y-auto'>
				{isEmpty ? (
					<ChatEmptyStateComponent />
				) : (
					<div className={`w-full max-w-3xl mx-auto`}>
						<ChatPrompts />
					</div>
				)}
			</div>
			<MessageInput callback={() => {}} loading={false} />
		</div>
	);
};

export default ChatMessagesComponent;
