import {ReactNode} from 'react';

const PrimaryButton = ({ children }: {children: ReactNode | string }) => {
    return <button className='transition w-full text-slate-900 rounded-md bg-purple-400 hover:bg-purple-300 md:px-3 py-2 shadow-purple-300 shadow-lg'>{children}</button>
};

export default PrimaryButton;