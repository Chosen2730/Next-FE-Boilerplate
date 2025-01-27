import React, { useState, useRef } from "react";
import { Paperclip, Plus, Send, SendHorizonal } from "lucide-react";
import { Spinner } from "react-activity";
import { IconButton, Typography } from "@material-tailwind/react";
import { ConversationIcon, LibraryIcon } from "@/assets/svgs";

interface MessageInputProps {
	callback: () => void;
	loading: boolean;
}

const MessageInput = ({ loading }: MessageInputProps) => {
	const [message, setMessage] = useState("");
	const [file, setFile] = useState<File | null>(null);
	const textareaRef = useRef<HTMLTextAreaElement | null>(null);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length > 0) {
			setFile(e.target.files[0]);
		}
	};

	const handleSendMessage = async () => {};

	const adjustTextareaHeight = () => {
		if (textareaRef.current) {
			textareaRef.current.style.height = "auto";
			textareaRef.current.style.height = `${Math.min(
				textareaRef.current.scrollHeight,
				5 * 24 // 5 rows x line height (24px default)
			)}px`;
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			handleSendMessage();
		} else if (e.key === "Enter" && e.shiftKey) {
			adjustTextareaHeight();
		}
	};

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				handleSendMessage();
			}}
			className='flex items-center gap-2 p-2 border rounded-3xl shadow-md bg-gray_1 w-full max-w-3xl mx-auto relative'
		>
			<div className='relative'>
				<IconButton
					variant='text'
					className='p-2 text-gray-500 hover:bg-gray-100 rounded-full'
				>
					<ConversationIcon />
				</IconButton>
				<input
					type='file'
					id='fileInput'
					className='hidden'
					onChange={handleFileChange}
				/>
			</div>

			<textarea
				ref={textareaRef}
				className='flex-grow resize-none rounded-md bg-white border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500'
				rows={1}
				placeholder='Type your message...'
				value={message}
				onChange={(e) => {
					setMessage(e.target.value);
					adjustTextareaHeight();
				}}
				onKeyDown={handleKeyDown}
				onInput={adjustTextareaHeight}
			/>

			{file && (
				<div className='flex items-center gap-2 bg-gray-200 px-3 py-1 rounded-md absolute bottom-full'>
					<Typography className='text-xs'>{file.name}</Typography>
					<IconButton
						size='sm'
						className='text-white bg-red_pry rounded-full'
						onClick={() => setFile(null)}
					>
						✕
					</IconButton>
				</div>
			)}
			<IconButton className='bg-transparent shadow-none'>
				<LibraryIcon />
			</IconButton>
			<IconButton
				variant='text'
				className='p-2 text-gray-500 hover:bg-gray-100 rounded-full'
				onClick={() => document.getElementById("fileInput")?.click()}
			>
				<Plus strokeWidth={2} size={24} />
			</IconButton>
			<button
				type='submit'
				className='p-2 bg-sec rounded-full text-white flex items-center justify-center'
			>
				{loading ? <Spinner size={16} /> : <SendHorizonal size={18} />}
			</button>
		</form>
	);
};

export default MessageInput;
