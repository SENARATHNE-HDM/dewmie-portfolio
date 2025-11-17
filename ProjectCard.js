import React from 'react'
export default function ProjectCard({title, description, link}){
  return (
    <div className="card">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      {link && <a href={link} className="mt-4 inline-block text-blue-600">View on GitHub</a>}
    </div>
  )
}