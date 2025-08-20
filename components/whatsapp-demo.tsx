"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Send, Bot } from "lucide-react"

interface Message {
  id: number
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

interface WhatsAppDemoProps {
  language: "en" | "es"
}

const demoMessages = {
  en: {
    botResponses: [
      "Hi! 👋 I'm your AI assistant. How can I help you today?",
      "I can help you book an appointment! What type of service are you interested in?",
      "Perfect! For a tattoo consultation, I'll need some details. What's your name?",
      "Great to meet you, Alex! What size tattoo are you considering? (Small, Medium, Large)",
      "Excellent choice! Medium tattoos typically take 2-4 hours. What's your preferred placement?",
      "Arm tattoos are very popular! What's your budget range for this project?",
      "Perfect! I have availability this week. Would you prefer Tuesday at 2 PM or Thursday at 4 PM?",
      "Booked! ✅ Tuesday at 2 PM is confirmed. You'll receive a confirmation email shortly. Anything else I can help with?",
    ],
    userMessages: [
      "Hi there!",
      "I want to book a tattoo",
      "Alex Johnson",
      "Medium size",
      "On my arm",
      "$200-400",
      "Tuesday works great!",
      "That's all, thanks!",
    ],
    placeholder: "Type a message...",
  },
  es: {
    botResponses: [
      "¡Hola! 👋 Soy tu asistente de IA. ¿Cómo puedo ayudarte hoy?",
      "¡Puedo ayudarte a reservar una cita! ¿Qué tipo de servicio te interesa?",
      "¡Perfecto! Para una consulta de tatuaje, necesito algunos detalles. ¿Cuál es tu nombre?",
      "¡Mucho gusto, Alex! ¿Qué tamaño de tatuaje estás considerando? (Pequeño, Mediano, Grande)",
      "¡Excelente elección! Los tatuajes medianos típicamente toman 2-4 horas. ¿Cuál es tu ubicación preferida?",
      "¡Los tatuajes en el brazo son muy populares! ¿Cuál es tu rango de presupuesto para este proyecto?",
      "¡Perfecto! Tengo disponibilidad esta semana. ¿Prefieres martes a las 2 PM o jueves a las 4 PM?",
      "¡Reservado! ✅ Martes a las 2 PM está confirmado. Recibirás un email de confirmación pronto. ¿Algo más en lo que pueda ayudarte?",
    ],
    userMessages: [
      "¡Hola!",
      "Quiero reservar un tatuaje",
      "Alex Johnson",
      "Tamaño mediano",
      "En mi brazo",
      "$200-400",
      "¡Martes funciona perfecto!",
      "Eso es todo, ¡gracias!",
    ],
    placeholder: "Escribe un mensaje...",
  },
}

export function WhatsAppDemo({ language }: WhatsAppDemoProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [currentStep, setCurrentStep] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [isActive, setIsActive] = useState(false)

  const t = demoMessages[language]

  const startDemo = () => {
    setMessages([])
    setCurrentStep(0)
    setIsActive(true)

    // Add first bot message
    setTimeout(() => {
      setMessages([
        {
          id: 1,
          text: t.botResponses[0],
          sender: "bot",
          timestamp: new Date(),
        },
      ])
    }, 500)
  }

  const sendMessage = () => {
    if (!inputValue.trim() || currentStep >= t.userMessages.length) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Bot response after delay
    setTimeout(() => {
      setIsTyping(false)
      if (currentStep + 1 < t.botResponses.length) {
        const botMessage: Message = {
          id: messages.length + 2,
          text: t.botResponses[currentStep + 1],
          sender: "bot",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, botMessage])
      }
      setCurrentStep((prev) => prev + 1)
    }, 1500)
  }

  const handleQuickReply = () => {
    if (currentStep < t.userMessages.length) {
      setInputValue(t.userMessages[currentStep])
    }
  }

  return (
    <Card className="max-w-sm mx-auto bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
      <CardHeader className="bg-green-600 text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-2 text-sm">
          <MessageSquare className="w-4 h-4" />
          WhatsApp Business AI
          <div className="ml-auto w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-80 overflow-y-auto p-4 space-y-3 bg-green-50 dark:bg-green-950/10">
          {!isActive ? (
            <div className="text-center py-8">
              <Bot className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <p className="text-sm text-muted-foreground mb-4">
                {language === "en" ? "Try our AI assistant demo" : "Prueba nuestro asistente de IA"}
              </p>
              <Button onClick={startDemo} size="sm" className="bg-green-600 hover:bg-green-700">
                {language === "en" ? "Start Demo" : "Iniciar Demo"}
              </Button>
            </div>
          ) : (
            <>
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                      message.sender === "user" ? "bg-green-600 text-white" : "bg-white dark:bg-gray-800 border"
                    }`}
                  >
                    {message.sender === "bot" && (
                      <div className="flex items-center gap-1 mb-1">
                        <Bot className="w-3 h-3" />
                        <span className="text-xs font-medium">AI Assistant</span>
                      </div>
                    )}
                    {message.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-gray-800 border px-3 py-2 rounded-lg">
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
            </>
          )}
        </div>

        {isActive && (
          <div className="border-t p-3 bg-white dark:bg-gray-900">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                placeholder={t.placeholder}
                className="flex-1 px-3 py-2 text-sm border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <Button
                onClick={sendMessage}
                size="sm"
                className="rounded-full w-8 h-8 p-0 bg-green-600 hover:bg-green-700"
                disabled={!inputValue.trim()}
              >
                <Send className="w-3 h-3" />
              </Button>
            </div>
            {currentStep < t.userMessages.length && (
              <Button onClick={handleQuickReply} variant="outline" size="sm" className="mt-2 text-xs bg-transparent">
                {language === "en" ? "Quick Reply" : "Respuesta Rápida"}: "{t.userMessages[currentStep]}"
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
