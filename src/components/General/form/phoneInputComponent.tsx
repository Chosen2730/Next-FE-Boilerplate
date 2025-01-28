import React from "react";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";

interface PhoneInputProps {
	value: string;
	setValue: (value: string) => void;
	color?: string;
	bgColor?: string;
	showLabel?: boolean;
	fontSize?: string;
	label?: string;
}

const CustomInputComponent = React.forwardRef<HTMLInputElement, any>(
	(props, ref) => {
		const isInvalid = !props.value || !isValidPhoneNumber(props.value);

		return (
			<input
				{...props}
				ref={ref}
				className={`w-full px-3 py-2 bg-transparent focus:outline-none text-black ml-2 ${
					isInvalid ? "border-[#F1F1F1]" : "border-white "
				} border-l-[2px]`}
			/>
		);
	}
);

const PhoneInputComponent = ({
	value,
	setValue,
	color,
	bgColor,
	showLabel = true,
	fontSize,
	label,
}: PhoneInputProps) => {
	return (
		<div className='flex flex-col gap-1'>
			{showLabel && (
				<label
					htmlFor='mobile_number'
					className={`text-[${fontSize ? fontSize : "12"}] pb-1 text-gray_4`}
					style={{ color: color }}
				>
					{label}
				</label>
			)}
			<span
				className={`block ${
					!value || !isValidPhoneNumber(value)
						? bgColor
							? `border-[#F1F1F1]`
							: "border-[#F1F1F1]"
						: "border-[#FFD68F] bg-opacity-10"
				}  w-full p-1 px-3 rounded-full border-[2px] text-gray_4`}
			>
				<PhoneInput
					placeholder='Enter phone number'
					value={value}
					onChange={(val) => {
						setValue(val!);
					}}
					international
					defaultCountry='NG'
					id='mobile_number'
					inputComponent={CustomInputComponent}
				/>
			</span>
		</div>
	);
};

export default PhoneInputComponent;
