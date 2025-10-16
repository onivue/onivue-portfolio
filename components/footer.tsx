import { Container } from '@/components/container'

export function Footer() {
    return (
        <footer className="border-t-4 border-black py-12 dark:border-white">
            <Container>
                <div className="flex flex-col items-center justify-center space-y-4">
                    <p className="text-center font-medium">Designed by Albin Hoti</p>
                    <p className="text-sm opacity-70">© {new Date().getFullYear()} • ONIVUE</p>
                </div>
            </Container>
        </footer>
    )
}
