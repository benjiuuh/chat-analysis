export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl text-center">
          About Based Report
        </h1>
        <div className="mt-16 mx-auto max-w-3xl">
          <div className="prose dark:prose-invert lg:prose-lg">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Based Report is your trusted source for unbiased, data-driven insights and analysis. 
              We believe in providing accurate, timely, and comprehensive information to help you 
              make informed decisions.
            </p>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
              Our team of experts works tirelessly to gather, analyze, and present data in a way 
              that's both accessible and actionable. We're committed to maintaining the highest 
              standards of accuracy and objectivity in all our reports.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
} 