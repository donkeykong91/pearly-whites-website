const Card = ({ title, details }: {title: string, details: string}) => {

   return (
      <div className='hover:bg-bossanova-50 shadow-bossanova-800 shadow-lg bg-bossanova-100 sm:max-w md:h-90 md:w-80 outline-3 outline-bossanova-500 rounded-xl text-bossanova-900'>
          <header className='border-b-2 border-b-bossanova-500 text-center text-2xl'>{title} </header>
          <div className='pt-4 md:text-center'>
              <article>
                  {details}
              </article>
          </div>
      </div>
   );
}

export default Card;