"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calendar,
  Users,
  Edit,
  TrendingUp,
  Shield,
  Zap,
  Star,
  Clock,
  Check,
  ArrowRight,
  Menu,
  X,
  Play,
  MessageCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Hook para efecto typewriting
function useTypewriter(words: string[], speed = 100) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const word = words[currentWordIndex]

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < word.length) {
            setCurrentText(word.slice(0, currentText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 1500)
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentWordIndex((prev) => (prev + 1) % words.length)
          }
        }
      },
      isDeleting ? speed / 2 : speed,
    )

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentWordIndex, words, speed])

  return currentText
}

// WhatsApp Demo Widget Component
function WhatsAppDemo() {
  const [messages, setMessages] = useState([
    { id: 1, text: "¡Hola! 👋 Soy tu asistente de BookingPro", sender: "bot", time: "10:30" },
    { id: 2, text: "¿En qué puedo ayudarte hoy?", sender: "bot", time: "10:30" },
  ])
  const [currentStep, setCurrentStep] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  const demoFlow = [
    {
      user: "Hola, quiero información sobre sus servicios",
      bot: "¡Perfecto! Te ayudo con eso. ¿Qué tipo de servicio te interesa más?",
    },
    {
      user: "Masajes relajantes",
      bot: "Excelente elección 💆‍♀️ Tenemos disponibilidad hoy. ¿Prefieres por la mañana o tarde?",
    },
    { user: "Por la tarde", bot: "Perfecto! Tengo disponible a las 3:00 PM y 5:00 PM. ¿Cuál prefieres?" },
    {
      user: "3:00 PM está bien",
      bot: "¡Genial! 🎉 Te he reservado masaje relajante hoy a las 3:00 PM. ¿Necesitas la dirección?",
    },
  ]

  const simulateConversation = () => {
    if (currentStep >= demoFlow.length) {
      setCurrentStep(0)
      setMessages([
        { id: 1, text: "¡Hola! 👋 Soy tu asistente de BookingPro", sender: "bot", time: "10:30" },
        { id: 2, text: "¿En qué puedo ayudarte hoy?", sender: "bot", time: "10:30" },
      ])
      return
    }

    const step = demoFlow[currentStep]

    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        text: step.user,
        sender: "user",
        time: "10:3" + (1 + currentStep),
      },
    ])

    // Show typing indicator
    setIsTyping(true)

    // Add bot response after delay
    setTimeout(() => {
      setIsTyping(false)
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: step.bot,
          sender: "bot",
          time: "10:3" + (2 + currentStep),
        },
      ])
      setCurrentStep((prev) => prev + 1)
    }, 1500)
  }

  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* WhatsApp Header */}
      <div className="bg-green-600 text-white p-4 flex items-center gap-3">
        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
          <MessageCircle className="h-6 w-6" />
        </div>
        <div>
          <h4 className="font-semibold">BookingPro AI</h4>
          <p className="text-xs opacity-90">En línea</p>
        </div>
      </div>

      {/* Messages */}
      <div className="h-80 overflow-y-auto p-4 bg-gray-50">
        {messages.map((message) => (
          <div key={message.id} className={`mb-3 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-xs px-4 py-2 rounded-lg ${
                message.sender === "user"
                  ? "bg-green-500 text-white rounded-br-none"
                  : "bg-white text-gray-800 rounded-bl-none shadow"
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <p className={`text-xs mt-1 ${message.sender === "user" ? "text-green-100" : "text-gray-500"}`}>
                {message.time}
              </p>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start mb-3">
            <div className="bg-white text-gray-800 rounded-lg rounded-bl-none shadow px-4 py-2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Demo Controls */}
      <div className="p-4 bg-white border-t">
        <Button
          onClick={simulateConversation}
          className="w-full bg-green-600 hover:bg-green-700 text-white"
          disabled={isTyping}
        >
          {currentStep === 0
            ? "Iniciar Demo"
            : currentStep >= demoFlow.length
              ? "Reiniciar Demo"
              : "Continuar Conversación"}
        </Button>
      </div>
    </div>
  )
}

export default function LandingPage() {
  const typewriterText = useTypewriter(
    ["Booking Automatizado", "CRM Inteligente", "Gestión Completa", "Éxito Garantizado"],
    80,
  )

  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="ml-3">
                <span className="text-xl font-bold text-gray-900">BookingPro</span>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="#features" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  Características
                </Link>
                <Link href="#pricing" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  Precios
                </Link>
                <Link href="#testimonials" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  Casos de Éxito
                </Link>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" size="sm">
                Solicitar Demo
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Prueba Gratuita
              </Button>
            </div>

            <div className="md:hidden">
              <div className="relative">
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
                {/* Mobile menu overlay - se puede expandir con estado */}
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 hidden">
                  <Link href="#features" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                    Características
                  </Link>
                  <Link href="#pricing" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                    Precios
                  </Link>
                  <Link href="#testimonials" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                    Casos de Éxito
                  </Link>
                  <div className="border-t border-gray-200 mt-2 pt-2">
                    <div className="px-4 py-2">
                      <Button variant="outline" size="sm" className="w-full mb-2 bg-transparent">
                        Solicitar Demo
                      </Button>
                      <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                        Empezar Ahora
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
                🚀 Plataforma #1 en Booking Automatizado
              </Badge>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
                <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
                  ⚡ Implementación en 5 días
                </Badge>
                <Badge className="bg-violet-100 text-violet-800 hover:bg-violet-100">🎯 ROI Inmediato</Badge>
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">🚀 +250% Reservas</Badge>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Tu Plataforma de{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {typewriterText}
                  <span className="animate-pulse">|</span>
                </span>
                <br />
                Personalizada o Lista para Usar
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-gray-600 max-w-lg">
                <strong>Revoluciona tu negocio en 5 días.</strong> Elige tu camino: Plataforma SaaS White Label
                personalizable o desarrollo 100% custom.
                <span className="text-blue-600 font-semibold"> Booking automatizado + CRM integrado.</span>
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  <Zap className="mr-2 h-5 w-5" />
                  Empezar Ahora
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3 bg-transparent"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Solicitar Demo Personalizada
                </Button>
              </div>

              <div className="mt-6">
                <Button variant="link" className="text-violet-600 hover:text-violet-700 p-0">
                  Cotización Custom →
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-4">Más de 10,000 empresas confían en nosotros</p>
                <div className="flex items-center justify-center lg:justify-start space-x-8 opacity-60">
                  <div className="h-8 w-20 bg-gray-300 rounded"></div>
                  <div className="h-8 w-20 bg-gray-300 rounded"></div>
                  <div className="h-8 w-20 bg-gray-300 rounded"></div>
                  <div className="h-8 w-20 bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Dashboard de BookingPro"
                  width={800}
                  height={600}
                  className="rounded-xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Problema/Solución Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">¿Te Suena Familiar?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los problemas que enfrentan miles de negocios cada día
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-6 border-red-200 bg-red-50">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <X className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Reservas Manuales y Errores Constantes</h3>
              <p className="text-gray-600">
                Llamadas perdidas, dobles reservas, clientes frustrados y pérdida de ingresos por errores humanos.
              </p>
            </Card>

            <Card className="text-center p-6 border-red-200 bg-red-50">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-red-600 transform rotate-180" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pérdida de Clientes Potenciales</h3>
              <p className="text-gray-600">
                Sin seguimiento automático, los leads se pierden y las oportunidades de venta se esfuman.
              </p>
            </Card>

            <Card className="text-center p-6 border-red-200 bg-red-50">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Edit className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Gestión Desorganizada de Contenido</h3>
              <p className="text-gray-600">
                Actualizar precios, servicios y horarios es un proceso lento y propenso a errores.
              </p>
            </Card>
          </div>

          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto">
              <ArrowRight className="h-8 w-8 text-white transform rotate-90" />
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                La Solución Está Aquí
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforma tu negocio con automatización inteligente
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center p-6 border-purple-200 bg-purple-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Edit className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Landing Pages Personalizada</h3>
              <p className="text-gray-600">
                Páginas web optimizadas para conversión que capturan leads y dirigen al booking automáticamente.
              </p>
            </Card>

            {/* Las otras 3 cards existentes */}
            <Card className="text-center p-6 border-emerald-200 bg-emerald-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Booking Automatizado 24/7</h3>
              <p className="text-gray-600">
                Reservas automáticas, confirmaciones instantáneas y cero errores manuales.
              </p>
            </Card>

            <Card className="text-center p-6 border-emerald-200 bg-emerald-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">CRM Inteligente que Captura Todo</h3>
              <p className="text-gray-600">
                Seguimiento automático de leads, historial completo y conversiones optimizadas.
              </p>
            </Card>

            <Card className="text-center p-6 border-green-200 bg-green-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp AI Automatizado</h3>
              <p className="text-gray-600">
                <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">Opcional</span>
                <br />
                Convierte WhatsApp en tu mejor canal de ventas. Califica leads, cierra más negocios y aumenta el valor
                de tus clientes.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Características Principales */}
      <section id="features" className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Funcionalidades que Transforman tu Negocio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre cómo cada característica está diseñada para maximizar tus resultados
            </p>
          </div>

          <Tabs defaultValue="landing" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12 h-auto">
              <TabsTrigger value="landing" className="flex items-center gap-2 p-4">
                <Edit className="h-5 w-5" />
                <span className="font-medium">Landing Pages</span>
              </TabsTrigger>
              <TabsTrigger value="booking" className="flex items-center gap-2 p-4">
                <Calendar className="h-5 w-5" />
                <span className="font-medium">Booking Inteligente</span>
              </TabsTrigger>
              <TabsTrigger value="crm" className="flex items-center gap-2 p-4">
                <Users className="h-5 w-5" />
                <span className="font-medium">CRM Personalizado</span>
              </TabsTrigger>
              <TabsTrigger value="whatsapp" className="flex items-center gap-2 p-4">
                <MessageCircle className="h-5 w-5" />
                <span className="font-medium">WhatsApp AI</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="landing" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Landing Pages que Convierten Visitantes en Clientes
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Páginas web optimizadas específicamente para tu negocio que capturan leads y los dirigen al booking.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Diseño optimizado para conversión</h4>
                        <p className="text-gray-600">Cada elemento diseñado para guiar al usuario hacia la reserva</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Integración directa con booking</h4>
                        <p className="text-gray-600">Flujo perfecto desde landing hasta confirmación de cita</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Responsive y rápida</h4>
                        <p className="text-gray-600">Perfecta en móvil, tablet y desktop con carga ultra rápida</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">SEO optimizada</h4>
                        <p className="text-gray-600">Configurada para aparecer en Google y atraer tráfico orgánico</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-purple-50 rounded-lg">
                    <div className="flex items-center gap-2 text-purple-800">
                      <TrendingUp className="h-5 w-5" />
                      <span className="font-semibold">Impacto Comprobado</span>
                    </div>
                    <p className="text-purple-700 mt-1">
                      <strong>Aumenta conversiones web en 65%</strong> comparado con páginas genéricas
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="Landing Page Personalizada"
                    width={600}
                    height={500}
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="booking" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Sistema de Reservas que Nunca Duerme</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Tu calendario inteligente trabaja 24/7 para capturar cada oportunidad de negocio.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Calendario interactivo en tiempo real</h4>
                        <p className="text-gray-600">Disponibilidad actualizada al instante, sin conflictos</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Confirmación automática vía email/SMS</h4>
                        <p className="text-gray-600">Comunicación instantánea con tus clientes</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Integración con pasarelas de pago</h4>
                        <p className="text-gray-600">Cobra al momento de la reserva</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Gestión de disponibilidad dinámica</h4>
                        <p className="text-gray-600">Ajustes automáticos según demanda y recursos</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-2 text-blue-800">
                      <TrendingUp className="h-5 w-5" />
                      <span className="font-semibold">Impacto Comprobado</span>
                    </div>
                    <p className="text-blue-700 mt-1">
                      <strong>Reduce tiempo de reserva en 80%</strong> y elimina errores manuales completamente
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="Sistema de Booking"
                    width={600}
                    height={500}
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="crm" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 relative">
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="CRM Dashboard"
                    width={600}
                    height={500}
                    className="rounded-xl shadow-lg"
                  />
                </div>

                <div className="order-1 lg:order-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">CRM que Convierte Leads en Clientes Fieles</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Cada interacción cuenta. Nuestro CRM captura, nutre y convierte automáticamente.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Dashboard de leads y conversiones</h4>
                        <p className="text-gray-600">Visualiza tu embudo de ventas en tiempo real</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Historial completo de cada cliente</h4>
                        <p className="text-gray-600">Personaliza cada interacción con datos completos</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Automatización de follow-ups</h4>
                        <p className="text-gray-600">Nunca pierdas una oportunidad de venta</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Segmentación avanzada de clientes</h4>
                        <p className="text-gray-600">Campañas dirigidas para máximo impacto</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-emerald-50 rounded-lg">
                    <div className="flex items-center gap-2 text-emerald-800">
                      <TrendingUp className="h-5 w-5" />
                      <span className="font-semibold">Resultados Garantizados</span>
                    </div>
                    <p className="text-emerald-700 mt-1">
                      <strong>Aumenta retención de clientes 35%</strong> con seguimiento automatizado
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="whatsapp" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">WhatsApp AI Automatizado</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Tu asistente de ventas 24/7. Convierte WhatsApp en tu mejor canal de ventas.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Captura Automática</h4>
                        <p className="text-gray-600">
                          Responde instantáneamente a consultas y captura información de leads 24/7
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Califica Leads</h4>
                        <p className="text-gray-600">
                          IA que identifica leads calificados y los prioriza automáticamente
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Convierte Ventas</h4>
                        <p className="text-gray-600">Guía conversaciones hacia la reserva con scripts inteligentes</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Fideliza Clientes</h4>
                        <p className="text-gray-600">Seguimiento post-venta y campañas de retención automatizadas</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-2 text-green-800 mb-3">
                      <TrendingUp className="h-5 w-5" />
                      <span className="font-semibold">Resultados Comprobados</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-green-600">85%</div>
                        <div className="text-xs text-gray-600">Más Leads Calificados</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-600">60%</div>
                        <div className="text-xs text-gray-600">Mayor Conversión</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-600">24/7</div>
                        <div className="text-xs text-gray-600">Disponibilidad</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <WhatsAppDemo />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Beneficios Tangibles */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Resultados que Puedes Medir</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Métricas reales de clientes que ya transformaron su negocio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 border-blue-200 bg-blue-50">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Más Conversiones</h3>
              <p className="text-gray-600">Proceso de reserva optimizado que convierte más visitantes en clientes</p>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 border-emerald-200 bg-emerald-50">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-emerald-600" />
              </div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">60%</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Menos Tiempo Administrativo</h3>
              <p className="text-gray-600">
                Automatización que libera tu tiempo para enfocarte en hacer crecer el negocio
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 border-violet-200 bg-violet-50">
              <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-violet-600" />
              </div>
              <div className="text-3xl font-bold text-violet-600 mb-2">24/7</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Disponibilidad</h3>
              <p className="text-gray-600">Tu negocio nunca cierra, captura reservas incluso mientras duermes</p>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 border-amber-200 bg-amber-50">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-amber-600" />
              </div>
              <div className="text-3xl font-bold text-amber-600 mb-2">95%</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Satisfacción Cliente</h3>
              <p className="text-gray-600">Experiencia de reserva fluida que encanta a tus clientes</p>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 border-green-200 bg-green-50">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">3x</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Más Bookings</h3>
              <p className="text-gray-600">Sistema optimizado que triplica tu capacidad de reservas</p>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 border-red-200 bg-red-50">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <div className="text-3xl font-bold text-red-600 mb-2">0</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Errores Manuales</h3>
              <p className="text-gray-600">Automatización completa elimina errores humanos y conflictos</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonials" className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Casos de Éxito Reales</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre cómo empresas como la tuya han transformado sus resultados
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <blockquote className="text-gray-700 mb-4">
                "BookingPro transformó completamente nuestro estudio de tatuajes. La landing page personalizada captura
                perfectamente nuestra esencia artística, el sistema de booking elimina las llamadas constantes, y el CRM
                nos ayuda a dar seguimiento a cada cliente. Pasamos de agendar manualmente a tener un sistema que
                funciona 24/7. Nuestras reservas aumentaron 280% en 3 meses."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold text-gray-900">Blue Guzman</div>
                  <div className="text-sm text-gray-600">Propietaria, Inkstinct NYC</div>
                  <div className="text-xs text-blue-600">Implementación completa: 3 semanas</div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <div className="text-sm font-medium text-blue-800">Resultados:</div>
                <div className="text-sm text-blue-700">+280% reservas, sistema 24/7 automatizado</div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-700">10,000+</div>
                <div className="text-sm text-gray-600">Empresas Activas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-700">500K+</div>
                <div className="text-sm text-gray-600">Reservas/Mes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-700">4.9/5</div>
                <div className="text-sm text-gray-600">Calificación</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-700">50+</div>
                <div className="text-sm text-gray-600">Países</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Opciones de Adquisición */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Elige tu Camino al Éxito</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dos opciones poderosas diseñadas para diferentes necesidades y presupuestos
            </p>
          </div>

          <Tabs defaultValue="saas" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12 h-auto">
              <TabsTrigger value="saas" className="flex items-center gap-2 p-6">
                <Zap className="h-5 w-5" />
                <div className="text-left">
                  <div className="font-medium">SaaS Subscription</div>
                  <div className="text-xs text-gray-500">Rápido y escalable</div>
                </div>
              </TabsTrigger>
              <TabsTrigger value="custom" className="flex items-center gap-2 p-6">
                <Shield className="h-5 w-5" />
                <div className="text-left">
                  <div className="font-medium">Custom Implementation</div>
                  <div className="text-xs text-gray-500">Personalizado y único</div>
                </div>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="saas" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge className="mb-4 bg-blue-100 text-blue-800">🚀 Implementación Inmediata</Badge>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Plataforma SaaS White label Lista para Usar</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    La solución perfecta para empresas que quieren resultados inmediatos sin complicaciones técnicas.
                    Diseñamos toda la interfaz web y experiencia usuario.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Check className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <span className="font-semibold">Implementación inmediata (5 días hábiles)</span>
                        <p className="text-sm text-gray-600">
                          Desde registro hasta primera reserva en menos de una semana
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Check className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <span className="font-semibold">Personalizaciones por dashboard</span>
                        <p className="text-sm text-gray-600">Configura colores, logos y funcionalidades sin código</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Check className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <span className="font-semibold">Soporte incluido bajo demanda a través de ticket</span>
                        <p className="text-sm text-gray-600">para resolver cualquier duda</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Check className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <span className="font-semibold">Actualizaciones automáticas</span>
                        <p className="text-sm text-gray-600">Nuevas funcionalidades sin costo adicional</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 flex-1">
                      <Zap className="mr-2 h-5 w-5" />
                      Empezar Ahora
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                    >
                      Ver Precios Detallados
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="SaaS Dashboard"
                    width={600}
                    height={500}
                    className="rounded-xl shadow-lg"
                  />
                  <div className="absolute -top-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold">
                    Listo en 24h
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="custom" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 relative">
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="Custom Development"
                    width={600}
                    height={500}
                    className="rounded-xl shadow-lg"
                  />
                  <div className="absolute -top-4 -right-4 bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold">
                    100% Tuyo
                  </div>
                </div>

                <div className="order-1 lg:order-2">
                  <Badge className="mb-4 bg-emerald-100 text-emerald-800">🎯 Desarrollo Personalizado</Badge>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Desarrollo 100% Personalizado</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Para empresas con necesidades específicas que requieren una solución única y diferenciada.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                        <Check className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div>
                        <span className="font-semibold">Diseño único para tu marca</span>
                        <p className="text-sm text-gray-600">Interfaz completamente personalizada y exclusiva</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                        <Check className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div>
                        <span className="font-semibold">Integraciones específicas</span>
                        <p className="text-sm text-gray-600">Conecta con cualquier sistema existente</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                        <Check className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div>
                        <span className="font-semibold">Ownership completo del código</span>
                        <p className="text-sm text-gray-600">El código fuente es 100% tuyo</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                        <Check className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div>
                        <span className="font-semibold">Control total de features</span>
                        <p className="text-sm text-gray-600">Funcionalidades exactas para tu negocio</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 flex-1">
                      <Shield className="mr-2 h-5 w-5" />
                      Solicitar Cotización
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent"
                    >
                      Agendar Llamada
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Pricing & CTA Final */}
      <section id="pricing" className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Inversión que se Paga Sola</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Elige el plan que mejor se adapte a tu negocio y comienza a ver resultados desde el primer día
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* SaaS Pricing */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8">Planes SaaS</h3>
              <div className="bg-blue-50 p-4 rounded-lg mb-6 text-center">
                <div className="text-lg font-semibold text-blue-800 mb-1">Set Up Inicial</div>
                <div className="text-2xl font-bold text-blue-600">$5,000 USD</div>
                <p className="text-sm text-blue-700">Configuración e implementación completa</p>
              </div>
              <div className="space-y-6">
                <Card className="p-6 border-2 border-blue-200">
                  <div className="text-center mb-6">
                    <h4 className="text-xl font-bold text-gray-900">Starter</h4>
                    <div className="mt-2">
                      <span className="text-3xl font-bold text-blue-600">$199</span>
                      <span className="text-gray-600">/mes</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Perfecto para empezar</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">Hasta 500 reservas/mes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">CRM básico incluido</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">Soporte por email</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Empezar Ahora</Button>
                </Card>

                <Card className="p-6 border-2 border-emerald-200 relative">
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white">
                    Más Popular
                  </Badge>
                  <div className="text-center mb-6">
                    <h4 className="text-xl font-bold text-gray-900">Grow</h4>
                    <div className="mt-2">
                      <span className="text-3xl font-bold text-emerald-600">$299</span>
                      <span className="text-gray-600">/mes</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Para negocios en crecimiento</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">Reservas ilimitadas</span>

                      <span className="text-sm">Reservas ilimitadas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">CRM avanzado + automatización de mensajes al correo</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">Soporte por WhatsApp</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">Implementación inmediata (5 días hábiles)</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Empezar Ahora</Button>
                </Card>

                <Card className="p-6 border-2 border-violet-200">
                  <div className="text-center mb-6">
                    <h4 className="text-xl font-bold text-gray-900">Enterprise</h4>
                    <div className="mt-2">
                      <span className="text-3xl font-bold text-violet-600">Custom</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Para grandes organizaciones</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">Todo de Grow +</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">Multi-ubicación</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">API personalizada</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">Account Manager dedicado</span>
                    </li>
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full border-violet-600 text-violet-600 hover:bg-violet-50 bg-transparent"
                  >
                    Contactar Ventas
                  </Button>
                </Card>

                <Card className="p-6 border-2 border-green-200 bg-green-50">
                  <div className="text-center mb-6">
                    <h4 className="text-xl font-bold text-gray-900">WhatsApp AI</h4>
                    <div className="mt-2">
                      <span className="text-3xl font-bold text-green-600">$2,490</span>
                      <span className="text-gray-600"> USD</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Asistente de ventas automatizado</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">Hasta 500 clientes/mes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">30k interacciones con AI</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">Servidor cloud incluido</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">Mantención $150 USD/mes</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Activar WhatsApp AI
                  </Button>
                </Card>
              </div>
            </div>

            {/* Custom Consultation */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8">Desarrollo Custom</h3>
              <Card className="p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="text-center mb-6">
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">Inversión Personalizada</h4>
                    <p className="text-gray-600">Según tus necesidades específicas</p>
                  </div>

                  <div className="space-y-6 mb-8">
                    <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                      <div className="text-lg font-semibold text-gray-900 mb-2">Cotización Gratuita en 24h</div>
                      <p className="text-sm text-gray-600">Análisis completo de tus necesidades sin compromiso</p>
                    </div>

                    <div className="space-y-4">
                      <h5 className="font-semibold text-gray-900">Incluye:</h5>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-emerald-600" />
                          <span className="text-sm">Análisis de requerimientos</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-emerald-600" />
                          <span className="text-sm">Propuesta técnica detallada</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-emerald-600" />
                          <span className="text-sm">Timeline de desarrollo</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-emerald-600" />
                          <span className="text-sm">Inversión transparente</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <div className="font-semibold text-emerald-800 mb-1">Garantía de Satisfacción</div>
                      <p className="text-sm text-emerald-700">
                        Si no cumplimos tus expectativas, devolvemos tu inversión
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700">
                    <Shield className="mr-2 h-5 w-5" />
                    Solicitar Cotización Gratuita
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Agendar Llamada Estratégica
                  </Button>
                </div>
              </Card>
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">¿Listo para Transformar tu Negocio?</h3>
              <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Únete a más de 10,000 empresas que ya automatizaron sus reservas y triplicaron sus ingresos
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 flex-1 sm:flex-none">
                  <Zap className="mr-2 h-5 w-5" />
                  Empezar Ahora
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 flex-1 sm:flex-none bg-transparent"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Ver Demo en Vivo
                </Button>
              </div>

              <p className="text-sm mt-4 opacity-75">Set up $5,000 USD • Implementación en 5 días • Soporte incluido</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Logo y descripción */}
            <div className="md:col-span-1">
              <div className="flex items-center mb-4">
                <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
                <span className="ml-3 text-xl font-bold">BookingPro</span>
              </div>
              <p className="text-gray-400 mb-6">
                La plataforma de booking más completa del mercado. Automatiza, gestiona y crece tu negocio.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 cursor-pointer">
                  <span className="text-xs">f</span>
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 cursor-pointer">
                  <span className="text-xs">t</span>
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 cursor-pointer">
                  <span className="text-xs">in</span>
                </div>
              </div>
            </div>

            {/* Producto */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Producto</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="#features" className="text-gray-400 hover:text-white transition-colors">
                    Características
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                    Precios
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Demo en Vivo
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Integraciones
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    API
                  </Link>
                </li>
              </ul>
            </div>

            {/* Empresa */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Empresa</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Acerca de
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Carreras
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Prensa
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>

            {/* Soporte */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Soporte</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Centro de Ayuda
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Estado del Sistema
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Documentación
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Comunidad
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">© 2024 BookingPro. Todos los derechos reservados.</p>
              <div className="flex items-center gap-4 text-sm">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacidad
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Términos
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Seguridad
                </Link>
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Shield className="h-4 w-4" />
                <span>SSL Seguro</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Check className="h-4 w-4" />
                <span>GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
