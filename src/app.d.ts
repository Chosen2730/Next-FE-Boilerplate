import { Dispatch, SetStateAction } from "react";
interface UserProps {
	email?: string;
	first_name?: string;
	last_name?: string;
	phone_number?: string | null;
	profile_url?: string | null;
	role?: string;
	state?: string | null;
	user_id?: string;
}

interface ChatComponentsInterface {
	isExpanded: boolean;
	isMobile: boolean;
}

interface ChatMessagesComponentProps extends ChatComponentsInterface {
	setIsExpanded: Dispatch<SetStateAction<boolean>>;
}

interface ChatResponseCompProps extends ChatComponentsInterface {
	toggleMobileView: () => void;
}
type AuthStackInterface =
	| "signup"
	| "login"
	| "forgotPassword"
	| "otp"
	| "resetPassword"
	| "resetSuccess";

interface AuthStackSlidesInterface {
	setStack: Dispatch<SetStateAction<AuthStackInterface>>;
}
