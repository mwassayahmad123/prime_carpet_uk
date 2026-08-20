import {
  COMPANY_NAME,
  LOGO,
  CONTACT,
  SERVICES,
  REVIEWS,
  FAQ_ITEMS,
  GALLERY_IMAGES,
  SERVICE_OPTIONS,
  NAV_LINKS,
  SITE_URL,
} from './site-data';

export function buildHomeViewModel() {
  const title = 'Prime Carpet Cleaning & Upholstery Steam Cleaning | Free Consultation';
  const description =
    'Prime Carpet Cleaning and Upholstery Steam Cleaning - Professional steam cleaning for carpets, sofas & upholstery. Book a free consultation today.';
  const ogImage = `${SITE_URL}${LOGO.src}`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: COMPANY_NAME,
    image: ogImage,
    url: SITE_URL,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    priceRange: '££',
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT.street,
      addressLocality: CONTACT.city,
      postalCode: CONTACT.postalCode,
      addressCountry: CONTACT.countryCode,
    },
    areaServed: 'London, UK',
    sameAs: [`https://wa.me/${CONTACT.whatsappHref}`],
  };

  return {
    title,
    description,
    siteUrl: SITE_URL,
    ogImage,
    schemaJson: JSON.stringify(schema),
    companyName: COMPANY_NAME,
    logo: LOGO,
    contact: CONTACT,
    services: SERVICES,
    reviews: REVIEWS,
    faqItems: FAQ_ITEMS.map((item, index) => ({ ...item, isOpen: index === 0 })),
    galleryImages: GALLERY_IMAGES,
    serviceOptions: SERVICE_OPTIONS,
    navLinks: NAV_LINKS,
    currentYear: new Date().getFullYear(),
  };
}
