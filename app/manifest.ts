import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'onivue - Albin Hoti Portfolio',
        short_name: 'onivue',
        description: 'Portfolio of Albin Hoti - Full Stack Developer',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#121212',
        icons: [
            {
                src: '/web-app-manifest-192x192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'maskable',
            },
            {
                src: '/web-app-manifest-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable',
            },
        ],
    }
}
