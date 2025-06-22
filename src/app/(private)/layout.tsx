import { ReactNode } from 'react'
import { redirect } from "next/navigation";

export default function PrivateLayout({ children }: { children: ReactNode }) {

    const isAuthorized = false;
    if (!isAuthorized) {
        redirect('/');
    }

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
