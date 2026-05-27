import { useLocation } from "wouter";
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE } from "@/i18n/translations";
import logoUrl from "@assets/image_1777543805589.png";

export default function Footer() {
  const [, setLocation] = useLocation();
  const { lang } = useLanguage();
  const t = SITE[lang].footer;

  const navigate = (href: string) => {
    setLocation(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Brand */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 bg-white p-3 rounded-xl w-fit">
              <img src={logoUrl} alt="The Milestone Sr. Sec. School Logo" className="h-12 w-auto object-contain" />
              <div className="flex flex-col text-primary">
                <span className="font-serif font-bold text-lg leading-tight">The Milestone</span>
                <span className="text-xs font-medium tracking-wide">Sr. Sec. School · CBSE</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed text-sm">{t.tagline}</p>
            <div className="flex gap-3 mt-1">
              <a href="https://www.facebook.com/people/The-Milestone-Sr-Sec-School/61560385614485/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-primary-foreground/10 p-2.5 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Facebook size={17} />
              </a>
              <a href="https://www.instagram.com/the_milestone_sr.sec.school/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-primary-foreground/10 p-2.5 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Instagram size={17} />
              </a>
              <a href="https://www.youtube.com/@TheMilestoneSrSecSchool" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="bg-primary-foreground/10 p-2.5 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Youtube size={17} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="font-serif text-xl font-bold border-b border-primary-foreground/20 pb-4">{t.quickLinksTitle}</h3>
            <ul className="flex flex-col gap-3">
              {t.quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <button onClick={() => navigate(href)} className="text-primary-foreground/80 hover:text-secondary transition-colors flex items-center gap-2 text-sm group text-left">
                    <ArrowRight size={13} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-secondary" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div className="flex flex-col gap-6">
            <h3 className="font-serif text-xl font-bold border-b border-primary-foreground/20 pb-4">{t.academicsTitle}</h3>
            <ul className="flex flex-col gap-3 text-sm text-primary-foreground/80">
              {t.academics.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-6">
            <h3 className="font-serif text-xl font-bold border-b border-primary-foreground/20 pb-4">{t.contactTitle}</h3>
            <ul className="flex flex-col gap-4 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin size={17} className="text-secondary flex-shrink-0 mt-0.5" />
                <span>Opp. Pawan Vatika, Khurana Road,<br />Kaithal, Haryana 136027</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={17} className="text-secondary flex-shrink-0" />
                <a href="tel:+919812574766" className="hover:text-secondary transition-colors">+91 98125-74766</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={17} className="text-secondary flex-shrink-0" />
                <a href="tel:+919306527660" className="hover:text-secondary transition-colors">+91 93065-27660</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={17} className="text-secondary flex-shrink-0" />
                <a href="mailto:themilestoneKtl@gmail.com" className="hover:text-secondary transition-colors">themilestoneKtl@gmail.com</a>
              </li>
              <li className="flex items-start gap-3 pt-1">
                <Clock size={17} className="text-secondary flex-shrink-0 mt-0.5" />
                <span><strong className="text-primary-foreground">{t.hours}</strong><br />{t.hoursVal}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} {t.copyright}</p>
          <p className="text-xs">{t.designedWith}</p>
        </div>
      </div>
    </footer>
  );
}
