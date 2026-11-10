# Palacio de Ferias — Feria virtual de empleo

> Proyecto académico desarrollado en equipo durante las prácticas del ciclo de **Desarrollo de Aplicaciones Web (DAW)**. No es una web oficial.
> Repositorio original: [PedroFMedac/salon-feria-frontend](https://github.com/PedroFMedac/salon-feria-frontend) · Backend: [salon-feria-backend](https://github.com/Raulalvarezweb/salon-feria-backend)

## Puesta en marcha

### Desarrollo local
```bash
npm install
npm start            # http://localhost:4200
```
`ng serve` reenvía las peticiones a `/api/*` al backend en `http://localhost:3000` (ver `proxy.conf.json`), así que arranca también el backend.

### Despliegue en Vercel
- Importa el repo en Vercel; la configuración está en `vercel.json` (build `npm run build`, salida `dist/palacio-de-ferias/browser`).
- En `vercel.json`, la regla `/api/:path*` apunta a la URL del backend en Render. Al pasar por el mismo dominio, la cookie de sesión funciona en todos los navegadores.
- La URL de la API se configura en `src/environments/environment.ts`.

---

## Descripción

**PalacioDeFerias** es una plataforma frontend creada con **Angular** para gestionar una feria virtual. Permite a las empresas configurar stands virtuales y a los visitantes interactuar con estos stands. Los usuarios pueden subir documentos, compartir enlaces a reuniones virtuales y más.

## Tabla de contenido

1. [Tecnologías Utilizadas](#tecnologías-utilizadas)
2. [Uso](#uso)
3. [Estructura del Proyecto](#estructura-del-proyecto)


## Tecnologías Utilizadas

- **Angular CLI** (v17.3.9)
- **TypeScript**
- **Bootstrap**
- **RxJS** para el manejo de observables
- **Node.js** como entorno de desarrollo
- **HTML5** y **CSS3**

## Uso

La aplicación permite a las empresas:

- Subir imágenes para mostrar en stands virtuales.
- Compartir documentos relevantes con los visitantes.
- Configurar enlaces a reuniones virtuales (Zoom, Google Meet, etc.).

## Estructura del prouecto

- **src/app**: Directorio principal con componentes y servicios.
   - **components**: Contiene todos los componentes visuales.
   - **services**: Contiene todos los servicios utilizados en la aplicación.
- **assets/**: Almacena las imágenes y estilos globales.
- **environments/**: Archivos de configuración para diferentes entornos (desarrollo/producción).
