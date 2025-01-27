"use client";
import React, { useState, useEffect } from "react";
import { Maximize2, Minimize2, MessageSquare, ArrowLeft } from "lucide-react";
import ChatMessagesComponent from "@/components/chatLayout/chatMessagesComponent";
import ChatResponseComp from "@/components/chatLayout/chatResponseComp";
import MessageInput from "@/components/chatLayout/messageInput";

const ChatLayout = () => {
	const [isExpanded, setIsExpanded] = useState(false);
	const [showResponseView, setShowResponseView] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			const mobile = window.innerWidth < 768;
			setIsMobile(mobile);
			if (!mobile) {
				setShowResponseView(false);
			} else {
				// Reset expanded state when switching to mobile
				setIsExpanded(false);
			}
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const toggleMobileView = () => {
		setShowResponseView(!showResponseView);
		// Ensure expanded state is reset when toggling mobile view
		if (isExpanded) {
			setIsExpanded(false);
		}
	};

	return (
		<div className='relative w-full h-screen overflow-hidden'>
			<div className='flex w-full h-full'>
				{/* Chat Messages Section */}
				<div
					className={`
            ${showResponseView ? "hidden md:block" : "block"}
            ${isExpanded ? "w-full" : "w-full md:w-1/3"}
            transition-all duration-300
          `}
				>
					<ChatMessagesComponent
						isExpanded={isExpanded}
						isMobile={isMobile}
						setIsExpanded={setIsExpanded}
					/>
				</div>

				{/* Chat Response Section */}
				<div
					className={`
            ${!showResponseView ? "hidden md:block md:w-0" : "block w-full"}
            ${isExpanded ? "hidden" : "flex-1"}
            ${isMobile ? "absolute inset-0" : ""}
            transition-all duration-300
          `}
				>
					<ChatResponseComp
						isExpanded={isExpanded}
						isMobile={isMobile}
						toggleMobileView={toggleMobileView}
					/>
				</div>
			</div>

			{/* Mobile Toggle Button */}
			{isMobile && !showResponseView && (
				<button
					onClick={toggleMobileView}
					className='fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg z-50 hover:bg-green-600 transition-colors'
				>
					<MessageSquare className='w-6 h-6' />
				</button>
			)}
		</div>
	);
};

export default ChatLayout;
