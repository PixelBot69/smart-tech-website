export default function Loading() {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Title placeholder */}
          <div className="h-10 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>
          
          {/* Description placeholder */}
          <div className="h-6 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
          <div className="h-6 bg-gray-200 rounded w-5/6 mb-8 animate-pulse"></div>
          
          {/* Image placeholder */}
          <div className="w-full h-80 bg-gray-200 rounded-lg mb-8 animate-pulse"></div>
          
          {/* Content placeholders */}
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
          </div>
          
          {/* Features placeholder */}
          <div className="mt-10">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-4 animate-pulse"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-4 h-4 mr-2 mt-1 bg-gray-200 rounded-full animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }