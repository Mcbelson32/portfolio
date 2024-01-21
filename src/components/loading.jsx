import React from "react";

const LoadingPage = () => {
	return (
		<div className='flex justify-center items-center h-screen w-screen fixed top-0 left-0 bg-primary z-[99999] dark:bg-secondary dark:text-light'>
			<span className='loading loading-infinity loading-lg scale-[3] text-[100rem] text-purple dark:text-light'></span>
		</div>
	);
};

export default LoadingPage;
