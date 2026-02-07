(function () {
      const img = document.getElementById('apple');
      const INTERVAL_MS = 8000; // cada 8 segundos

      if (!img) return;

      // Lanza la animación de pulso: quitar clase, forzar reflow, volver a añadir
      function triggerPulse() {
        img.classList.remove('pulse');
        // forzar reflow para que la animación pueda reiniciarse
        void img.offsetWidth;
        img.classList.add('pulse');
      }

      // Disparar el primer pulso inmediatamente (opcional)
      triggerPulse();

      // Programar pulsos cada 8s
      const intervalId = setInterval(() => {
        // si el usuario prefiere reducir movimiento, no animar
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          clearInterval(intervalId);
          return;
        }
        triggerPulse();
      }, INTERVAL_MS);

      // Limpiar la clase cuando termine la animación para dejar DOM "limpio"
      img.addEventListener('animationend', () => {
        img.classList.remove('pulse');
      });
    })();