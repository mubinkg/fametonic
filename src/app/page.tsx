import Image from "next/image"
import Link from "next/link"
import Logo from "./components/icons/Logo"

export default function Home() {
  return (
    <div className="h-screen bg-black text-white overflow-y-auto lg:overflow-hidden">
      <div className="bg-gradient-to-r from-[#fc004e] to-[#00e7f9] py-4 px-4 text-center">
        <p className="text-sm md:text-base font-medium">
          <span className="inline-block mr-2">🚀</span>
          <span className="text-[#00e7f9] font-bold">FRESH BEGINNINGS SALE:</span> Extra 25% OFF, Limited Spots - start
          your journey today!
        </p>
      </div>
      <header className="container mx-auto px-4 py-6 flex justify-between items-start">
        <div className="w-40 relative">
          <Logo />
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link href="#" className="text-[#ababab] hover:text-white transition">
            About us
          </Link>
          <Link href="#" className="text-[#ababab] hover:text-white transition">
            Contact
          </Link>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-12 md:py-10 flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Want to Turn Social Media Into a Profitable Career?
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-[#00e7f9] to-[#fc004e] text-transparent bg-clip-text">
            Discover your way to success with Fametonic:
          </h2>
          <div className="space-y-4 mb-8">
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

          <div className="space-y-4">
            <button className="bg-[#fc004e] hover:bg-[#d4003f] text-white font-bold py-3 px-8 rounded-full flex items-center justify-center transition-all w-full md:w-auto">
              GET STARTED <span className="ml-2">›</span>
            </button>
            <p className="text-sm text-center md:text-left text-[#a9a9a9]">1-minute quiz for personalized insights</p>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="relative z-10">
            <Image
              src="/hero-image.png"
              alt="Fametonic App Dashboard"
              width={600}
              height={300}
              className="object-contain mx-auto"
            />
          </div>
        </div>
      </main>
      <footer className="container mx-auto px-4 py-6 text-xs text-[#a9a9a9]">
        <p className="mb-2">
          By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms
        </p>
        <p>Fametonic 2025 ©All Rights Reserved.</p>
      </footer>
    </div>
  )
}
