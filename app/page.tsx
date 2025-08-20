"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LanguageSwitch } from "@/components/language-switch"
import { WhatsAppDemo } from "@/components/whatsapp-demo"
import { PricingSection } from "@/components/pricing-section"
import { TypeformContact } from "@/components/typeform-contact"
import { ImagePopup } from "@/components/image-popup"
import { Typewriter } from "@/components/typewriter"
import {
  MessageSquare,
  Calendar,
  BarChart3,
  Users,
  Clock,
  TrendingUp,
  Star,
  ArrowRight,
  Zap,
  Target,
  Shield,
  Smartphone,
  Search,
} from "lucide-react"
import Link from "next/link"

const translations = {
  en: {
    // Header
    features: "Features",
    gallery: "Gallery",
    pricing: "Pricing",
    getStarted: "Get Started",

    // Hero Section
    heroTitle: "Professional Booking Platform for",
    heroTitleHighlight: "Creative Studios",
    heroSubtitle:
      "Streamline your appointment scheduling, manage client consultations, and grow your creative business with our comprehensive booking solution.",
    typewriterWords: ["Tattoo Studios", "Beauty Salons", "Barbershops", "Art Studios", "Creative Businesses"],
    startFreeTrial: "Schedule Demo",
    watchDemo: "Watch Demo",

    // Problems Section
    problemsTitle: "Does This Sound Familiar?",
    problemsSubtitle: "Problems that thousands of businesses face every day",

    problem1Title: "Manual Bookings and Constant Errors",
    problem1Description: "Missed calls, double bookings, frustrated clients and lost revenue due to human errors.",

    problem2Title: "Lost Potential Clients",
    problem2Description: "Without automatic follow-up, leads are lost and sales opportunities vanish.",

    problem3Title: "Disorganized Content Management",
    problem3Description: "Updating prices, services and schedules is a slow and error-prone process.",

    // Solution Section
    solutionTitle: "The Solution Is Here",
    solutionSubtitle: "Transform your business with intelligent automation",

    solution1Title: "Personalized Landing Pages",
    solution1Description: "Conversion-optimized web pages that capture leads and direct to automatic booking.",

    solution2Title: "24/7 Automated Booking",
    solution2Description: "Automatic reservations, instant confirmations and zero manual errors.",

    solution3Title: "Smart CRM That Captures Everything",
    solution3Description: "Automatic lead tracking, complete history and optimized conversions.",

    solution4Title: "Automated WhatsApp AI",
    solution4Subtitle: "Optional",
    solution4Description:
      "Turn WhatsApp into your best sales channel. Qualify leads, close more deals and increase customer value.",

    // New sections
    landingPagesTitle: "Landing Pages that Convert Visitors into Clients",
    landingPagesSubtitle:
      "Web pages optimized specifically for your business that capture leads and direct them to booking.",

    conversionOptimized: "Conversion Optimized Design",
    conversionOptimizedDesc: "Every element designed to guide the user towards booking",

    directBookingIntegration: "Direct Booking Integration",
    directBookingIntegrationDesc: "Perfect flow from landing to appointment confirmation",

    responsiveFast: "Responsive and Fast",
    responsiveFastDesc: "Perfect on mobile, tablet and desktop with ultra-fast loading",

    seoOptimized: "SEO Optimized",
    seoOptimizedDesc: "Configured to appear on Google and attract organic traffic",

    landingImpact: "Proven Impact",
    landingImpactDesc: "Increases web conversions by 65% compared to generic pages",

    bookingSystemTitle: "Booking System that Never Sleeps",
    bookingSystemSubtitle: "Your intelligent calendar works 24/7 to capture every business opportunity.",

    interactiveCalendar: "Interactive Calendar",
    interactiveCalendarDesc: "Automatic email confirmation",

    instantCommunication: "Instant Communication",
    instantCommunicationDesc: "Instant communication with your clients",

    dynamicAvailability: "Dynamic Availability Management",
    dynamicAvailabilityDesc: "Smart scheduling that adapts to your needs",

    bookingImpact: "Proven Impact",
    bookingImpactDesc: "Reduces booking time by 80% and completely eliminates manual errors",

    crmTitle: "CRM that Converts Leads into Loyal Clients",
    crmSubtitle: "Every interaction counts. Our CRM captures, nurtures and converts automatically.",

    leadsDashboard: "Leads and Conversions Dashboard",
    leadsDashboardDesc: "Visualize your sales funnel in real time",

    completeHistory: "Complete Client History",
    completeHistoryDesc: "Personalize every interaction with complete data",

    neverLoseOpportunity: "Never Lose a Sales Opportunity",
    neverLoseOpportunityDesc: "Smart follow-up and automated reminders",

    crmImpact: "Guaranteed Results",
    crmImpactDesc: "Increases client retention by 35% with automated follow-up",

    whatsappTitle: "Automated WhatsApp AI",
    whatsappSubtitle: "Your 24/7 sales assistant. Turn WhatsApp into your best sales channel.",

    automaticCapture: "Automatic Capture",
    automaticCaptureDesc: "Responds instantly to inquiries and captures lead information 24/7",

    qualifyLeads: "Qualify Leads",
    qualifyLeadsDesc: "AI that identifies qualified leads and prioritizes them automatically",

    convertSales: "Convert Sales",
    convertSalesDesc: "Guides conversations towards booking with intelligent scripts",

    retainClients: "Retain Clients",
    retainClientsDesc: "Post-sale follow-up and automated retention campaigns",

    whatsappResults: "Proven Results",
    moreQualifiedLeads: "More Qualified Leads",
    higherConversion: "Higher Conversion",
    availability247: "Availability",

    tryDemo: "Try Interactive Demo",

    featuresTitle: "Powerful Features for Creative Professionals",
    featuresSubtitle: "Everything you need to manage your creative business efficiently",

    quickConsultations: "Quick Consultations",
    quickConsultationsDesc: "Handle client inquiries and consultation requests seamlessly",

    detailedBookings: "Detailed Booking Requests",
    detailedBookingsDesc: "Capture all necessary information for complex appointments",

    bookingManagement: "Booking Management",
    bookingManagementDesc: "Comprehensive dashboard to track and manage all appointments",

    bookingsProcessed: "Bookings Processed",
    studiosUsing: "Studios Using",
    uptime: "Uptime",
    support: "Support",

    benefitsTitle: "Optimize Your Creative Business",
    benefit1Title: "Automated Scheduling",
    benefit1Description: "Let clients book appointments 24/7 while you focus on your art",

    benefit2Title: "Client Management",
    benefit2Description: "Keep detailed records of client preferences and appointment history",

    benefit3Title: "Analytics & Reports",
    benefit3Description: "Track your business performance with detailed insights and metrics",

    professionalStudios: "Real Success Cases",
    trustedByLeaders: "Discover how businesses like yours have transformed their results",
    testimonialText:
      "BookingPro completely transformed our tattoo studio. The personalized landing page perfectly captures our artistic essence, the booking system eliminates constant calls, and the CRM helps us follow up with every client. We went from manual scheduling to having a system that works 24/7. Our bookings increased 280% in 3 months.",
    testimonialAuthor: "Blue Guzman",
    testimonialRole: "Owner, Inkstinct NYC",
    implementationTime: "Complete implementation: 3 weeks",
    results: "Results: +280% bookings, 24/7 automated system",

    successCasesTitle: "Real Success Stories",
    successCasesSubtitle: "Discover how businesses like yours have transformed their results",
    successTestimonial:
      "BookingPro completely transformed our tattoo studio. The personalized landing page perfectly captures our artistic essence, the booking system eliminates constant calls, and the CRM helps us follow up with every client. We went from manual scheduling to having a system that works 24/7. Our bookings increased 280% in 3 months.",
    successAuthor: "Blue Guzman",
    successRole: "Owner, Inkstinct NYC",
    successImplementation: "Complete implementation: 3 weeks",
    successResults: "Results: +280% bookings, 24/7 automated system",

    // Footer
    footerDescription: "The professional booking platform for creative studios and service providers.",
    product: "Product",
    integrations: "Integrations",
    api: "API",
    helpCenter: "Help Center",
    contact: "Contact",
    status: "Status",
    community: "Community",
    company: "Company",
    about: "About",
    blog: "Blog",
    careers: "Careers",
    privacy: "Privacy",
    allRightsReserved: "All rights reserved.",
    footerHeroTitle: "Transform Your Business Today",
    footerHeroSubtitle:
      "Join hundreds of studios that have already automated their bookings and multiplied their revenue",
    footerHeroButton: "Schedule Demo Now",
  },
  es: {
    // Header
    features: "Características",
    gallery: "Galería",
    pricing: "Precios",
    getStarted: "Comenzar",

    // Hero Section
    heroTitle: "Plataforma de Reservas Profesional para",
    heroTitleHighlight: "Estudios Creativos",
    heroSubtitle:
      "Optimiza la programación de citas, gestiona consultas de clientes y haz crecer tu negocio creativo con nuestra solución integral de reservas.",
    typewriterWords: [
      "Estudios de Tatuajes",
      "Salones de Belleza",
      "Barberías",
      "Estudios de Arte",
      "Negocios Creativos",
    ],
    startFreeTrial: "Agendar Demo",
    watchDemo: "Ver Demo",

    // Problems Section
    problemsTitle: "¿Te Suena Familiar?",
    problemsSubtitle: "Los problemas que enfrentan miles de negocios cada día",

    problem1Title: "Reservas Manuales y Errores Constantes",
    problem1Description:
      "Llamadas perdidas, dobles reservas, clientes frustrados y pérdida de ingresos por errores humanos.",

    problem2Title: "Pérdida de Clientes Potenciales",
    problem2Description: "Sin seguimiento automático, los leads se pierden y las oportunidades de venta se esfuman.",

    problem3Title: "Gestión Desorganizada de Contenido",
    problem3Description: "Actualizar precios, servicios y horarios es un proceso lento y propenso a errores.",

    // Solution Section
    solutionTitle: "La Solución Está Aquí",
    solutionSubtitle: "Transforma tu negocio con automatización inteligente",

    solution1Title: "Landing Pages Personalizada",
    solution1Description:
      "Páginas web optimizadas para conversión que capturan leads y dirigen al booking automáticamente.",

    solution2Title: "Booking Automatizado 24/7",
    solution2Description: "Reservas automáticas, confirmaciones instantáneas y cero errores manuales.",

    solution3Title: "CRM Inteligente que Captura Todo",
    solution3Description: "Seguimiento automático de leads, historial completo y conversiones optimizadas.",

    solution4Title: "WhatsApp AI Automatizado",
    solution4Subtitle: "Opcional",
    solution4Description:
      "Convierte WhatsApp en tu mejor canal de ventas. Califica leads, cierra más negocios y aumenta el valor de tus clientes.",

    // New sections
    landingPagesTitle: "Landing Pages que Convierten Visitantes en Clientes",
    landingPagesSubtitle:
      "Páginas web optimizadas específicamente para tu negocio que capturan leads y los dirigen al booking.",

    conversionOptimized: "Diseño Optimizado para Conversión",
    conversionOptimizedDesc: "Cada elemento diseñado para guiar al usuario hacia la reserva",

    directBookingIntegration: "Integración Directa con Booking",
    directBookingIntegrationDesc: "Flujo perfecto desde landing hasta confirmación de cita",

    responsiveFast: "Responsive y Rápida",
    responsiveFastDesc: "Perfecta en móvil, tablet y desktop con carga ultra rápida",

    seoOptimized: "SEO Optimizada",
    seoOptimizedDesc: "Configurada para aparecer en Google y atraer tráfico orgánico",

    landingImpact: "Impacto Comprobado",
    landingImpactDesc: "Aumenta conversiones web en 65% comparado con páginas genéricas",

    bookingSystemTitle: "Sistema de Reservas que Nunca Duerme",
    bookingSystemSubtitle: "Tu calendario inteligente trabaja 24/7 para capturar cada oportunidad de negocio.",

    interactiveCalendar: "Calendario Interactivo",
    interactiveCalendarDesc: "Confirmación automática vía email",

    instantCommunication: "Comunicación Instantánea",
    instantCommunicationDesc: "Comunicación instantánea con tus clientes",

    dynamicAvailability: "Gestión de Disponibilidad Dinámica",
    dynamicAvailabilityDesc: "Programación inteligente que se adapta a tus necesidades",

    bookingImpact: "Impacto Comprobado",
    bookingImpactDesc: "Reduce tiempo de reserva en 80% y elimina errores manuales completamente",

    crmTitle: "CRM que Convierte Leads en Clientes Fieles",
    crmSubtitle: "Cada interacción cuenta. Nuestro CRM captura, nutre y convierte automáticamente.",

    leadsDashboard: "Dashboard de Leads y Conversiones",
    leadsDashboardDesc: "Visualiza tu embudo de ventas en tiempo real",

    completeHistory: "Historial Completo de Cada Cliente",
    completeHistoryDesc: "Personaliza cada interacción con datos completos",

    neverLoseOpportunity: "Nunca Pierdas una Oportunidad de Venta",
    neverLoseOpportunityDesc: "Seguimiento inteligente y recordatorios automatizados",

    crmImpact: "Resultados Garantizados",
    crmImpactDesc: "Aumenta retención de clientes 35% con seguimiento automatizado",

    whatsappTitle: "WhatsApp AI Automatizado",
    whatsappSubtitle: "Tu asistente de ventas 24/7. Convierte WhatsApp en tu mejor canal de ventas.",

    automaticCapture: "Captura Automática",
    automaticCaptureDesc: "Responde instantáneamente a consultas y captura información de leads 24/7",

    qualifyLeads: "Califica Leads",
    qualifyLeadsDesc: "IA que identifica leads calificados y los prioriza automáticamente",

    convertSales: "Convierte Ventas",
    convertSalesDesc: "Guía conversaciones hacia la reserva con scripts inteligentes",

    retainClients: "Fideliza Clientes",
    retainClientsDesc: "Seguimiento post-venta y campañas de retención automatizadas",

    whatsappResults: "Resultados Comprobados",
    moreQualifiedLeads: "Más Leads Calificados",
    higherConversion: "Mayor Conversión",
    availability247: "Disponibilidad",

    tryDemo: "Probar Demo Interactiva",

    featuresTitle: "Características Poderosas para Profesionales Creativos",
    featuresSubtitle: "Todo lo que necesitas para gestionar tu negocio creativo eficientemente",

    quickConsultations: "Consultas Rápidas",
    quickConsultationsDesc: "Maneja consultas de clientes y solicitudes de consulta sin problemas",

    detailedBookings: "Solicitudes de Reserva Detalladas",
    detailedBookingsDesc: "Captura toda la información necesaria para citas complejas",

    bookingManagement: "Gestión de Reservas",
    bookingManagementDesc: "Panel integral para rastrear y gestionar todas las citas",

    bookingsProcessed: "Reservas Procesadas",
    studiosUsing: "Estudios Usando",
    uptime: "Tiempo Activo",
    support: "Soporte",

    benefitsTitle: "Optimiza tu Negocio Creativo",
    benefit1Title: "Programación Automatizada",
    benefit1Description: "Permite que los clientes reserven citas 24/7 mientras te enfocas en tu arte",

    benefit2Title: "Gestión de Clientes",
    benefit2Description: "Mantén registros detallados de preferencias de clientes e historial de citas",

    benefit3Title: "Análisis y Reportes",
    benefit3Description: "Rastrea el rendimiento de tu negocio con insights detallados y métricas",

    professionalStudios: "Casos de Éxito Reales",
    trustedByLeaders: "Descubre cómo empresas como la tuya han transformado sus resultados",
    testimonialText:
      "BookingPro transformó completamente nuestro estudio de tatuajes. La landing page personalizada captura perfectamente nuestra esencia artística, el sistema de booking elimina las llamadas constantes, y el CRM nos ayuda a dar seguimiento a cada cliente. Pasamos de agendar manualmente a tener un sistema que funciona 24/7. Nuestras reservas aumentaron 280% en 3 meses.",
    testimonialAuthor: "Blue Guzman",
    testimonialRole: "Propietaria, Inkstinct NYC",
    implementationTime: "Implementación completa: 3 semanas",
    results: "Resultados: +280% reservas, sistema 24/7 automatizado",

    successCasesTitle: "Casos de Éxito Reales",
    successCasesSubtitle: "Descubre cómo empresas como la tuya han transformado sus resultados",
    successTestimonial:
      "BookingPro transformó completamente nuestro estudio de tatuajes. La landing page personalizada captura perfectamente nuestra esencia artística, el sistema de booking elimina las llamadas constantes, y el CRM nos ayuda a dar seguimiento a cada cliente. Pasamos de agendar manualmente a tener un sistema que funciona 24/7. Nuestras reservas aumentaron 280% en 3 meses.",
    successAuthor: "Blue Guzman",
    successRole: "Propietaria, Inkstinct NYC",
    successImplementation: "Implementación completa: 3 semanas",
    successResults: "Resultados: +280% reservas, sistema 24/7 automatizado",

    // Footer
    footerDescription: "La plataforma de reservas profesional para estudios creativos y proveedores de servicios.",
    product: "Producto",
    integrations: "Integraciones",
    api: "API",
    helpCenter: "Centro de Ayuda",
    contact: "Contacto",
    status: "Estado",
    community: "Comunidad",
    company: "Empresa",
    about: "Acerca de",
    blog: "Blog",
    careers: "Carreras",
    privacy: "Privacidad",
    allRightsReserved: "Todos los derechos reservados.",
    footerHeroTitle: "Transforma Tu Negocio Hoy",
    footerHeroSubtitle: "Únete a cientos de estudios que ya automatizaron sus reservas y multiplicaron sus ingresos",
    footerHeroButton: "Agendar Demo Ahora",
  },
}

