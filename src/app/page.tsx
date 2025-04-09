import Image from "next/image"
import Topbar from "./components/home/Topbar"
import Header from "./components/home/Header"

export default function Home() {
  return (
    <div className="h-screen bg-black text-white overflow-auto">
      <Topbar />
      <Header />
      <main className="w-[90vw] mx-auto px-4 flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 z-10">
          <h1 className="text-xl md:text-5xl font-bold mb-1 text-center">
            Want to Turn Social Media Into a Profitable Career?
          </h1>
          <h2 className="text-xl text-center md:text-3x mb-6 font-bold text-[#00E7F9] text-shadow-lg text-shadow-[#FC004E]">
            Discover your way to success with Fametonic:
          </h2>
          <div className="space-y-3 mb-8 text-sm">
            <div className="flex items-start">
              <span className="text-[#00e7f9] mr-2">✨</span>
              <p>Start growing your influence right away—no waiting required!</p>
            </div>
            <div className="flex items-start">
              <span className="text-[#00e7f9] mr-2">✨</span>
              <p>Create viral TikToks and Reels step by step with easy-to-follow lessons</p>
            </div>
            <div className="flex items-start">
              <span className="text-[#00e7f9] mr-2">✨</span>
              <p>Use a Personal AI Worker to boost your content</p>
            </div>
            <div className="flex items-start">
              <span className="text-[#00e7f9] mr-2">✨</span>
              <p>Learn from expert-led courses designed for aspiring influencers</p>
            </div>
          </div>
          <div className="text-xs text-[#a9a9a9] text-center space-y-4 mb-8">
            <p>
              By clicking &quot;Get Started&quot;, you agree with Terms and Conditions, Privacy Policy, Subscription Terms
            </p>
            <p>Fametonic 2025 ©All Rights Reserved.</p>
          </div>
          <div className="space-y-2">
            <button className="bg-[#fc004e] py-3 px-8 rounded-md shadow-md shadow-gray-50 font-bold flex items-center justify-center w-full md:w-auto">
              GET STARTED <span className="ml-2">›</span>
            </button>
            <p className="text-center text-xs md:text-left text-[#a9a9a9]">1-minute quiz for personalized insights</p>
          </div>
        </div>
        <div className="w-full -mt-8 md:w-1/2 relative">
          <div className="relative z-10">
            <Image
              src="/hero-image.png"
              alt="Fametonic App Dashboard"
              width={800}
              height={800}
              className="object-contain mx-auto"
            />
          </div>
        </div>
      </main>
      <footer className="container mx-auto px-4 py-6 text-xs text-[#a9a9a9] hidden">
        <p>Fametonic 2025 ©All Rights Reserved.</p>
        <p className="mb-2 text-xs text-[#a9a9a9]">
          By clicking &quot;Get Started&quot;, you agree with Terms and Conditions, Privacy Policy, Subscription Terms
        </p>
      </footer>
    </div>
  )
}
