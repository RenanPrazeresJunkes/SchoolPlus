import Link from "next/link"
import { Progress } from "@/components/ui/progress"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function InProgressCourses() {
  return (
      <main>
        <section className="py-12 md:py-16 lg:py-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">Vamos voltar a <span className="text-sky-500">aprender!</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <Card>
                <div className="flex items-center gap-4">
                  <Image
                    alt="Course Image"
                    className="rounded-lg"
                    height={150}
                    src="/schools/cesusc.png"
                    style={{
                      aspectRatio: "200/150",
                      objectFit: "cover",
                    }}
                    width={200}
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">Introdução a programação</h3>
                    <Progress className="mb-2" value={60} />
                    <p className="text-gray-500">60% Completo</p>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="flex items-center gap-4">
                  <Image
                    alt="Course Image"
                    className="rounded-lg"
                    height={150}
                    src="/schools/estacio.png"
                    style={{
                      aspectRatio: "200/150",
                      objectFit: "cover",
                    }}
                    width={200}
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">Fundamentos da programação Web</h3>
                    <Progress className="mb-2" value={80} />
                    <p className="text-gray-500">80% Completo</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
  )
}