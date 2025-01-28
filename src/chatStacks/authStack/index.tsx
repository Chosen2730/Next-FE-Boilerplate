import { AuthStackInterface } from "@/app";
import React, { useState } from "react";
import Signup from "./signup";
import Login from "./login";
import OtpInput from "./otpInput";
import ResetPassword from "./resetPassword";
import AuthSuccess from "./authSuccess";
import ForgotPassword from "./forgotPassword";

const AuthStack = () => {
	const [authScreen, setAuthScreen] = useState<AuthStackInterface>("signup");
	return (
		<div>
			{authScreen === "login" && <Login />}
			{authScreen === "signup" && <Signup setStack={setAuthScreen} />}
			{authScreen === "otp" && <OtpInput />}
			{authScreen === "forgotPassword" && <ForgotPassword />}
			{authScreen === "resetPassword" && <ResetPassword />}
			{authScreen === "resetSuccess" && <AuthSuccess />}
		</div>
	);
};

export default AuthStack;
