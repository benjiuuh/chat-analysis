export default function Features() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl text-center">
          Features
        </h1>
        <div className="mt-16 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {[
              {
                name: 'Real-time Updates',
                description: 'Stay current with the latest information and trends as they happen.',
              },
              {
                name: 'Data-Driven Analysis',
                description: 'Make informed decisions with comprehensive data analysis and insights.',
              },
              {
                name: 'Customizable Reports',
                description: 'Get the information you need, presented exactly how you want it.',
              },
            ].map((feature) => (
              <div key={feature.name} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {feature.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
} 