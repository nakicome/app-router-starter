import { Metadata } from 'next'
import ClientSection from './_components/ClientSection'
import { getBlog } from './fetcher'

export const metadata: Metadata = {
    title: 'Blog',
}

type Props = {
    params: Promise<{ blogId: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Page({ params, searchParams }: Props) {
    const { blogId } = await params
    const { category } = await searchParams
    const blog = await getBlog(blogId);

    return (
        <>
            <h1>Blog page</h1>
            <p>Blog ID: {blogId}</p>
            <p>Blog category: {category}</p>
            <p>Author: {blog.author}</p>
            <ClientSection />
        </>
    )
}
