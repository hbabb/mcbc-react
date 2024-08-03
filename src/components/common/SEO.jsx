// mcbc-react/frontend/src/components/common/SEO.jsx
import React from 'react'
import { Helmet } from 'react-helmet'

export default function SEO({ title, description, name, type, keywords }) {
  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="name" content={name} />
      {/* Facebook Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
    </Helmet>
  )
}
