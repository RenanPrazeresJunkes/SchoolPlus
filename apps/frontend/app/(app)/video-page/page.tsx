import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import SlackVideoContent from "@/components/slack-video-content"

export default function VideoPage() {
    return (
        <>
            <header className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
                <nav className="flex items-center gap-6">
                    <Link className="flex items-center gap-2 text-lg font-semibold" href="/dashboard">
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
                    </Link>
                    <div className="hidden md:flex items-center gap-6 text-sm font-medium">
                        <h2 className="text-gray-500">
                            Introdução a programação
                        </h2>
                    </div>
                </nav>
                <div className="flex items-center gap-2">
                    <Button className="bg-[#0085FF] text-gray" variant="secondary">
                        Fale com o professor +
                    </Button>
                    <Button variant="secondary">
                        Voltar para o início
                    </Button>

                </div>
            </header>
            <div className="grid grid-cols-[1fr_300px] gap-6 h-full">
                <div className="flex flex-col">
                    <div className="relative aspect-video overflow-hidden rounded-lg">
                        <video width="1200" height="970" controls preload="none">
                            <source src="videos/video.mp4" type="video/mp4" />
                            <track
                                src="videos/video.mp4"
                                kind="subtitles"
                                srcLang="en"
                                label="English"
                            />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="mt-4 grid gap-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-semibold m-3">
                                Descrição aula
                            </h2>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                            <p>
                                Nessa aula iremos aprender os princípios da programação orientada a objeto.
                            </p>
                        </div>
                    </div>
                </div>
                <SlackVideoContent />
            </div>
        </>
    )
}