import { Container } from '@/components/container'

const skills = [
    { name: 'React', category: 'Framework' },
    { name: 'Next.js', category: 'Framework' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'Firebase', category: 'Backend' },
    { name: 'GitHub', category: 'Tools' },
    { name: 'Node.js', category: 'Runtime' },
    { name: 'Vercel', category: 'Platform' },
    { name: 'VS Code', category: 'Tools' },
    { name: 'Figma', category: 'Design' },
    { name: 'Biome', category: 'Tools' },
    { name: 'PostgreSQL', category: 'Database' },
]

export function Skills() {
    return (
        <section className="py-24">
            <Container>
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-black uppercase tracking-tight">SKILLS</h2>
                        <p className="max-w-2xl text-lg">
                            The use of the latest technologies is important to me. These are the
                            tools I am most familiar with.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                        {skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="border-4 border-black bg-white p-6 shadow-retro-md hover:translate-x-1 hover:translate-y-1 hover:shadow-none dark:border-white dark:bg-black"
                            >
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold uppercase">{skill.name}</h3>
                                    <p className="text-sm opacity-70">{skill.category}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}