export default function LandingPage() {
  const [language, setLanguage] = useState<"en" | "es">("en")
  const [popupImage, setPopupImage] = useState<{ src: string; alt: string } | null>(null)
  const t = translations[language]

  const scrollToContact = () => {
    const contactForm = document.getElementById("contact-form")
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" })
    }
  }
  
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <Calendar className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">BookingPro</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground">
              {t.features}
            </a>
            <a href="#gallery" className="text-muted-foreground hover:text-foreground">
              {t.gallery}
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground">
              {t.pricing}
            </a>
            <Link href="#contact"><Button>{t.getStarted}</Button></Link>
          </nav>
            <LanguageSwitch currentLanguage={language} onLanguageChange={setLanguage} />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t.heroTitle}{" "}
            <span className="text-primary">
              <Typewriter words={t.typewriterWords} />
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">{t.heroSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="#contact">
            <Button size="lg" className="text-lg px-8" >
              {t.startFreeTrial}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            </Link>
            <Link href="#contact">
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              {t.watchDemo}
            </Button>
            </Link>
          </div>

          {/* Hero Image - INKSTINCT Studio */}
          <div className="max-w-4xl mx-auto" id="gallery">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/INKSTINCT-NYC-Premier-Tattoo-Studio-08-18-2025_05_11_PM-9I7TXREYpt7XuNAevrS4yrouuGWHt6.png"
              alt="INKSTINCT NYC Premier Tattoo Studio - Professional booking platform showcase"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-red-50 dark:bg-red-950/20" >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-700 dark:text-red-400">{t.problemsTitle}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.problemsSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-red-200 dark:border-red-800">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <CardTitle className="text-red-700 dark:text-red-400">{t.problem1Title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.problem1Description}</p>
              </CardContent>
            </Card>

            <Card className="border-red-200 dark:border-red-800">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <CardTitle className="text-red-700 dark:text-red-400">{t.problem2Title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.problem2Description}</p>
              </CardContent>
            </Card>

            <Card className="border-red-200 dark:border-red-800">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <CardTitle className="text-red-700 dark:text-red-400">{t.problem3Title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.problem3Description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-green-50 dark:bg-green-950/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-700 dark:text-green-400">
              {t.solutionTitle}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.solutionSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-green-200 dark:border-green-800">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-green-700 dark:text-green-400">{t.solution1Title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.solution1Description}</p>
              </CardContent>
            </Card>

            <Card className="border-green-200 dark:border-green-800">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-green-700 dark:text-green-400">{t.solution2Title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.solution2Description}</p>
              </CardContent>
            </Card>

            <Card className="border-green-200 dark:border-green-800">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-green-700 dark:text-green-400">{t.solution3Title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.solution3Description}</p>
              </CardContent>
            </Card>

            <Card className="border-green-200 dark:border-green-800 relative">
              <Badge className="absolute -top-2 left-4 bg-blue-500 text-white">{t.solution4Subtitle}</Badge>
              <CardHeader className="pt-6">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-green-700 dark:text-green-400">{t.solution4Title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.solution4Description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Landing Pages Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.landingPagesTitle}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t.landingPagesSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-lg">{t.conversionOptimized}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{t.conversionOptimizedDesc}</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-lg">{t.directBookingIntegration}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{t.directBookingIntegrationDesc}</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-lg">{t.responsiveFast}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{t.responsiveFastDesc}</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Search className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-lg">{t.seoOptimized}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{t.seoOptimizedDesc}</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Badge
              variant="secondary"
              className="text-lg px-6 py-2 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
            >
              {t.landingImpact}: {t.landingImpactDesc}
            </Badge>
          </div>
        </div>
      </section>

      {/* Booking System Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.bookingSystemTitle}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t.bookingSystemSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-lg">{t.interactiveCalendar}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{t.interactiveCalendarDesc}</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-lg">{t.instantCommunication}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{t.instantCommunicationDesc}</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-lg">{t.dynamicAvailability}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{t.dynamicAvailabilityDesc}</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Badge
              variant="secondary"
              className="text-lg px-6 py-2 bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
            >
              {t.bookingImpact}: {t.bookingImpactDesc}
            </Badge>
          </div>
        </div>
      </section>

      {/* CRM Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.crmTitle}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t.crmSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle className="text-lg">{t.leadsDashboard}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{t.leadsDashboardDesc}</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle className="text-lg">{t.completeHistory}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{t.completeHistoryDesc}</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle className="text-lg">{t.neverLoseOpportunity}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{t.neverLoseOpportunityDesc}</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Badge
              variant="secondary"
              className="text-lg px-6 py-2 bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300"
            >
              {t.crmImpact}: {t.crmImpactDesc}
            </Badge>
          </div>
        </div>
      </section>

      {/* WhatsApp AI Section */}
      <section className="py-20 px-4 bg-green-50 dark:bg-green-950/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-700 dark:text-green-400">
              {t.whatsappTitle}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t.whatsappSubtitle}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-green-200 dark:border-green-800">
                  <CardHeader>
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-2">
                      <Zap className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <CardTitle className="text-base">{t.automaticCapture}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{t.automaticCaptureDesc}</p>
                  </CardContent>
                </Card>

                <Card className="border-green-200 dark:border-green-800">
                  <CardHeader>
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-2">
                      <Target className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <CardTitle className="text-base">{t.qualifyLeads}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{t.qualifyLeadsDesc}</p>
                  </CardContent>
                </Card>

                <Card className="border-green-200 dark:border-green-800">
                  <CardHeader>
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-2">
                      <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <CardTitle className="text-base">{t.convertSales}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{t.convertSalesDesc}</p>
                  </CardContent>
                </Card>

                <Card className="border-green-200 dark:border-green-800">
                  <CardHeader>
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-2">
                      <Star className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <CardTitle className="text-base">{t.retainClients}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{t.retainClientsDesc}</p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-4 text-green-700 dark:text-green-400">{t.whatsappResults}</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">85%</div>
                    <div className="text-sm text-muted-foreground">{t.moreQualifiedLeads}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">60%</div>
                    <div className="text-sm text-muted-foreground">{t.higherConversion}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">24/7</div>
                    <div className="text-sm text-muted-foreground">{t.availability247}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold mb-4 text-center">{t.tryDemo}</h3>
              <WhatsAppDemo language={language} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.featuresTitle}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.featuresSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <MessageSquare className="w-10 h-10 text-primary mb-2" />
                <CardTitle>{t.quickConsultations}</CardTitle>
                <CardDescription>{t.quickConsultationsDesc}</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-18%20at%2014.33.48-n8DxDexJVFXtvlzCNqOINx0Xza7V32.jpeg"
                  alt="Quick consultation request from client"
                  className="w-full rounded-md cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() =>
                    setPopupImage({
                      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-18%20at%2014.33.48-n8DxDexJVFXtvlzCNqOINx0Xza7V32.jpeg",
                      alt: "Quick consultation request from client",
                    })
                  }
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Calendar className="w-10 h-10 text-primary mb-2" />
                <CardTitle>{t.detailedBookings}</CardTitle>
                <CardDescription>{t.detailedBookingsDesc}</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-18%20at%2014.33.28-6Yw9M03QtvrmE1lwDiBatDyUodLUW3.jpeg"
                  alt="Detailed tattoo booking request form"
                  className="w-full rounded-md cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() =>
                    setPopupImage({
                      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-18%20at%2014.33.28-6Yw9M03QtvrmE1lwDiBatDyUodLUW3.jpeg",
                      alt: "Detailed tattoo booking request form",
                    })
                  }
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BarChart3 className="w-10 h-10 text-primary mb-2" />
                <CardTitle>{t.bookingManagement}</CardTitle>
                <CardDescription>{t.bookingManagementDesc}</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-18%20at%2014.32.16-s0zfGn5do796LhBGljIKEhw4HwgYhr.jpeg"
                  alt="Bookings management dashboard"
                  className="w-full rounded-md cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() =>
                    setPopupImage({
                      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-18%20at%2014.32.16-s0zfGn5do796LhBGljIKEhw4HwgYhr.jpeg",
                      alt: "Bookings management dashboard",
                    })
                  }
                />
              </CardContent>
            </Card>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">{t.bookingsProcessed}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">{t.studiosUsing}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">{t.uptime}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">{t.support}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.successCasesTitle}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.successCasesSubtitle}</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="space-y-6">
                <blockquote className="text-lg md:text-xl text-muted-foreground italic leading-relaxed">
                  "{t.successTestimonial}"
                </blockquote>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <p className="font-semibold text-lg">{t.successAuthor}</p>
                    <p className="text-muted-foreground">{t.successRole}</p>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">{t.successImplementation}</p>
                    <p className="font-semibold text-primary">{t.successResults}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection language={language} />

      {/* TypeformContact Section */}
      <TypeformContact language={language} />

      {/* ImagePopup Section */}
      <ImagePopup
        src={popupImage?.src || ""}
        alt={popupImage?.alt || ""}
        isOpen={!!popupImage}
        onClose={() => setPopupImage(null)}
      />

      {/* Footer Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            {t.footerHeroTitle}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">{t.footerHeroSubtitle}</p>
          <Button
            size="lg"
            className="text-lg px-12 py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg"
            onClick={scrollToContact}
          >
            {t.footerHeroButton}
            <ArrowRight className="ml-2 w-6 h-6" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">BookingPro</span>
              </div>
              <p className="text-muted-foreground">{t.footerDescription}</p>
            </div>
            {/* <div>
              <h3 className="font-semibold mb-4">{t.product}</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    {t.features}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    {t.pricing}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    {t.integrations}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    {t.api}
                  </a>
                </li>
              </ul>
            </div> */}
            {/* <div>
              <h3 className="font-semibold mb-4">{t.support}</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    {t.helpCenter}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    {t.contact}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    {t.status}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    {t.community}
                  </a>
                </li>
              </ul>
            </div> */}
            {/* <div>
              <h3 className="font-semibold mb-4">{t.company}</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    {t.about}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    {t.blog}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    {t.careers}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    {t.privacy}
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 BookingPro. {t.allRightsReserved}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
