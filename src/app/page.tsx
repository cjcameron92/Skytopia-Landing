import Image from 'next/image'

import Logo from "../assets/SKYTOPIAlogo1.png"

export default function Home() {
    return (
        <main className="bg-[url('https://media.discordapp.net/attachments/886030285874003978/1190382043650068670/finally-17.png?ex=65a198ab&is=658f23ab&hm=3bc64ab14bf56ca32af91d49ce228e6208f7796d33b2b401f5072c1d03e7ac92&=&format=webp&quality=lossless&width=3033&height=1705')] h-screen bg-cover bg-center flex flex-col items-center justify-center">
            {/*<div className="mb-4">*/}
            {/*    /!* Replace 'path_to_your_logo.png' with your actual logo image path *!/*/}
            {/*    <Image src={Logo} alt="Logo" width={200} height={200} />*/}
            {/*</div>*/}

            <div className="flex flex-row items-center space-x-8 mt-64">
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