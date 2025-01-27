"use client";
import { Button, Typography } from "@material-tailwind/react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
export default function Home() {
	const [value, setValue] = useState<string | undefined>();

	return (
		<main className='flex h-screen flex-col items-center justify-between p-24'>
			<Button>Hello World!</Button>
			<Typography variant='h1'>Template Web App</Typography>
			<div className='w-full max-w-md'></div>
		</main>
	);
}
