import Image from "next/image"
import Link from "next/link"

export default function Catalog() {
    return (
        <main className="py-12 md:py-16 lg:py-24">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">Outras Instituições</h2>
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="aspect-w-16 aspect-h-9">
                                <Image alt="School Image" className="w-full h-full object-cover" src="/schools/cesusc.png" width={250} height={250} />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-bold mb-2">Faculdade Cesusc</h3>
                                <p className="text-gray-500 mb-4">Análise e Desenvolvimento de Sistemas</p>
                                <p className="text-gray-500 mb-4">Pós-graduações em tecnologia</p>
                                <Link
                                    className="inline-flex items-center justify-center px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                    href="#"
                                >
                                    Visualizar
                                </Link>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="aspect-w-16 aspect-h-9">
                                <Image alt="School Image" className="w-full h-full object-cover" src="/schools/ufsc.png" width={250} height={250} />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-bold mb-2">Universidade Federal de Santa Catarina</h3>
                                <p className="text-gray-500 mb-4">Sistemas de Informação</p>
                                <p className="text-gray-500 mb-4">Ciencia da Computação</p>
                                <Link
                                    className="inline-flex items-center justify-center px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                    href="#"
                                >
                                    Visualizar
                                </Link>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="aspect-w-16 aspect-h-9">
                                <Image alt="School Image" className="w-full h-full object-cover" src="/schools/uffs.png" width={250} height={250} />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-bold mb-2">Universidade Federal da Fronteira Sul</h3>
                                <p className="text-gray-500 mb-4">Sistemas de Informação</p>
                                <p className="text-gray-500 mb-4">Engenharia de Software</p>
                                <Link
                                    className="inline-flex items-center justify-center px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                    href="#"
                                >
                                    Visualizar
                                </Link>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="aspect-w-16 aspect-h-9">
                                <Image alt="School Image" className="w-full h-full object-cover" src="/schools/udesc.png" width={250} height={250} />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-bold mb-2">Universidade do Estado de Santa Catarina</h3>
                                <p className="text-gray-500 mb-4">Sistemas de Informação</p>
                                <p className="text-gray-500 mb-4">Ciência da Computação</p>
                                <Link
                                    className="inline-flex items-center justify-center px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                    href="#"
                                >
                                    Visualizar
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}