import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Header() {
    return (
        <header className='bg-white shadow'>
            <nav className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='flex h-16 justify-between items-center'>
                    <div className='flex-shrink-0'>
                        <Image
                            alt="bridge educação logo"
                            className="h-10"
                            height="40"
                            src="/logo.png"
                            style={{
                                aspectRatio: "120/40",
                                objectFit: "cover",
                            }}
                            width="120"
                        />
                    </div>
                    <div className='hidden md:flex space-x-4'>
                        <Link href='/sign-up'>
                            <Button variant='ghost'>
                                Cadastre-se
                            </Button>
                        </Link>
                        <Link href='/sign-in'>
                            <Button className='bg-sky-500 hover:bg-sky-700'>
                                Login
                            </Button>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}