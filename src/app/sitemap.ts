import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://inthemoodpictures.com', lastModified: new Date() },
    { url: 'https://inthemoodpictures.com/about', lastModified: new Date() },
    { url: 'https://inthemoodpictures.com/contact', lastModified: new Date() },
    { url: 'https://inthemoodpictures.com/film', lastModified: new Date() },
    { url: 'https://inthemoodpictures.com/mood', lastModified: new Date() },
    { url: 'https://inthemoodpictures.com/news', lastModified: new Date() },
    { url: 'https://inthemoodpictures.com/tech', lastModified: new Date() },
  ]
}
