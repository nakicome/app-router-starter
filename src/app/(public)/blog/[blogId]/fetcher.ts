export async function getBlog(blogId: string) {
    const res = await fetch(`http://localhost:3000/api/blog/${blogId}`)
    const data = await res.json()
    if (res.status !== 200) {
        throw new Error(data.message)
    }
    return data.blog
}
