import PrimaryButton from './PrimaryButton';

const Navbar = () => {
    const ITEMS = ['About', 'Services', 'Gallery', 'Contact'];
    const HOME = 'Evey Hygiene';

    return (
        <nav className='bg-bossanova-200 rounded-md md:px-2 md:py-3 md:flex md:justify-between'>
            <a href=''>{HOME}</a>
            <ul className='flex flex-col gap-2 md:flex-row md:justify-evenly md:gap-12'>
                {ITEMS.map((item,index) => <li key={`${index}-${item}`}><PrimaryButton>{item}</PrimaryButton></li>)}
            </ul>
        </nav>
    );
};

export default Navbar;