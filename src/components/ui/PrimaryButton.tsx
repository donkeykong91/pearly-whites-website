import {ReactNode} from 'react';

const PrimaryButton = ({ children }: {children: ReactNode | string }) => {
    return <button className=' group-hover:bg-bossanova-50 transition w-full text-bossanova-900 rounded-lg bg-purple-300 hover:bg-purple-400 md:px-4 py-1 shadow-purple-300 shadow-lg outline md:hover:outline-bossanova-100 md:hover:text-bossanova-50 md:hover:shadow-bossanova-800 md:hover:drop-shadow-2xl'>{children}</button>
};

export default PrimaryButton;