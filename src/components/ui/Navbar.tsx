import PrimaryButton from './PrimaryButton';

const Navbar = () => {
    const ITEMS = ['About', 'Services', 'Certifications', 'Contact', 'Clinical Skills', 'Education'];
    const HOME = 'Evey Hygiene';

    return (
        <nav className='group transition shadow-lg hover:shadow-bossanova-800 bg-bossanova-200 md:hover:bg-bossanova-100 rounded-lg md:px-2 md:py-3 md:flex md:justify-between outline-3 outline-bossanova-600'>
            <button className='group-hover:bg-bossanova-50 bg-purple-300 outline py-1 px-3 rounded-md md:hover:bg-bossanova-50 transition'  >{HOME}</button>
            <ul className='flex flex-col gap-2 md:flex-row md:justify-evenly md:gap-12 md:self-center'>
                {ITEMS.map((item,index) => <li key={`${index}-${item}`}><PrimaryButton>{item}</PrimaryButton></li>)}
            </ul>
        </nav>
    );
};

export default Navbar;