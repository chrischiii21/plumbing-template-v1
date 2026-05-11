import * as React from "react"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { 
  Menu, ChevronDown, Phone, Settings, DollarSign, 
  Utensils, Bath, Droplet, Waves, Flame, Pipette,
  Building, Zap, Shield, Search, AlertCircle, Filter,
  Leaf, ClipboardList
} from "lucide-react"
import { topNavItems, mainNavItems, quickActions, type MegaMenuItem, type NavItem as NavItemType } from "@/config/navigation"
import { siteConfig } from "@/config/site"

const iconMap: Record<string, React.ReactNode> = {
  utensils: <Utensils className="h-4 w-4" />,
  bath: <Bath className="h-4 w-4" />,
  droplet: <Droplet className="h-4 w-4" />,
  waves: <Waves className="h-4 w-4" />,
  flame: <Flame className="h-4 w-4" />,
  pipette: <Pipette className="h-4 w-4" />,
  building: <Building className="h-4 w-4" />,
  zap: <Zap className="h-4 w-4" />,
  shield: <Shield className="h-4 w-4" />,
  search: <Search className="h-4 w-4" />,
  alert: <AlertCircle className="h-4 w-4" />,
  filter: <Filter className="h-4 w-4" />,
  leaf: <Leaf className="h-4 w-4" />,
  clipboard: <ClipboardList className="h-4 w-4" />,
  settings: <Settings className="h-4 w-4" />,
}

function UtilityLink({ item }: { item: NavItemType }) {
  return (
    <a 
      href={item.href} 
      className="text-[10px] font-black text-[#1C398E]/40 hover:text-[#3B82F6] uppercase tracking-[0.2em] transition-all px-3 py-2 relative z-50 inline-block active:scale-95"
      style={{ fontFamily: 'JetBrains Mono, monospace' }}
    >
      {item.title}
    </a>
  )
}

