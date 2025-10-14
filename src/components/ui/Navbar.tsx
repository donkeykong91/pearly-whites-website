import PrimaryButton from './PrimaryButton';

const Navbar = () => {
    const ITEMS = ['About', 'Services', 'Gallery', 'Contact'];
    const HOME = 'Evey Hygiene';

    return (
        <nav className='bg-bossanova-200 rounded-md px-2 py-3 flex justify-between'>
            <a href=''>{HOME}</a>
            <ul className='flex justify-evenly gap-12'>
                {ITEMS.map((item,index) => <li key={`${index}-${item}`}><a className='block hover:bg-purple-600' href=''>{item}</a></li>)}
            </ul>
        </nav>
    );
};

export default Navbar;