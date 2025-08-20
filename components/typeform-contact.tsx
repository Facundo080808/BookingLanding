"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ArrowLeft } from "lucide-react"

interface TypeformContactProps {
  language: "es" | "en"
}

export function TypeformContact({ language }: TypeformContactProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: "",
    budget: "",
  })

  const t = {
    es: {
      title: "¡Hablemos de tu proyecto!",
      subtitle: "Cuéntanos sobre tu negocio y te ayudaremos a encontrar la mejor solución",
      name: "¿Cuál es tu nombre?",
      email: "¿Cuál es tu email?",
      phone: "¿Cuál es tu teléfono?",
      business: "¿Qué tipo de negocio tienes?",
      budget: "¿Cuál es tu presupuesto aproximado?",
      message: "Cuéntanos más sobre tu proyecto",
      next: "Siguiente",
      back: "Anterior",
      send: "Enviar a WhatsApp",
      namePlaceholder: "Tu nombre completo",
      emailPlaceholder: "tu@email.com",
      phonePlaceholder: "+56 9 1234 5678",
      businessPlaceholder: "Ej: Estudio de tatuajes, Barbería, Spa...",
      budgetPlaceholder: "Ej: $2,000 - $5,000 USD",
      messagePlaceholder: "Describe tu proyecto, objetivos y cualquier detalle importante...",
    },
    en: {
      title: "Let's talk about your project!",
      subtitle: "Tell us about your business and we'll help you find the best solution",
      name: "What's your name?",
      email: "What's your email?",
      phone: "What's your phone?",
      business: "What type of business do you have?",
      budget: "What's your approximate budget?",
      message: "Tell us more about your project",
      next: "Next",
      back: "Back",
      send: "Send to WhatsApp",
      namePlaceholder: "Your full name",
      emailPlaceholder: "your@email.com",
      phonePlaceholder: "+1 234 567 8900",
      businessPlaceholder: "Ex: Tattoo studio, Barbershop, Spa...",
      budgetPlaceholder: "Ex: $2,000 - $5,000 USD",
      messagePlaceholder: "Describe your project, goals and any important details...",
    },
  }

  const text = t[language]

  const steps = [
    { field: "name", label: text.name, placeholder: text.namePlaceholder, type: "input" },
    { field: "email", label: text.email, placeholder: text.emailPlaceholder, type: "input" },
    { field: "phone", label: text.phone, placeholder: text.phonePlaceholder, type: "input" },
    { field: "business", label: text.business, placeholder: text.businessPlaceholder, type: "input" },
    { field: "budget", label: text.budget, placeholder: text.budgetPlaceholder, type: "input" },
    { field: "message", label: text.message, placeholder: text.messagePlaceholder, type: "textarea" },
  ]

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    const message = `Hola! Me interesa su servicio de BookingPro.

*Información de contacto:*
Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone}
Tipo de negocio: ${formData.business}
Presupuesto: ${formData.budget}

*Mensaje:*
${formData.message}

¡Espero su respuesta!`

    const whatsappUrl = `https://wa.me/56930835236?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const currentField = steps[currentStep]
  const progress = ((currentStep + 1) / steps.length) * 100

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{text.title}</h2>
          <p className="text-xl text-muted-foreground">{text.subtitle}</p>
        </div>

        <Card className="p-8">
          <CardContent className="space-y-8">
            {/* Progress Bar */}
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Step Counter */}
            <div className="text-center text-sm text-muted-foreground">
              {currentStep + 1} / {steps.length}
            </div>

            {/* Question */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">{currentField.label}</h3>

              {currentField.type === "input" ? (
                <Input
                  placeholder={currentField.placeholder}
                  value={formData[currentField.field as keyof typeof formData]}
                  onChange={(e) => updateFormData(currentField.field, e.target.value)}
                  className="text-lg p-4 h-14"
                  autoFocus
                />
              ) : (
                <Textarea
                  placeholder={currentField.placeholder}
                  value={formData[currentField.field as keyof typeof formData]}
                  onChange={(e) => updateFormData(currentField.field, e.target.value)}
                  className="text-lg p-4 min-h-32"
                  autoFocus
                />
              )}
            </div>

            {/* Navigation */}
            <div className="flex justify-between pt-6">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 0}
                className="flex items-center gap-2 bg-transparent"
              >
                <ArrowLeft className="w-4 h-4" />
                {text.back}
              </Button>

              {currentStep === steps.length - 1 ? (
                <Button
                  onClick={handleSubmit}
                  disabled={!formData[currentField.field as keyof typeof formData]}
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                >
                  {text.send}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleNext}
                  disabled={!formData[currentField.field as keyof typeof formData]}
                  className="flex items-center gap-2"
                >
                  {text.next}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
