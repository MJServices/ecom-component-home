import Image from 'next/image';
import {Inter_Tight} from 'next/font/google'

const inter = Inter_Tight({ subsets: ['latin'] })

export default function Hero() {
  return (
    <section className={`${inter.className} flex flex-col sm:flex-row bg-[#2a254b] w-screen h-auto text-zinc-200 px-[32px] pt-[16px] pb-[16px] md:pl-5 md:bg-[#fff] md:max-h-[80vh] md:pr-24 mt-10`}>
      <section className="md:bg-[#2a254b] md:max-w-[60%] md:px-[80px] md:py-[60px] flex flex-col md:gap-[14vh] gap-10">
        <div className="part-1 md:max-w-[70%] flex flex-col gap-7">
          <p className="text-2xl font-thin md:text-4xl">
            The furniture brand for the future, with timeless designs
          </p>
          <button className="w-[40%] bg-[#495565] py-4 hidden md:block">
            View collection
          </button>
        </div>

        <div className="part-2 flex flex-col gap-[20px] text-[13px] md:text-[20px] font-thin">
          <p>
            A new era in eco friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors and a beautiful way to
            display things digitally using modern web technologies.
          </p>
          <button className="w-full bg-[#495565] py-3 md:hidden">
            View collection
          </button>
        </div>
      </section>
      <section className="hidden md:block">
        <Image
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/2258083/pexels-photo-2258083.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Furniture"
          width={600}
          height={400}
        />
      </section>
    </section>
  );
}