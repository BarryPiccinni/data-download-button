"use client"

import { data } from "@/data/data"

export default function viewOnlinePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center border-b-4 border-blue-600 pb-6 mb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-2">{data.title}</h1>
        </div>

        {/* Summary */}
        <section className="mb-8">
          <p className="text-gray-700 leading-relaxed">{data.summary}</p>
        </section>

        {/* Print Button */}
        <div className="text-center mt-8 print:hidden">
          <button
            onClick={() => window.print()}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Print Data
          </button>
        </div>
      </div>
    </div>
  )
}
