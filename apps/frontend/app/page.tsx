import { Icons } from '@/components/Icons'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Header from '@/components/header'
import { buttonVariants } from '@/components/ui/button'
import { ArrowRight, Check, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <div className='bg-slate-50 grainy-light'>
            <Header />
            <section>
                <MaxWidthWrapper className='pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52'>
                    <div className='col-span-2 px-6 lg:px-0 lg:pt-4'>
                        <div className='relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start'>
                            <div className='absolute w-28 left-0 -top-20 hidden lg:block'>
                                <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28' />
                            </div>
                            <h1 className='relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl'>
                                Bem-vindo à nossa{' '}
                                <span className='bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text px-2'>Plataforma de Estudos</span>
                            </h1>
                            <p className='mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap'>
                                Aprenda com tutores que ainda são universitários. Nosso objetivo é ajudar{' '}
                                <span className='font-semibold'>alunos</span> a explorar diferentes profissões e
                                entender melhor o futuro que os aguarda. Aqui, você não apenas aprenderá matérias escolares, mas também
                                terá uma visão prática de diversas carreiras.
                            </p>

                            <ul className='mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start'>
                                <div className='space-y-2'>
                                    <li className='flex gap-1.5 items-center text-left'>
                                        <Check className='h-5 w-5 shrink-0 text-sky-500' />
                                        Aulas personalizadas de alta qualidade
                                    </li>
                                    <li className='flex gap-1.5 items-center text-left'>
                                        <Check className='h-5 w-5 shrink-0 text-sky-500' />
                                        Tutores que são estudantes universitários
                                    </li>
                                    <li className='flex gap-1.5 items-center text-left'>
                                        <Check className='h-5 w-5 shrink-0 text-sky-500' />
                                        Exploração de várias carreiras
                                    </li>
                                </div>
                            </ul>

                            <div className='mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5'>
                                <div className='flex -space-x-4'>
                                    <Image
                                        className='inline-block rounded-full ring-1 ring-slate-100'
                                        width={10}
                                        height={10}
                                        src='/users/user-1.png'
                                        alt='tutor universitário'
                                    />
                                    <Image
                                        className='inline-block rounded-full ring-2 ring-slate-100'
                                        height={10}
                                        width={10}
                                        src='/users/user-2.png'
                                        alt='tutor universitário'
                                    />
                                    <Image
                                        className='inline-block rounded-full ring-2 ring-slate-100'
                                        height={10}
                                        width={10}
                                        src='/users/user-3.png'
                                        alt='tutor universitário'
                                    />
                                    <Image
                                        className='inline-block rounded-full ring-2 ring-slate-100'
                                        height={10}
                                        width={10}
                                        src='/users/user-4.jpg'
                                        alt='tutor universitário'
                                    />
                                    <Image
                                        className='inline-block rounded-full ring-2 ring-slate-100'
                                        height={10}
                                        width={10}
                                        src='/users/user-5.jpg'
                                        alt='tutor universitário'
                                    />
                                </div>

                                <div className='flex flex-col justify-between items-center sm:items-start'>
                                    <div className='flex gap-0.5'>
                                        <Star className='h-4 w-4 text-sky-500 fill-sky-500' />
                                        <Star className='h-4 w-4 text-sky-500 fill-sky-500' />
                                        <Star className='h-4 w-4 text-sky-500 fill-sky-500' />
                                        <Star className='h-4 w-4 text-sky-500 fill-sky-500' />
                                        <Star className='h-4 w-4 text-sky-500 fill-sky-500' />
                                    </div>

                                    <p>
                                        <span className='font-semibold'>1.250</span> usuários satisfeitos
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit'>
                        <Image src="/brain.png" height={2000} width={2000} alt="cérebro" />
                    </div>
                </MaxWidthWrapper>
            </section>

            <section className='bg-slate-100 grainy-dark py-24'>
                <MaxWidthWrapper className='flex flex-col items-center gap-16 sm:gap-32'>
                    <div className='flex flex-col lg:flex-row items-center gap-4 sm:gap-6'>
                        <h2 className='order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900'>
                            O que nossos{' '}
                            <span className='relative px-2'>
                                alunos{' '}
                                <Icons.underline className='hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-sky-500 ' />
                            </span>{' '}
                            dizem
                        </h2>
                    </div>

                    <div className='mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16'>
                        <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20'>
                            <div className='flex gap-0.5 mb-2'>
                                <Star className='h-5 w-5 text-sky-500 fill-sky-500' />
                                <Star className='h-5 w-5 text-sky-500 fill-sky-500' />
                                <Star className='h-5 w-5 text-sky-500 fill-sky-500' />
                                <Star className='h-5 w-5 text-sky-500 fill-sky-500' />
                                <Star className='h-5 w-5 text-sky-500 fill-sky-500' />
                            </div>
                            <div className='text-lg leading-8'>
                                <p>
                                &quot;O tutor foi super gentil e paciente. Eu aprendi muito sobre as diferentes profissões e{' '}
                                    <span className='p-0.5 bg-slate-800 text-white'>
                                        agora eu sei mais sobre o que quero ser no futuro
                                    </span>. Recomendo muito a plataforma!&quot;
                                </p>
                            </div>
                            <div className='flex gap-4 mt-2'>
                                <Image
                                    className='rounded-full object-cover'
                                    height={12}
                                    width={12}
                                    src='/users/user-1.png'
                                    alt='aluno'
                                />
                                <div className='flex flex-col'>
                                    <p className='font-semibold'>Jonathan</p>
                                    <div className='flex gap-1.5 items-center text-zinc-600'>
                                        <Check className='h-4 w-4 stroke-[3px] text-sky-500' />
                                        <p className='text-sm'>Aluno verificado</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20'>
                            <div className='flex gap-0.5 mb-2'>
                                <Star className='h-5 w-5 text-sky-500 fill-sky-500' />
                                <Star className='h-5 w-5 text-sky-500 fill-sky-500' />
                                <Star className='h-5 w-5 text-sky-500 fill-sky-500' />
                                <Star className='h-5 w-5 text-sky-500 fill-sky-500' />
                                <Star className='h-5 w-5 text-sky-500 fill-sky-500' />
                            </div>
                            <div className='text-lg leading-8'>
                                <p>
                                &quot;Eu adorei as aulas sobre carreiras. Os tutores são estudantes universitários e{' '}
                                    <span className='p-0.5 bg-slate-800 text-white'>
                                        sabem exatamente o que eu estou passando
                                    </span>. Eles me ajudaram muito a escolher minha futura profissão.&quot;
                                </p>
                            </div>
                            <div className='flex gap-4 mt-2'>
                                <Image
                                    className='rounded-full object-cover'
                                    width={12}
                                    height={12}
                                    src='/users/user-4.jpg'
                                    alt='aluno'
                                />
                                <div className='flex flex-col'>
                                    <p className='font-semibold'>Josh</p>
                                    <div className='flex gap-1.5 items-center text-zinc-600'>
                                        <Check className='h-4 w-4 stroke-[3px] text-sky-500' />
                                        <p className='text-sm'>Aluno verificado</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>

            <section>
                <MaxWidthWrapper className='py-24'>
                    <div className='mb-12 px-6 lg:px-8'>
                        <div className='mx-auto max-w-2xl sm:text-center'>
                            <h2 className='order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900'>
                                Comece a aprender com seus{' '}
                                <span className='relative px-2 bg-sky-500 text-white'>
                                    tutores universitários
                                </span>{' '}
                                agora
                            </h2>
                        </div>
                    </div>

                    <ul className='mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit'>
                        <li className='w-fit'>
                            <Check className='h-5 w-5 text-sky-500 inline mr-1.5' />
                            Aulas personalizadas
                        </li>
                        <li className='w-fit'>
                            <Check className='h-5 w-5 text-sky-500 inline mr-1.5' />
                            Tutor universitário dedicado
                        </li>
                        <li className='w-fit'>
                            <Check className='h-5 w-5 text-sky-500 inline mr-1.5' />
                            Exploração de diversas profissões
                        </li>
                        <li className='w-fit'>
                            <Check className='h-5 w-5 text-sky-500 inline mr-1.5' />
                            Garantia de aprendizado
                        </li>

                        <div className='flex justify-center'>
                            <Link
                                className={buttonVariants({
                                    size: 'lg',
                                    className: 'mx-auto mt-8',
                                })}
                                href='/configure/upload'>
                                Avance para seu futuro agora <ArrowRight className='h-4 w-4 ml-1.5' />
                            </Link>
                        </div>
                    </ul>
                </MaxWidthWrapper>
            </section>
        </div>

    );
}