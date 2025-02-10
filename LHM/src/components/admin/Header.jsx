import { BellIcon, UserCircleIcon } from "@heroicons/react/24/outline"

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b-4 border-indigo-600">
      <div className="flex items-center">
        <span className="text-2xl font-semibold text-gray-800">Lecture Hall Dashboard</span>
      </div>
      <div className="flex items-center">
        <button className="flex mx-4 text-gray-600 focus:outline-none">
          <BellIcon className="h-6 w-6" />
        </button>
        <div className="relative">
          <button className="relative z-10 block h-8 w-8 rounded-full overflow-hidden focus:outline-none">
            <UserCircleIcon className="h-full w-full text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

