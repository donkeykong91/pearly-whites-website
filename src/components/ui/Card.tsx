const Card = ({ title, details }: { title: string; details: string }) => {
  return (
    <div className="hover:bg-bossanova-50 shadow-bossanova-800 bg-bossanova-100 outline-bossanova-500 text-bossanova-900 rounded-xl shadow-lg outline-3 transition sm:col-[1/2] sm:w-80">
      <header className="border-b-bossanova-500 border-b-2 text-center text-2xl">
        {title}{' '}
      </header>
      <div className="pt-4 md:text-center">
        <article className="px-2">{details}</article>
      </div>
    </div>
  )
}

export default Card
