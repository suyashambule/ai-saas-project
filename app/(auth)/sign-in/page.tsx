"use client";

import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      {/* Sign In Form Container */}
      <div className="w-full max-w-md space-y-8 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <div className="text-center">
          <Link href="/" className="inline-block">
            <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">Cloudinary Video</h1>
          </Link>
          <h2 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Or{' '}
            <Link href="/sign-up" className="font-medium text-blue-600 hover:text-blue-500 dark:hover:text-blue-400">
              create a new account
            </Link>
          </p>
        </div>

        <div className="mt-8">
          <SignIn
            appearance={{
              elements: {
                formButtonPrimary:
                  "bg-blue-600 hover:bg-blue-700 text-white text-sm normal-case w-full",
                card: "bg-transparent shadow-none p-0",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
                socialButtonsBlockButton:
                  "border border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800 justify-center py-2",
                formFieldInput:
                  "block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-blue-500",
                formFieldLabel:
                  "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
                footerActionLink:
                  "text-blue-600 hover:text-blue-500 dark:hover:text-blue-400",
                dividerLine: "bg-gray-200 dark:bg-gray-700",
                dividerText: "text-gray-500 dark:text-gray-400",
                alternativeMethodsBlockButton: "border border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800 justify-center py-2",
                identityPreview: "text-gray-700 dark:text-gray-300",
                formFieldInfoText: "text-gray-600 dark:text-gray-400",
                formFieldWarningText: "text-yellow-600 dark:text-yellow-400",
                formFieldErrorText: "text-red-600 dark:text-red-400",
                footerActionText: "text-gray-600 dark:text-gray-400",
                socialButtonsProviderIcon: "grayscale invert dark:filter-none",
                socialButtonsBlockButtonText: "text-gray-700 dark:text-gray-300",
              },
            }}
            routing="path"
            path="/sign-in"
            signUpUrl="/sign-up"
            redirectUrl="/home"
          />
        </div>
      </div>

      {/* Right side - Removed the extra panel for a simpler look */}
    </div>
  );
} 