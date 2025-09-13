# Cloudinary AI-Powered SaaS

A modern AI-powered video processing SaaS application built with Next.js, Cloudinary, and cutting-edge web technologies.

## 🚀 Features

- **AI Video Processing**: Leverage Cloudinary's AI capabilities for video compression and optimization
- **Video Upload & Management**: Seamless video upload with metadata tracking
- **Real-time Analytics**: Track original vs compressed file sizes and processing metrics
- **User Authentication**: Secure authentication powered by Clerk
- **Responsive Design**: Beautiful UI built with Tailwind CSS and DaisyUI
- **Database Integration**: Robust data persistence with Prisma and PostgreSQL

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with TypeScript
- **Authentication**: [Clerk](https://clerk.com/)
- **Database**: [Prisma](https://prisma.io/) + PostgreSQL (NeonDB)
- **File Storage**: [Cloudinary](https://cloudinary.com/) with AI video processing
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/) (recommended)

## 📋 Prerequisites

Before you begin, ensure you have:

- Node.js 18+ installed
- npm or yarn package manager
- A Cloudinary account
- A PostgreSQL database (NeonDB recommended)
- A Clerk account for authentication

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd ai-saas-project
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Set up environment variables

Copy the example environment file and fill in your credentials:

```bash
cp env.sample .env.local
```

Update `.env.local` with your actual values:

```env
# Database
DATABASE_URL="your-postgresql-database-url"

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your-cloudinary-cloud-name"
CLOUDINARY_API_KEY="your-cloudinary-api-key"
CLOUDINARY_API_SECRET="your-cloudinary-api-secret"

# Clerk (Add these)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-clerk-publishable-key"
CLERK_SECRET_KEY="your-clerk-secret-key"
```

### 4. Set up the database

Generate Prisma client and run migrations:

```bash
npx prisma generate
npx prisma db push
```

### 5. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📊 Database Schema

The application uses a simple Video model for storing video metadata:

```prisma
model Video {
  id             String   @id @default(cuid())
  title          String
  description    String?
  publicId       String
  originalSize   String
  compressedSize String
  duration       Float
  createdAt      DateTime @default(now())
  updatedAt      DateTime @updatedAt
}
```

## 🏗️ Project Structure

```
ai-saas-project/
├── app/                    # Next.js app directory
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # Reusable components
│   └── VideoCard.tsx       # Video display component
├── prisma/                 # Database schema and migrations
│   └── schema.prisma       # Prisma schema
├── public/                 # Static assets
├── styles/                 # Additional stylesheets
├── types/                  # TypeScript type definitions
├── middleware.ts           # Next.js middleware (Clerk auth)
└── package.json           # Dependencies and scripts
```

## 🔧 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code linting

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, Bitbucket)
2. Connect your repository to [Vercel](https://vercel.com/)
3. Add your environment variables in the Vercel dashboard
4. Deploy!

### Environment Variables for Production

Make sure to set all the required environment variables in your deployment platform:

- `DATABASE_URL`
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Cloudinary](https://cloudinary.com/) for AI-powered media processing
- [Clerk](https://clerk.com/) for authentication
- [Vercel](https://vercel.com/) for seamless deployment
- [Prisma](https://prisma.io/) for database management

## 📞 Support

If you have any questions or need help, please [open an issue](https://github.com/your-username/ai-saas-project/issues) on GitHub.
