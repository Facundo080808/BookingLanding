"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

interface PricingSectionProps {
  language: "en" | "es"
}

export function PricingSection({ language }: PricingSectionProps) {
  const t = {
    en: {
      title: "Investment That Pays for Itself",
      subtitle: "Choose the plan that best fits your business and start seeing results from day one",
      customDevelopmentPlans: "Custom Development Plans",
      initialSetup: "Initial Setup",
      setupPrice: "$5,000 USD",
      setupDescription: "Complete configuration and implementation + Starter $99/month or Grow $149/month",
      installmentOption: "Payment in 3 installments:",
      installment1: "• $1,667 USD (Day 0)",
      installment2: "• $1,667 USD (Day 30)",
      installment3: "• $1,666 USD (Day 45)",
      starter: "Starter",
      starterPrice: "$99/month",
      starterDescription: "Perfect to get started",
      starterNote: "Setup fee + monthly support",
      starterFeature1: "Up to 500 bookings/month",
      starterFeature2: "Basic CRM included",
      starterFeature3: "Email support",
      starterFeature4: "Cloud infrastructure included (CRM, landing pages, etc.)",
      startNow: "Schedule Demo",
      mostPopular: "Most Popular",
      grow: "Grow",
      growPrice: "$149/month",
      growDescription: "For growing businesses",
      growNote: "Setup fee + monthly support",
      growFeature1: "Unlimited bookings",
      growFeature2: "Advanced CRM + email automation",
      growFeature3: "WhatsApp support",
      growFeature4: "Immediate implementation (5 business days)",
      growFeature5: "Cloud infrastructure included (CRM, landing pages, etc.)",
      enterprise: "Enterprise",
      enterprisePrice: "Custom",
      enterpriseDescription: "For large organizations",
      enterpriseFeature1: "Everything in Grow +",
      enterpriseFeature2: "Multi-location",
      enterpriseFeature3: "Custom API",
      enterpriseFeature4: "Dedicated Account Manager",
      whatsappAI: "Optional WhatsApp AI",
      whatsappAIPrice: "$2,490",
      whatsappAIDescription: "AI-powered booking automation",
      maintenanceCosts: "Monthly Maintenance:",
      serverCost: "• Servers: $60 USD",
      supportCost: "• On-demand support: $25 USD/hour",
      apiCost: "• WhatsApp API by Meta: from $20 USD/month (500 messages)",
      seeCalculator: "See Calculator",
      whatsappFeature1: "AI Booking Agent in WhatsApp",
      whatsappFeature2: "Personalized knowledge base",
      whatsappFeature3: "Automated sales funnel",
      whatsappFeature4: "Calendar integration",
      whatsappFeature5: "CRM integration",
      whatsappFeature6: "Specific sales process training",
    },
    es: {
      title: "Inversión que se Paga Sola",
      subtitle: "Elige el plan que mejor se adapte a tu negocio y comienza a ver resultados desde el primer día",
      customDevelopmentPlans: "Planes Desarrollo Personalizado",
      initialSetup: "Set Up Inicial",
      setupPrice: "$5,000 USD",
      setupDescription: "Configuración e implementación completa + Starter $99/mes o Grow $149/mes",
      installmentOption: "Pago en 3 cuotas:",
      installment1: "• $1,667 USD (Día 0)",
      installment2: "• $1,667 USD (Día 30)",
      installment3: "• $1,666 USD (Día 45)",
      starter: "Starter",
      starterPrice: "$99/mes",
      starterDescription: "Perfecto para empezar",
      starterNote: "Fee de setup + soporte mensual",
      starterFeature1: "Hasta 500 reservas/mes",
      starterFeature2: "CRM básico incluido",
      starterFeature3: "Soporte por email",
      starterFeature4: "Infraestructura cloud incluida (CRM, landing pages, etc.)",
      startNow: "Agendar Demo",
      mostPopular: "Más Popular",
      grow: "Grow",
      growPrice: "$149/mes",
      growDescription: "Para negocios en crecimiento",
      growNote: "Fee de setup + soporte mensual",
      growFeature1: "Reservas ilimitadas",
      growFeature2: "CRM avanzado + automatización de mensajes al correo",
      growFeature3: "Soporte por WhatsApp",
      growFeature4: "Implementación inmediata (5 días hábiles)",
      growFeature5: "Infraestructura cloud incluida (CRM, landing pages, etc.)",
      enterprise: "Enterprise",
      enterprisePrice: "Custom",
      enterpriseDescription: "Para grandes organizaciones",
      enterpriseFeature1: "Todo de Grow +",
      enterpriseFeature2: "Multi-ubicación",
      enterpriseFeature3: "API personalizada",
      enterpriseFeature4: "Account Manager dedicado",
      whatsappAI: "Opcional WhatsApp AI",
      whatsappAIPrice: "$2,490",
      whatsappAIDescription: "Automatización de reservas con IA",
      maintenanceCosts: "Mantenimiento Mensual:",
      serverCost: "• Servidores: $60 USD",
      supportCost: "• Soporte bajo demanda: $25 USD/hora",
      apiCost: "• API WhatsApp by Meta: desde $20 USD/mes (500 mensajes)",
      seeCalculator: "Ver calculadora",
      whatsappFeature1: "AI Booking Agent en WhatsApp",
      whatsappFeature2: "Base conocimiento personalizada",
      whatsappFeature3: "Funnel de ventas automatizado",
      whatsappFeature4: "Integración calendarios",
      whatsappFeature5: "Integración CRM",
      whatsappFeature6: "Training específico proceso venta",
    },
  }

  const translations = t[language]

  return (
    <section className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{translations.title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{translations.subtitle}</p>
        </div>

        {/* Initial Setup */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">{translations.customDevelopmentPlans}</h3>
          <Card className="max-w-md mx-auto mb-8 border-primary">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">{translations.initialSetup}</CardTitle>
              <div className="text-3xl font-bold text-primary">{translations.setupPrice}</div>
              <CardDescription>{translations.setupDescription}</CardDescription>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm font-medium text-blue-800 mb-2">{translations.installmentOption}</p>
                <div className="text-xs text-blue-700 space-y-1">
                  <p>{translations.installment1}</p>
                  <p>{translations.installment2}</p>
                  <p>{translations.installment3}</p>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* Pricing Plans */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Starter Plan */}
          <Card>
            <CardHeader className="text-center">
              <CardTitle>{translations.starter}</CardTitle>
              <div className="text-3xl font-bold">{translations.starterPrice}</div>
              <CardDescription>{translations.starterDescription}</CardDescription>
              <p className="text-xs text-muted-foreground mt-2">{translations.starterNote}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-sm">{translations.starterFeature1}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-sm">{translations.starterFeature2}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-sm">{translations.starterFeature3}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-sm">{translations.starterFeature4}</span>
              </div>
              <Button
                className="w-full mt-6 bg-transparent"
                variant="outline"
                onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                {translations.startNow}
              </Button>
            </CardContent>
          </Card>

          {/* Grow Plan */}
          <Card className="border-primary relative">
            <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2">{translations.mostPopular}</Badge>
            <CardHeader className="text-center">
              <CardTitle>{translations.grow}</CardTitle>
              <div className="text-3xl font-bold">{translations.growPrice}</div>
              <CardDescription>{translations.growDescription}</CardDescription>
              <p className="text-xs text-muted-foreground mt-2">{translations.growNote}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-sm">{translations.growFeature1}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-sm">{translations.growFeature2}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-sm">{translations.growFeature3}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-sm">{translations.growFeature4}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-sm">{translations.growFeature5}</span>
              </div>
              <Button
                className="w-full mt-6"
                onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                {translations.startNow}
              </Button>
            </CardContent>
          </Card>

          {/* Enterprise Plan */}
          <Card>
            <CardHeader className="text-center">
              <CardTitle>{translations.enterprise}</CardTitle>
              <div className="text-3xl font-bold">{translations.enterprisePrice}</div>
              <CardDescription>{translations.enterpriseDescription}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-sm">{translations.enterpriseFeature1}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-sm">{translations.enterpriseFeature2}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-sm">{translations.enterpriseFeature3}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-sm">{translations.enterpriseFeature4}</span>
              </div>
              <Button
                className="w-full mt-6 bg-transparent"
                variant="outline"
                onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                {translations.startNow}
              </Button>
            </CardContent>
          </Card>

          {/* WhatsApp AI Plan */}
          <Card className="border-orange-500">
            <CardHeader className="text-center">
              <CardTitle>{translations.whatsappAI}</CardTitle>
              <div className="text-3xl font-bold text-orange-600">{translations.whatsappAIPrice}</div>
              <CardDescription>{translations.whatsappAIDescription}</CardDescription>
              <div className="mt-4 p-3 bg-orange-50 rounded-lg border border-orange-200">
                <p className="text-sm font-medium text-orange-800 mb-2">{translations.maintenanceCosts}</p>
                <div className="text-xs text-orange-700 space-y-1">
                  <p>{translations.serverCost}</p>
                  <p>{translations.supportCost}</p>
                  <p>{translations.apiCost}</p>
                </div>
              </div>
              <Button variant="link" className="text-orange-600 p-0 h-auto text-xs mt-2">
                {translations.seeCalculator}
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-sm">{translations.whatsappFeature1}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-sm">{translations.whatsappFeature2}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-sm">{translations.whatsappFeature3}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-sm">{translations.whatsappFeature4}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-sm">{translations.whatsappFeature5}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-sm">{translations.whatsappFeature6}</span>
              </div>
              <Button
                className="w-full mt-6 bg-orange-600 hover:bg-orange-700"
                onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                {translations.startNow}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
