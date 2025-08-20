"use client"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ImagePopupProps {
  src: string
  alt: string
  isOpen: boolean
  onClose: () => void
}

export function ImagePopup({ src, alt, isOpen, onClose }: ImagePopupProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="relative max-w-4xl max-h-[90vh] w-full">
        <Button
          variant="ghost"
          size="icon"
          className="absolute -top-12 right-0 text-white hover:bg-white/20"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </Button>
        <img src={src || "/placeholder.svg"} alt={alt} className="w-full h-full object-contain rounded-lg" />
      </div>
    </div>
  )
}
