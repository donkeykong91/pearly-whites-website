import PrimaryButton from './PrimaryButton'

const Navbar = () => {
  const ITEMS = [
    'About',
    'Services',
    'Certifications',
    'Contact',
    'Clinical Skills',
    'Education',
  ]
  const HOME = 'Evey Hygiene'

  // TODO: Fix size at lg for all buttons
  return (
    <nav className="group hover:shadow-bossanova-800 bg-bossanova-200 md:hover:bg-bossanova-100 outline-bossanova-600 space-y-2 rounded-lg px-2 pt-2 pb-2 shadow-lg outline-3 transition md:flex md:justify-between md:space-y-0 md:py-3">
      <button className="group-hover:bg-bossanova-50 md:hover:bg-bossanova-50 w-full rounded-md bg-purple-300 px-3 py-1 outline transition md:w-fit">
        {HOME}
      </button>
      <ul className="flex flex-col gap-2 sm:grid sm:grid-cols-3 md:flex md:flex-row md:justify-evenly md:gap-12 md:self-center">
        {ITEMS.map((item, index) => (
          <li key={`${index}-${item}`}>
            <PrimaryButton>{item}</PrimaryButton>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
