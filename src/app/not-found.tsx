import Link from 'next/link'

export default function NotFound() {
    return (
        <>
            <p>Page not found.</p>
            <Link href="/">
                <button>Return to Top Page</button>
            </Link>
        </>
    )
}
