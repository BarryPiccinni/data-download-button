"use client"

import { Download, FileText, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { data } from "@/data/data"

export function DataDownload() {
  const generatePDF = async () => {
    // Create a new window with the content
    const newWindow = window.open("", "_blank")
    if (!newWindow) return

    const html = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${data.title} - Demo</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 8.5in;
            margin: 0 auto;
            padding: 0.5in;
            background: white;
        }
        
        .header {
            text-align: center;
            border-bottom: 3px solid #3b82f6;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        
        .title {
            font-size: 1.3em;
            color: #3b82f6;
            margin-bottom: 15px;
        }
        
        .section {
            margin-bottom: 25px;
        }
        
        .section-title {
            font-size: 1.4em;
            font-weight: bold;
            color: #1e293b;
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 5px;
            margin-bottom: 15px;
        }
        
        @media print {
            body {
                padding: 0.3in;
            }
            .header {
                border-bottom: 2px solid #3b82f6;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="title">${data.title}</div>
    </div>

    <div class="section">
        <h2 class="section-title">${data.title}</h2>
    </div>
</body>
</html>
    `

    newWindow.document.write(html)
    newWindow.document.close()

    // Auto-trigger print dialog
    setTimeout(() => {
      newWindow.print()
    }, 500)
  }

  const downloadJSON= async () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = `${data.title.replace(" ", "_")}_JSON_Download.json`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
  }

  const viewOnlineData = async () => {
    window.open("/view-online", "_blank")
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={`px-6 py-2 bg-transparent transition-all duration-300 hover:scale-105 hover:shadow-lg border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white`}
        >
          <Download className="w-4 h-4 mr-2" />
          Download Data
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className={`w-56 bg-white border-gray-200`}
      >
        <DropdownMenuItem
          onClick={generatePDF}
          className={`cursor-pointer hover:bg-gray-100 text-gray-900`}
        >
          <Printer className="w-4 h-4 mr-2" />
          Print/Save as PDF
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={downloadJSON}
          className={`cursor-pointer hover:bg-gray-100 text-gray-900`}
        >
          <FileText className="w-4 h-4 mr-2" />
          Download JSON Data
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={viewOnlineData}
          className={`cursor-pointer hover:bg-gray-100 text-gray-900`}
        >
          <FileText className="w-4 h-4 mr-2" />
          View Online Data
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
