import {
  COMPANY_NAME,
  LOGO,
  CONTACT,
  REVIEWS,
  FAQ_ITEMS,
  GALLERY_IMAGES,
  SERVICE_OPTIONS,
  NAV_LINKS,
  SITE_URL,
  SERVICE_AREA,
  SERVICE_AREA_TEXT,
} from './site-data';
import { SERVICES_PAGES, ServicePage } from './services-data';

function buildLocalBusinessSchema(ogImage: string) {
  return {
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
    areaServed: `${SERVICE_AREA}, UK`,
    sameAs: [`https://wa.me/${CONTACT.whatsappHref}`],
  };
}

function sharedLayoutData() {
  return {
    companyName: COMPANY_NAME,
    logo: LOGO,
    contact: CONTACT,
    navLinks: NAV_LINKS,
    serviceAreaText: SERVICE_AREA_TEXT,
    servicesNav: SERVICES_PAGES.map((s) => ({ name: s.name, slug: s.slug })),
    currentYear: new Date().getFullYear(),
  };
}

export function buildHomeViewModel() {
  const title = 'Carpet Cleaning in London | Professional & Reliable Cleaners';
  const description =
    'Top-rated carpet, sofa, and upholstery cleaning in London. Prime Carpet Cleaning provides professional cleaning for homes and businesses. Get a free quote today.';
  const ogImage = `${SITE_URL}${LOGO.src}`;

  return {
    ...sharedLayoutData(),
    title,
    description,
    siteUrl: SITE_URL,
    canonicalUrl: `${SITE_URL}/`,
    ogImage,
    schemaJson: JSON.stringify(buildLocalBusinessSchema(ogImage)),
    services: SERVICES_PAGES.map((s) => ({
      title: s.name,
      description: s.intro,
      icon: s.icon,
      slug: s.slug,
    })),
    reviews: REVIEWS,
    faqItems: FAQ_ITEMS.map((item, index) => ({ ...item, isOpen: index === 0 })),
    galleryImages: GALLERY_IMAGES,
    serviceOptions: SERVICE_OPTIONS,
  };
}

export function buildAboutViewModel() {
  const title = `About Us | ${COMPANY_NAME}`;
  const description = `Learn about ${COMPANY_NAME} — trusted carpet and upholstery steam cleaning specialists serving ${SERVICE_AREA}.`;
  const ogImage = `${SITE_URL}${LOGO.src}`;

  return {
    ...sharedLayoutData(),
    title,
    description,
    siteUrl: SITE_URL,
    canonicalUrl: `${SITE_URL}/about/`,
    ogImage,
    schemaJson: JSON.stringify(buildLocalBusinessSchema(ogImage)),
    services: SERVICES_PAGES.map((s) => ({ name: s.name, slug: s.slug })),
  };
}

export function buildServiceViewModel(service: ServicePage) {
  const title = `${service.keyword} | ${COMPANY_NAME}`;
  const ogImage = `${SITE_URL}${LOGO.src}`;
  const canonicalUrl = `${SITE_URL}/services/${service.slug}/`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    name: service.keyword,
    description: service.metaDescription,
    areaServed: `${SERVICE_AREA}, UK`,
    url: canonicalUrl,
    provider: {
      '@type': 'LocalBusiness',
      name: COMPANY_NAME,
      telephone: CONTACT.phone,
      url: SITE_URL,
    },
  };

  return {
    ...sharedLayoutData(),
    title,
    description: service.metaDescription,
    siteUrl: SITE_URL,
    canonicalUrl,
    ogImage,
    schemaJson: JSON.stringify(schema),
    service,
    otherServices: SERVICES_PAGES.filter((s) => s.slug !== service.slug),
    galleryImages: GALLERY_IMAGES,
    reviews: REVIEWS,
  };
}
