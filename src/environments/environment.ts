/**
 * Configuración del entorno.
 * `apiUrl` es relativa: en producción Vercel reenvía /api/* al backend (ver vercel.json)
 * y en desarrollo lo hace `ng serve` con proxy.conf.json. Así la cookie de sesión
 * es del mismo dominio y funciona también en Safari/iPhone.
 */
export const environment = {
  apiUrl: '/api',
};
