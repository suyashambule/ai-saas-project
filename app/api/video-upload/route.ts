import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';
import { auth } from '@clerk/nextjs/server';
import { PrismaClient } from '@prisma/client';

// PrismaClient is instantiated at the module level
// Best practice for Next.js with Prisma

declare global {
    var prisma: PrismaClient | undefined
}

const prisma = globalThis.prisma || new PrismaClient()

if(process.env.NODE_ENV !== 'production') globalThis.prisma = prisma

interface CloudinaryUploadResult {
    public_id: string;
    bytes: number;
    duration?: number
    [key: string]: any
}

export async function POST(request: NextRequest) {

    // Configuration - Moved inside the handler
    // Only configure if environment variables are available (runtime)
    if(
        process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME &&
        process.env.CLOUDINARY_API_KEY &&
        process.env.CLOUDINARY_API_SECRET
    ) {
        cloudinary.config({
            cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View Credentials' below to copy your API secret
        });
    } else {
         return NextResponse.json({error: "Cloudinary credentials not found"}, {status: 500})
    }

    try {

        //todo to check user


        const formData = await request.formData();
        const file = formData.get("file") as File | null;
        const title = formData.get("title") as string;
        const description = formData.get("description") as string;
        const originalSize = formData.get("originalSize") as string;

        if(!file){
            return NextResponse.json({error: "File not found"}, {status: 400})
        }

        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)

        // Ensure cloudinary is configured before uploading
        if (!cloudinary.config().cloud_name) {
             return NextResponse.json({error: "Cloudinary configuration failed"}, {status: 500})
        }

        const result = await new Promise<CloudinaryUploadResult>(
            (resolve, reject) => {
                const uploadStream = cloudinary.uploader.upload_stream(
                    {
                        resource_type: "video",
                        folder: "video-uploads",
                        transformation: [
                            {quality: "auto", fetch_format: "mp4"},
                        ]
                    },
                    (error, result) => {
                        if(error) reject(error);
                        else resolve(result as CloudinaryUploadResult);
                    }
                )
                uploadStream.end(buffer)
            }
        )
        const video = await prisma.video.create({
            data: {
                title,
                description,
                publicId: result.public_id,
                originalSize: originalSize,
                compressedSize: String(result.bytes),
                duration: result.duration || 0,
            }
        })
        return NextResponse.json(video)

    } catch (error) {
        console.log("UPload video failed", error)
        return NextResponse.json({error: "UPload video failed"}, {status: 500})
    } finally{
        await prisma.$disconnect()
    }

}
