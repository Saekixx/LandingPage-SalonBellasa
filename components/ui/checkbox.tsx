"use client"

import * as React from "react"
import { CheckIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onCheckedChange?: (checked: boolean) => void
}

function Checkbox({ className, onCheckedChange, onChange, ...props }: CheckboxProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
    onCheckedChange?.(e.target.checked)
  }

  return (
    <div className="relative flex items-center">
      <input
        type="checkbox"
        className="peer sr-only"
        onChange={handleChange}
        {...props}
      />
      <div
        className={cn(
          "size-4 shrink-0 rounded-[4px] border border-input shadow-xs transition-all",
          "peer-checked:bg-[#8B1A8B] peer-checked:border-[#8B1A8B]",
          "peer-focus-visible:ring-2 peer-focus-visible:ring-ring/50",
          "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
          className
        )}
        aria-hidden="true"
      >
        <CheckIcon className="size-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
      </div>
    </div>
  )
}

export { Checkbox }