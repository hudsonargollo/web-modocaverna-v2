'use client'

import { forwardRef } from 'react'
import { Input, InputProps } from '@/components/ui/input'

interface InputUpperFirstWordProps extends InputProps {}

const InputUpperFirstWord = forwardRef<HTMLInputElement, InputUpperFirstWordProps>(
  ({ value, onChange, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
      onChange?.({
        ...e,
        target: { ...e.target, value: newValue }
      })
    }

    return (
      <Input
        {...props}
        value={value}
        onChange={handleChange}
        ref={ref}
      />
    )
  }
)

InputUpperFirstWord.displayName = 'InputUpperFirstWord'

export default InputUpperFirstWord
