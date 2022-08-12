import Image from "next/image";
import { ReactIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";

function Header() {
  return (
    <header>
        {/* Top Nav */}
        <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
            <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                <Image 
                    src="http://links.papareact.com/f90"
                    width={150}
                    height={40}
                    objectFit="contain"
                    className="cursor-pointer"
                />
            </div>

            {/* Search Bar */}
            <div className="bg-yellow-400">
                <input type="text" />
                <SearchIcon className="h-12 p-4"/>
            </div>

        </div>
        {/* Bottom Nav */}
        <div>

        </div>
    </header>
  )
}

export default Header