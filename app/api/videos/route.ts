import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

declare global {
    var prisma: PrismaClient | undefined
}

const prisma = globalThis.prisma || new PrismaClient()

if(process.env.NODE_ENV !== 'production') globalThis.prisma = prisma

export async function GET(request: NextRequest){
    try {
        const videos = await prisma.video.findMany({
            orderBy: {createdAt: "desc"}
        })
        return NextResponse.json(videos)
    } catch (error) {
        return NextResponse.json({error: "Error fetching videos"}, {status: 500})
    } finally {
        await prisma.$disconnect()
    }
}

