import React, { useState } from "react";
import bird from "@/assets/images/bird.png";
import Image from "next/image";
import SearchComp from "../General/TanTable/searchComp";
import { FormInput } from "../General/form";
import { Search } from "lucide-react";
import { IconButton } from "@material-tailwind/react";

const ChatResponseTopBar = () => {
	// const [searchTerm, setSearchTerm] = useState("");
	return (
		<div className='flex justify-between items-center gap-4 w-full bg-white p-2'>
			<Image src={bird} alt='bird' className='w-[37px]' />
			<div className='hidden md:block'>
				<FormInput
					icon={<Search />}
					iconPosition='right'
					placeholder='Search for anything'
				/>
			</div>
			<IconButton className='block md:hidden rounded-full bg-white text-gray_4'>
				<Search />
			</IconButton>
		</div>
	);
};

export default ChatResponseTopBar;
