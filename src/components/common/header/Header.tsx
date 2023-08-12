import Image from "next/image";

import {Logout} from "@/components/app/authentication/Logout";

export const Header = () => {
	return (
		<header className="u-width-full-line u-flex u-cross-center u-main-space-between u-padding-block-end-32 u-position-sticky">
        <h1 className="u-flex u-cross-center">
          <Image width={60} height={60} src="https://appwrite.io/images-ee/press/square-logo-pink.svg" alt="Workshop logo" />
          <span className="eyebrow-heading-1 heading-level-1 u-color-text-pink u-padding-inline-8">Appwrite Workshop</span>
        </h1>
        <Logout />
		</header>
	);
};
