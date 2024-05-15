import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
    return (
        <header className='bg-white shadow'>
            <nav className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='flex h-16 justify-between items-center'>
                    <div className='flex-shrink-0'>
                        <h1 className='text-2xl font-bold text-blackS'>
                            Bridge
                            <span className='bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text'>
                                Education
                            </span>
                        </h1>
                    </div>
                    <div className='hidden md:flex space-x-4'>
                        <Link href='/sign-in'>
                            <Button variant='outline'>
                                Login
                            </Button>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}