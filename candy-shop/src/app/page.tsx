"use client";

{/*React component rendered for this route*/}
import Image from "next/image";

import { Lora } from 'next/font/google';

// Configure Lora
const lora = Lora({
  subsets: ['latin'], // Includes characters for English, Swedish (å,ä,ö), etc.
  weight: ['400', '700'], 
  display: 'swap', // Recommended for good performance
});

const displays = [
  { id: 'dis1', name: 'a', image: '/displays/a.png' },
  { id: 'dis2', name: 'b', image: '/displays/b.png' },
  { id: 'dis3', name: 'c', image: '/displays/c.png' },
  { id: 'dis4', name: 'd', image: '/displays/d.png' },
]

const populars = [
  { id: 'p1', name: 'glogg', image: '/populars/glogg.png' },
  { id: 'p2', name: 'lime', image: '/populars/lime.png' },
  { id: 'p3', name: 'choco', image: '/populars/choco.png' },
  { id: 'p4', name: 'hallon', image: '/populars/hallon.png' },
  { id: 'p5', name: 'mint', image: '/populars/mint.png' },
]



export default function Home() {
  const diaplay_positions = ['top-10 left-50',
    'top-60 left-170',
    'top-120 left-60',
    'top-180 left-170',]

  const pro_positions = ['mt-10','mt-15','mt-20','mt-15','mt-10']

  
  return (
    <main className="min-h-screen p-8 bg-stone-180 text-center">
      <div className="relative mb-12 min-h-[1300px]">
        <div className={`absolute top-30 left-170 text-4xl ${lora.className} text-brown-800`}>
        Välkommen!
        </div>
        
        {displays.map((display, index)=> (
            <div key={display.id} className={`absolute ${diaplay_positions[index]}`}>
              <Image
                src={display.image}
                alt={display.name}
                width={400}
                height={500}
                className="rounded-xl shadow-lg object-cover"
              />
            </div>
          )
        )}

        <div className={`absolute top-260 left-65 text-xl ${lora.className} text-brown-500`}>
        Här sker tillverkning och försäljning <br />
        av mathantverk i choklad, <br />
        skapad med passion och kärlek.
        </div>

      </div>

        <div className="flex flex-wrap border-t border-gray-400 justify-center items-start gap-6">
          {populars.map((popular,index)=>(
            <div key={popular.id} className={`cursor-pointer hover:scale-105 transition-transform duration-300 ${pro_positions[index]}`}>
              <Image
                    src={popular.image}
                    alt={popular.name}
                    width={200}
                    height={250}
              />
            </div>
          ))}

        </div>



    </main>
  );
}
