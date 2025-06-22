import { ReactNode } from 'react'

export default function PublicLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <header>Public Page Header</header>
            <main>
                <div>{children}</div>
            </main>
            <footer>Public Page Footer</footer>
        </>
    )
}
