import Image from 'next/image'

interface TechStackIconProps {
  tech: string
  className?: string
}

export function TechStackIcon({ tech, className }: TechStackIconProps) {
  // Convert tech name to lowercase and replace spaces with hyphens for the filename
  const iconName = tech.toLowerCase().replace(/\s+/g, '-')
  
  return (
    <div className={`relative w-4 h-4 ${className}`}>
      <Image
        src={`/tech-icons/${iconName}.svg`}
        alt={`${tech} icon`}
        fill
        className="object-contain"
      />
    </div>
  )
} 