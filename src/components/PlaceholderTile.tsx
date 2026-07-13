import {
  Droplet,
  Flame,
  Sparkles,
  CircleDot,
  Wind,
  Gem,
  Frame,
  Gift,
  Moon,
  Image as ImageIcon,
} from "lucide-react";

const iconByCategory: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Huiles: Droplet,
  Encens: Wind,
  Savons: CircleDot,
  Bougies: Flame,
  Poudres: Sparkles,
  Parfums: Gem,
  Accessoires: Gift,
  "Articles décoratifs": Frame,
  Coffrets: Gift,
  "Gamme Lune Soleil": Moon,
};

export default function PlaceholderTile({
  category,
  className = "",
}: {
  category?: string;
  className?: string;
}) {
  const Icon = (category && iconByCategory[category]) || ImageIcon;
  return (
    <div
      className={`relative flex items-center justify-center bg-navy-tint overflow-hidden ${className}`}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 200 200"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <circle cx="170" cy="20" r="90" fill="none" stroke="var(--navy)" strokeWidth="0.6" />
        <circle cx="20" cy="190" r="70" fill="none" stroke="var(--navy)" strokeWidth="0.6" />
      </svg>
      <Icon size={28} className="relative text-navy" />
    </div>
  );
}
