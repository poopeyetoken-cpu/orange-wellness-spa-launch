export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/918921043599?text=Hello%20My%20Spa%20Ayurvedic%20Hub%2C%20I%27d%20like%20to%20book%20an%20appointment."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-4 right-4 z-50 group flex min-h-11 items-center gap-3 md:bottom-6 md:right-6"
    >
      <span className="hidden md:inline-block bg-ink/90 text-cream text-fluid-xs tracking-[0.16em] uppercase px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity">
        Chat on WhatsApp
      </span>
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)] hover:scale-105 transition-transform">
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <svg viewBox="0 0 32 32" className="w-7 h-7 relative" fill="white" aria-hidden="true">
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.687.244-1.045 0-.171-.043-.343-.085-.486-.1-.27-1.49-.99-1.776-.99zM16.288 6.978c-5.18 0-9.39 4.21-9.39 9.39 0 1.776.498 3.495 1.43 5l-1.79 5.302 5.49-1.748a9.31 9.31 0 0 0 4.26 1.022h.013c5.18 0 9.39-4.21 9.39-9.39 0-2.51-.974-4.87-2.747-6.643a9.36 9.36 0 0 0-6.656-2.733zm0 17.184a7.79 7.79 0 0 1-3.97-1.083l-.286-.17-2.95.967.967-2.864-.187-.3a7.66 7.66 0 0 1-1.176-4.115c0-4.27 3.467-7.738 7.738-7.738 2.064 0 4 .8 5.464 2.265s2.265 3.4 2.265 5.466c0 4.27-3.495 7.572-7.766 7.572z" />
        </svg>
      </span>
    </a>
  );
}

