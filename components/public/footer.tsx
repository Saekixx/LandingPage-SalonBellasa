import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full bg-[#1e2531] text-white font-sans py-12 px-6 relative mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-sm">
        {/* Columna 1: Logo y Tagline */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-linear-to-br from-[#d946ef] via-[#a855f7] to-[#7c3aed] rounded-lg flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="white"
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2l2.4 7.2h7.6l-6.15 4.5 2.4 7.2-6.15-4.5-6.15 4.5 2.4-7.2-6.15-4.5h7.6z" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tighter">
              Aura Beauty
            </span>
          </div>
          <p className="text-gray-300 leading-relaxed max-w-xs">
            Elevando los estándares de belleza y bienestar personal con un toque
            of exclusividad y cuidado.
          </p>
        </div>

        {/* Columna 2: Explorar */}
        <div className="flex flex-col space-y-3">
          <h4 className="font-semibold text-white mb-2">Explorar</h4>
          <Link
            href="/servicios"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Servicios
          </Link>
          <Link
            href="/productos"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Productos
          </Link>
          <Link
            href="/#galeria"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Galería
          </Link>
          <Link
            href="/#nosotros"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Nosotros
          </Link>
        </div>

        {/* Columna 3: Soporte */}
        <div className="flex flex-col space-y-3">
          <h4 className="font-semibold text-white mb-2">Soporte</h4>
          <Link
            href="/faq"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Preguntas Frecuentes
          </Link>
          <Link
            href="/terminos"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Términos
          </Link>
          <Link
            href="/privacidad"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Privacidad
          </Link>
          <Link
            href="/#contactos"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Contactos
          </Link>
        </div>

        {/* Columna 4: Contacto */}
        <div className="flex flex-col space-y-3">
          <h4 className="font-semibold text-white mb-2">Contacto</h4>

          <div className="flex items-center space-x-3 text-gray-300">
            <Mail className="w-4 h-4 shrink-0" />
            <span>info@aurabeauty.com</span>
          </div>

          <div className="flex items-center space-x-3 text-gray-300">
            <Phone className="w-4 h-4 shrink-0" />
            <span>+52 (555) 123-4567</span>
          </div>

          <div className="flex items-center space-x-3 text-gray-300">
            <MapPin className="w-4 h-4 shrink-0" />
            <span>Polanco, Ciudad de México</span>
          </div>
        </div>
      </div>

      {/* Botón flotante de WhatsApp */}
      <Link
        href="https://wa.me/525551234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#32D35A] rounded-full flex items-center justify-center shadow-lg hover:bg-[#2bc250] transition-colors z-50 group"
        aria-label="Contactar por WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          fill="white"
          className="w-7 h-7"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.001 5.45-4.436 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.263-1.644a11.82 11.82 0 005.783 1.513h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </Link>
    </footer>
  );
}

export default Footer;
