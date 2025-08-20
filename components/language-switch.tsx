"use client"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

interface LanguageSwitchProps {
  currentLanguage: string
  onLanguageChange: (language: "es" | "en") => void
}

export function LanguageSwitch({ currentLanguage, onLanguageChange }: LanguageSwitchProps) {
  return (
    <div className="flex items-center space-x-2">
      <Globe className="w-4 h-4 text-muted-foreground" />
      <div className="flex rounded-md border">
        <Button
          variant={currentLanguage === "en" ? "default" : "ghost"}
          size="sm"
          onClick={() => onLanguageChange("en")}
          className="rounded-r-none"
        >
          EN
        </Button>
        <Button
          variant={currentLanguage === "es" ? "default" : "ghost"}
          size="sm"
          onClick={() => onLanguageChange("es")}
          className="rounded-l-none"
        >
          ES
        </Button>
      </div>
    </div>
  )
}
