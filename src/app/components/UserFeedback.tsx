import { Inter_Tight } from "next/font/google";
const inter = Inter_Tight({ subsets: ["latin"] });
const UserFeedback = () => {
  return (
    <section className={`${inter.className} flex flex-col w-full h-[80vh] items-center justify-center gap-5`}>
        <div className="text-[#2a254b] text-5xl text-center mb-4">
            Join the club and get benefits
        </div>
        <p className="text-[#2a254b] text-lg text-center mb-6 max-w-[80vw] md:max-w-[50vw]">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
        </p>
        <div className="input-cont flex justify-between max-w-md mx-auto w-full px-4">
            <input 
                type="text" 
                placeholder="your@gmail.com"
                className="flex-1 mr-2 p-3 border-none outline-none bg-white placeholder-indigo-300"
            />
            <button className="bg-[#2a254b] text-zinc-200 px-6 py-3 border-none">
                Sign Up
            </button>
        </div>
    </section>
  )
}

export default UserFeedback