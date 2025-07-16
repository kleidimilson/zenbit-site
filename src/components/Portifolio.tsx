"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"

interface Project {
  id: number
  title: string
  client: string
  description: string
  image: string
  technologies: string[]
  category: "web" | "mobile" | "desktop" | "consultoria"
  liveUrl?: string
  githubUrl?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Aplicativo SEI",
    client: "Syslae solutions",
    description:
      "O SEI é uma ferramenta que permite a produção, edição, assinatura e trâmite de documentos ",
    image: "https://play-lh.googleusercontent.com/Rv1-pMlfGQm2GNPo7sPPg2LnNntzhlbNeIsTZrBFs2veVd1Eyvp7Q_et7dQ64AP8SHbJ=w5120-h2880-rw",
    technologies: ["React Native", "Laravel", "PostgreSQL", "TypeScript", "Expo"],
    category: "mobile",
    liveUrl: "https://play.google.com/store/apps/details?id=br.gov.pi.seiapp&hl=pt_BR",
    githubUrl: "",
  },
  {
    id: 2,
    title: "Digital Trânsito",
    client: "Syslae solutions",
    description:
      "O Digital Trânsito é a ferramenta essencial para agentes de trânsito simplificarem o registro de acidentes. Capture detalhes, fotos da cena, utilize mapas para precisão na localização",
    image: "https://play-lh.googleusercontent.com/_5lQ-eQAc2rWM0K6pFVaNR6mQTQRSoXLzM4qlLdYOMA0es5iHTuQDM8UvzgYdZiT-G9h=w5120-h2880-rw",
    technologies: ["React Native", "expo", "Bluetooth", "Watermelon"],
    category: "mobile",
    liveUrl: "https://play.google.com/store/apps/details?id=com.syslae.transitodigital&hl=pt_BR",
  },

  {
    id: 2,
    title: "Conecta",
    client: "Servfaz",
    description:
      "O app Conecta Notificações foi desenvolvido para facilitar a comunicação entre o sistema Conecta e seus usuários. Com ele, você recebe notificações em tempo real sobre atualizações, alertas e comunicados importantes diretamente no seu dispositivo móvel.",
    image: "https://play-lh.googleusercontent.com/vBKBTkfJ3xgN69UpJgKzzf4VLyvM9PBDH5l0b4WdztB3AI4u6neKamZ4fK41zWA_289r=w5120-h2880-rw",
    technologies: ["React Native", "Expo", "Node", "Expo notifications", "Zustand"],
    category: "mobile",
    liveUrl: "https://play.google.com/store/apps/details?id=servfaz.apps",
  },

  {
    id: 3,
    title: "SESI e SENAI",
    client: "FIEPI",
    description:
      "Atualizações no Site de transparencia SESI e SENAI",
    image: "data:image/png;base64,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",
    technologies: ["Laravel", "PHP"],
    category: "web",
    liveUrl: "https://play.google.com/store/apps/details?id=servfaz.apps",
  },
  
  
  
]

const categories = [
  { key: "all", label: "Todos os Projetos" },
  { key: "web", label: "Aplicações Web" },
  { key: "mobile", label: "Apps Mobile" },
]

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [currentSlide, setCurrentSlide] = useState(0)

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(filteredProjects.length / 3))
  }

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + Math.ceil(filteredProjects.length / 3)) % Math.ceil(filteredProjects.length / 3),
    )
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      web: "bg-blue-100 text-blue-800",
      mobile: "bg-green-100 text-green-800",
      desktop: "bg-purple-100 text-purple-800",
      consultoria: "bg-orange-100 text-orange-800",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
                Alguns
                <span className="mx-2 bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Trabalhos{' '}
                </span>
              </h2>
          <p className="text-xl mt-4 text-muted-foreground max-w-3xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos para nossos clientes. Cada solução é única e personalizada
            para atender às necessidades específicas de cada negócio.
          </p>
        </div>

        {/* Category Filter */}
        
       

        {/* Projects Grid */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(filteredProjects.length / 3) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.slice(slideIndex * 3, slideIndex * 3 + 3).map((project) => (
                      <div
                        key={project.id}
                        className="bg-muted/50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                      >
                        <div className="relative">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                          />
                          <div className="absolute top-4 right-4">
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(project.category)}`}
                            >
                              {categories.find((cat) => cat.key === project.category)?.label}
                            </span>
                          </div>
                        </div>

                        <div className="p-6">
                          <div className="mb-2">
                            <h3 className="text-xl font-bold text-gray-900 mb-1">{project.title}</h3>
                            <p className="text-[#52B357] font-semibold">{project.client}</p>
                          </div>

                          <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>

                          <div className="mb-4">
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, index) => (
                                <span key={index} className="px-2 py-1 bg-[#CD4D2E] text-black text-sm rounded-md">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="flex gap-3">
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground  rounded-lg hover:bg-[#45a049] transition-colors"
                              >
                                <ExternalLink size={16} />
                                Ver Projeto
                              </a>
                            )}
                            
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {Math.ceil(filteredProjects.length / 3) > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft size={24} className="text-gray-600" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
              >
                <ChevronRight size={24} className="text-gray-600" />
              </button>
            </>
          )}
        </div>

        {/* Slide Indicators */}
        {Math.ceil(filteredProjects.length / 3) > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(filteredProjects.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? "bg-[#52B357]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        )}

       
      </div>
    </section>
  )
}