function NavItem({ item }: { item: MegaMenuItem }) {
  const [isOpen, setIsOpen] = React.useState(false)
  
  return (
    <div 
      className="relative h-full flex items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className={`flex items-center gap-1.5 px-5 h-full text-[13px] font-black uppercase tracking-widest transition-all cursor-pointer group ${isOpen ? 'text-[#3B82F6]' : 'text-[#1C398E] hover:text-[#3B82F6]'}`}>
        <a href={item.href} className="relative z-10">{item.title}</a>
        <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${isOpen ? 'rotate-180 opacity-100' : 'opacity-20 group-hover:opacity-100'}`} />
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 bg-white shadow-clayFloating p-8 z-[100] w-[900px] rounded-b-[40px] border-t border-[#3B82F6]/5">
          <div className="grid grid-cols-4 gap-6">
            {item.categories.map((category) => (
              <div key={category.title} className="bg-[#f8faff] rounded-[24px] p-5 shadow-clayInner group hover:shadow-clayButton transition-all duration-500">
                <div className="flex items-center gap-3 mb-4 pb-2 border-b border-[#3B82F6]/10">
                  <div className="w-8 h-8 rounded-full bg-white shadow-clayButton flex items-center justify-center text-[#3B82F6]">
                    {iconMap[category.icon] || <Settings className="h-4 w-4" />}
                  </div>
                  <h3 className="text-[10px] font-black text-[#1C398E] uppercase tracking-widest leading-tight">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((child) => (
                    <li key={child.href}>
                      <a href={child.href} className="text-[13px] font-medium text-[#1C398E]/60 hover:text-[#3B82F6] hover:translate-x-1 transition-all block" style={{ fontFamily: 'Montserrat, sans-serif' }}>{child.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 bg-white border-b border-[#3B82F6]/5 ${isScrolled ? 'h-20 shadow-clayHeader' : 'h-24 md:h-32'}`}>
      <div className="container mx-auto h-full px-6 flex flex-col justify-center relative overflow-visible">
        
        {/* Top Utility Row - ENSURE CLICKABLE */}
        <div className={`hidden lg:flex items-center justify-between border-b border-[#3B82F6]/5 transition-all duration-500 relative z-50 ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-10 opacity-100'}`}>
          <div className="flex items-center -ml-3">
            {topNavItems.slice(0, 4).map((item) => (
              <UtilityLink key={item.href} item={item} />
            ))}
          </div>
          <div className="flex items-center gap-4">
            {quickActions.map((action) => (
              <a key={action.href} href={action.href} className="px-5 py-2 rounded-full bg-[#f8faff] shadow-clayInner text-[10px] font-black text-[#3B82F6] hover:bg-white hover:shadow-clayButton transition-all uppercase tracking-widest flex items-center gap-2 relative z-50 active:scale-95">
                {action.icon === "settings" ? <Settings className="w-3.5 h-3.5" /> : <DollarSign className="w-3.5 h-3.5" />}
                {action.title}
              </a>
            ))}
          </div>
        </div>

        {/* Main Content Row */}
        <div className="flex items-center justify-between h-20 md:h-24 relative z-10">
          
          {/* Logo */}
          <a href="/" className="flex items-center gap-4 group shrink-0 relative z-20">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#f8faff] rounded-[20px] shadow-clayInner flex items-center justify-center p-3 group-hover:shadow-clayButton transition-all duration-500">
              <img src={siteConfig.logo?.src} alt="Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-sm md:text-xl text-[#1C398E] leading-none uppercase tracking-tighter" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {siteConfig.business?.name}
              </span>
              <span className="text-[9px] font-black text-[#3B82F6] uppercase tracking-[0.3em] mt-1.5" style={{ fontFamily: 'JetBrains Mono, monospace' }}>Expert Plumbing</span>
            </div>
          </a>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center h-14 px-4 bg-[#f8faff] rounded-full shadow-clayInner border border-[#3B82F6]/5 mx-8 relative z-20">
            {mainNavItems.map((item) => (
              <NavItem key={item.href} item={item} />
            ))}
          </nav>

          {/* Action Hub */}
          <div className="flex items-center gap-4 relative z-20">
            <a href={`tel:${siteConfig.contact?.phone}`} className="hidden sm:flex items-center gap-4 bg-[#f8faff] pl-2 pr-8 py-2 rounded-full shadow-clayInner group hover:shadow-clayButton hover:bg-white transition-all duration-500">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#16A34A] shadow-clayButton flex items-center justify-center text-white group-hover:rotate-12 transition-transform shrink-0">
                <Phone className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-[#1C398E]/40 uppercase tracking-[0.2em] leading-none mb-1">Available 24/7</span>
                <span className="text-sm md:text-base font-black text-[#1C398E] group-hover:text-[#3B82F6] transition-colors whitespace-nowrap">{siteConfig.contact?.phoneFormatted}</span>
              </div>
            </a>

            <a 
              href="/contact" 
              className="bg-[#3B82F6] text-white px-8 md:px-12 h-12 md:h-14 rounded-[20px] shadow-clayButton flex items-center justify-center text-[11px] font-black uppercase tracking-[0.2em] hover:brightness-105 hover:-translate-y-1 transition-all active:scale-95"
            >
              Get Quote
            </a>

            <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
              <SheetTrigger asChild className="lg:hidden ml-2">
                <Button variant="ghost" className="w-12 h-12 rounded-[16px] shadow-clayInner bg-[#f8faff] p-0 flex items-center justify-center">
                  <Menu className="h-6 w-6 text-[#1C398E]" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[400px] p-0 rounded-l-[40px] bg-[#f8faff] border-none shadow-clayFloating">
                <div className="p-10"><h3 className="font-black text-xl text-[#1C398E] uppercase tracking-widest mb-10">Navigation</h3><MobileNav onClose={() => setIsMobileOpen(false)} /></div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .shadow-clayHeader {
          box-shadow: 0 10px 30px rgba(28, 57, 142, 0.05);
        }
        .shadow-clayButton {
          box-shadow: 
            6px 6px 12px rgba(28, 57, 142, 0.08),
            -4px -4px 8px rgba(255, 255, 255, 1),
            inset 2px 2px 4px rgba(255, 255, 255, 0.6);
        }
        .shadow-clayInner {
          box-shadow: 
            inset 6px 6px 12px rgba(28, 57, 142, 0.04),
            inset -6px -6px 12px rgba(255, 255, 255, 1);
        }
        .shadow-clayFloating {
          box-shadow: 20px 20px 60px rgba(28, 57, 142, 0.1);
        }
      `}} />
    </header>
  )
}

function MobileNav({ onClose }: { onClose: () => void }) {
  return (
    <div className="space-y-6">
      <a href={`tel:${siteConfig.contact?.phone}`} className="flex items-center gap-4 bg-white p-6 rounded-[32px] shadow-clayButton active:shadow-clayInner transition-all">
        <div className="w-14 h-14 rounded-full bg-[#16A34A] flex items-center justify-center text-white shadow-clayButton"><Phone className="h-7 w-7" /></div>
        <span className="font-black text-xl text-[#1C398E]">{siteConfig.contact?.phoneFormatted}</span>
      </a>
      <div className="space-y-3">
        {mainNavItems.map((item) => (
          <a key={item.href} href={item.href} onClick={onClose} className="block bg-white p-6 rounded-[24px] shadow-clayHeader font-black text-[#1C398E] uppercase tracking-wide hover:text-[#3B82F6] active:shadow-clayInner transition-all">{item.title}</a>
        ))}
      </div>
      <a href="/contact" onClick={onClose} className="h-20 bg-[#3B82F6] rounded-[32px] shadow-clayButton flex items-center justify-center text-white font-black uppercase tracking-widest text-lg active:scale-95 transition-all">Get A Quote</a>
    </div>
  )
}
