import { Blog } from '@/core/domain/entity/blog'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ blogId: string }> },
) {
    try {
        const { blogId } = await params
        // 本来であればここにデータベースから記事情報を取得する処理を記述する
        const blog: Blog = {
            category: 'tech',
            id: blogId,
            name: 'blog name',
            author: 'author name',
        }
        return NextResponse.json({ message: '記事情報を取得しました。', blog }, { status: 200 })
    } catch (error) {
        console.error(error)
        return NextResponse.json(
            {
                message: '記事情報の取得に失敗しました。',
                blog: null,
            },
            { status: 500 },
        )
    }
}
