import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="flex items-center justify-between p-4 bg-white">
            <div className="mr-4">
                <Image 
                src="/profile.jpg"
                alt="Profile Picture"
                width={100}
                height={100}
                className="rounded-full"
                ></Image>  
            </div>
            <nav className="space-x-2">
                <Link href="/">
                    <span className="text-blue-500 text-lg hover:underline">Home</span>
                </Link>
            </nav>
            </header>
    )
}
export default Header