import { ReactNode } from 'react'

const PrimaryButton = ({ children }: { children: ReactNode | string }) => {
  return (
    <button className="group-hover:bg-bossanova-50 text-bossanova-900 md:hover:outline-bossanova-100 md:hover:text-bossanova-50 md:hover:shadow-bossanova-800 w-full rounded-lg bg-purple-300 py-1 shadow-lg shadow-purple-300 outline transition hover:bg-purple-400 md:px-4 md:hover:drop-shadow-2xl">
      {children}
    </button>
  )
}

export default PrimaryButton
