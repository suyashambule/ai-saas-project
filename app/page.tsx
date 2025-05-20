"use client"
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              Transform Your Video Content
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Upload, manage, and share your videos with our powerful cloud platform. 
              Built for creators, businesses, and everyone in between.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/sign-up" 
                className="px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Get Started Free
              </Link>
              <Link 
                href="/demo" 
                className="px-8 py-4 bg-white text-blue-600 rounded-lg text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors duration-200"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Everything You Need for Video Management
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-700 hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Upload</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Drag and drop your videos or choose files to upload instantly. Support for all major video formats.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-700 hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Management</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Organize your videos with tags, categories, and custom metadata. Find anything in seconds.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-700 hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Sharing</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Share your videos with anyone using secure, customizable links. Control who can view your content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">10M+</div>
              <div className="text-gray-600 dark:text-gray-300">Videos Uploaded</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">50K+</div>
              <div className="text-gray-600 dark:text-gray-300">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">99.9%</div>
              <div className="text-gray-600 dark:text-gray-300">Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-300">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join thousands of creators and businesses who trust our platform for their video management needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/sign-up" 
              className="px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Start Free Trial
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg text-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
