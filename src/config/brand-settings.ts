// ===========================================
// SITE CONFIGURATION
// Static configuration to ensure browser compatibility
// ===========================================

export const siteConfig = {
  "business": {
    "name": "Plumbing Template",
    "fullName": "ABC Company Heating and Cooling",
    "tagline": "Heating and Cooling",
    "description": "Professional HVAC Services"
  },
  "location": {
    "city": "New York",
    "state": "SC",
    "address": "3648 Rorance Road",
    "fullAddress": "3648 Rorance Road, New York, SC 29170"
  },
  "contact": {
    "email": "dealer@domain.com",
    "phone": "0123456789",
    "phoneFormatted": "012-345-6789"
  },
  "colors": {
    "primary": "#0b273f",
    "secondary": "#196496",
    "tertiary": "#d4d2d2",
    "quaternary": "#fafeff",
    "accent": "#A3032B",
    "highlight": "#45f9ff"
  },
  "logo": {
    "src": "https://ntv-template-1.vercel.app/logo/dealer-logo.avif",
    "alt": "Acme Inc. Logo"
  },
  "seo": {
    "siteName": "Acme Inc.",
    "defaultTitle": "Acme Inc. | Digital Marketing in Denver",
    "defaultDescription": "Denver's trusted digital marketing agency.",
    "keywords": "digital marketing Denver",
    "siteUrl": "https://acmeinc.com",
    "ogImage": "https://acmeinc.com/og-image.jpg",
    "twitterHandle": "@acmeinc"
  }
};

export function getLocationText(text: string): string {
  if (!text) return ""
  return text
    .replaceAll("{city}", siteConfig.location?.city ?? "")
    .replaceAll("{state}", siteConfig.location?.state ?? "")
    .replaceAll("{business}", siteConfig.business?.name ?? "")
    .replaceAll("{fullName}", siteConfig.business?.fullName ?? "")
    .replaceAll("{phone}", siteConfig.contact?.phoneFormatted ?? "")
    .replaceAll("{phoneRaw}", siteConfig.contact?.phone ?? "")
    .replaceAll("{email}", siteConfig.contact?.email ?? "")
    .replaceAll("{address}", siteConfig.location?.fullAddress ?? "")
}

export function processLocationArray(arr: string[]): string[] {
  return arr.map(getLocationText)
}
