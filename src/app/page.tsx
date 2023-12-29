import Image from 'next/image'

import Logo from "../assets/SKYTOPIAlogo1.png"

export default function Home() {
    return (
        <main className="bg-[url('https://media.discordapp.net/attachments/886030285874003978/1190382496718794822/finally-14.png?ex=65a19917&is=658f2417&hm=b639e847f5637e7073655b7924511890484e8f0632a618339013adf1e7c3681e&=&format=webp&quality=lossless&width=3033&height=1705')] h-screen bg-cover bg-center flex flex-col items-center justify-center">
            <div className="mb-4">
                {/* Replace 'path_to_your_logo.png' with your actual logo image path */}
                <Image src={Logo} alt="Logo" width={400} height={400} />
            </div>

            <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                <a href="https://discord.gg/hqsSBhMzpr">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded">
                        Discord
                    </button>
                </a>
                <a href="https://store.skytopia.org">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-5 rounded">
                        Store
                    </button>
                </a>
            </div>
        </main>
    );
}