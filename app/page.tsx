"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2 } from "lucide-react"
import { DataDownload } from "@/components/data-download"

export default function DownloadDemo() {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold">Data Download Button</h1>
          </div>
          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Code2 className="w-5 h-5" />
                <span>Interactive Elements</span>
              </CardTitle>
              <CardDescription>A download button which offers instant print, preview and download JSON data options.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                 <DataDownload />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
