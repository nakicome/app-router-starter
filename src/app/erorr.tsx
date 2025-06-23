'use client'

import { useRouter } from 'next/navigation'

export default function Error({ error }: { error: Error }) {
    const router = useRouter()
    const handleBackToHome = () => router.push('/')
    return (
        <>
            <p>{error.message}</p>
            <button onClick={handleBackToHome}>Return to Top Page</button>
        </>
    )
}
