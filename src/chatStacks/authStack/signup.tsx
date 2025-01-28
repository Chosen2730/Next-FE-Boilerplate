import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/images/logo.png";
import { Button, Typography } from "@material-tailwind/react";
import { FormInput } from "@/components/General/form";
import PhoneInputComponent from "@/components/General/form/phoneInputComponent";
import { Eye, EyeOff } from "lucide-react";
import { colors } from "@/constants/colors";
import { AuthStackSlidesInterface } from "@/app";

const Signup = ({ setStack }: AuthStackSlidesInterface) => {
	const [phoneNumber, setPhoneNumber] = useState("");
	const [isPasswordShown, setIsPasswordShown] = useState(false);
	const [isConfirmPasswordShown, setIsConfirmPasswordShown] = useState(false);

	return (
		<div className='w-full p-4'>
			<Image
				src={logo}
				alt='logo'
				className='w-full max-w-[215px] object-contain mx-auto'
			/>
			<Typography className='font-bold text-center my-2'>
				Get Started
			</Typography>
			<Typography className='text-center text-sm mb-6'>
				Welcome to AfricaHR - Let's create your account.
			</Typography>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
				<FormInput label='First Name' />
				<FormInput label='Last Name' />
				<FormInput label='Work Email Address' type='email' />
				<FormInput label='Company Name' />
				<FormInput label='Number of Employees' type='number' />
				<PhoneInputComponent
					value={phoneNumber}
					setValue={setPhoneNumber}
					label='Phone'
				/>
				<FormInput
					label='Password'
					type={isPasswordShown ? "text" : "password"}
					icon={
						isPasswordShown ? (
							<EyeOff color={colors.gray_4} />
						) : (
							<Eye color={colors.gray_4} />
						)
					}
					iconClick={() => setIsPasswordShown(!isPasswordShown)}
				/>
				<FormInput
					label='Confirm Password'
					placeholder=''
					type={isConfirmPasswordShown ? "text" : "password"}
					icon={
						isConfirmPasswordShown ? (
							<EyeOff color={colors.gray_4} />
						) : (
							<Eye color={colors.gray_4} />
						)
					}
					iconClick={() => setIsConfirmPasswordShown(!isConfirmPasswordShown)}
				/>
			</div>
			<Button
				onClick={() => setStack("otp")}
				className='bg-pry normal-case w-full mt-6'
			>
				Sign Up
			</Button>
		</div>
	);
};

export default Signup;
