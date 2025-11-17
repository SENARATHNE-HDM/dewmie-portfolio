import React from 'react'
export default function Footer(){
  return (
    <footer className="max-w-4xl mx-auto text-center py-8 text-sm text-gray-500">
      <p>© {new Date().getFullYear()} Dewmie Senarathne — Built with Next.js & Tailwind</p>
    </footer>
  )
}