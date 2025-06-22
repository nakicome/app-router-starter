import { ReactNode } from 'react'

export default function PrivateLayout({ children }: { children: ReactNode }) {

    return (
        <>
            <header>Private Page Header</header>
            <main>
                <div>{children}</div>
            </main>
            <footer>Private Page Footer</footer>
        </>
    )
}
