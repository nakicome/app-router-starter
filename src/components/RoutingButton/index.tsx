'use client'

import { useRouter } from 'next/navigation'

type Props = {
    path: string
}

export default function RoutingButton({ path }: Props) {
    const router = useRouter()
    return (
        <button onClick={() => router.push(path)}>
            Routing to {path}
        </button>
    )
}
