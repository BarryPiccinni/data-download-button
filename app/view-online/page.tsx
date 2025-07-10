import type { Metadata } from "next"
import DataViewOnline from "./viewOnlinePage"

export const metadata: Metadata = {
  title: "View data in browser",
  description: "Users can view and print data.",
}

export default function viewOnline() {
  return <DataViewOnline />
}