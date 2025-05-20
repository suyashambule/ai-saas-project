"use client";

import { SignUp } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Sign Up Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900 py-12">
        <div className="w-full max-w-md space-y-8 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <div className="text-center">
            <Link href="/" className="inline-block">
              <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">Cloudinary Video</h1>
            </Link>
            <h2 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white">
              Create your account
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Or{" "}
              <Link href="/sign-in" className="font-medium text-blue-600 hover:text-blue-500 dark:hover:text-blue-400">
                sign in to your account
              </Link>
            </p>
          </div>

          <div className="mt-8">
            <SignUp
              appearance={{
                elements: {
                   formButtonPrimary:
                    "bg-blue-600 hover:bg-blue-700 text-sm normal-case w-full",
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
              path="/sign-up"
              signInUrl="/sign-in"
              redirectUrl="/home"
            />
          </div>
        </div>
      </div>

      {/* Right side - Image/Pattern */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="max-w-lg text-white">
            <h2 className="text-3xl font-bold mb-6">
              Transform Your Video Content
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Join thousands of creators and businesses who trust our platform for their video management needs.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Unlimited video uploads</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Advanced video management</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Secure sharing options</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 