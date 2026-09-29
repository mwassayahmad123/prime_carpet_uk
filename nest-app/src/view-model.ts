import { existsSync, readdirSync } from 'fs';
import { join } from 'path';
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
import { BLOG_POSTS, BlogPost } from './blog-data';

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.avif', '.svg'];

function getAboutGalleryImages() {
  const dir = join(__dirname, '..', 'public', 'images', 'about-gallery');
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((file) => IMAGE_EXTENSIONS.includes(file.slice(file.lastIndexOf('.')).toLowerCase()))
    .sort()
    .map((file) => ({ src: `/images/about-gallery/${file}` }));
}

function stripHtml(html: string) {
  return html.replace(/<[^>]+>/g, '');
}

function getFirstImage(...segments: string[]) {
  const dir = join(__dirname, '..', 'public', 'images', ...segments);
  if (!existsSync(dir)) return undefined;
  const file = readdirSync(dir)
    .filter((f) => IMAGE_EXTENSIONS.includes(f.slice(f.lastIndexOf('.')).toLowerCase()))
    .sort()[0];
  return file ? `/images/${segments.join('/')}/${file}` : undefined;
}

function getServiceImage(slug: string, folder: string) {
  return getFirstImage('services', slug, folder);
}

function getBlogImage(slug: string) {
  return getFirstImage('blog', slug);
}

function blogCardData(p: BlogPost) {
  return {
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    publishedDate: p.publishedDate,
    readTime: p.readTime,
    image: getBlogImage(p.slug),
  };
}

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
    sameAs: [`https://wa.me/${CONTACT.whatsappHref}`, CONTACT.facebook],
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
      description: stripHtml(s.intro),
      icon: s.icon,
      slug: s.slug,
    })),
    reviews: REVIEWS,
    faqItems: FAQ_ITEMS.map((item, index) => ({ ...item, isOpen: index === 0 })),
    galleryImages: GALLERY_IMAGES,
    serviceOptions: SERVICE_OPTIONS,
    aboutImage: getFirstImage('about-hero'),
    blogHighlights: BLOG_POSTS.slice(0, 3).map(blogCardData),
  };
}

export function buildAboutViewModel() {
  const title = 'About Prime Carpet Cleaning | Trusted London Cleaners';
  const description =
    'Learn about Prime Carpet Cleaning, a trusted carpet cleaning company in London providing carpet, upholstery, and steam cleaning services for homes and businesses.';
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
    aboutGalleryImages: getAboutGalleryImages(),
  };
}

export function buildServiceViewModel(service: ServicePage) {
  const title = service.seoTitle || `${service.keyword} | ${COMPANY_NAME}`;
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
    service: {
      ...service,
      heroImage: getServiceImage(service.slug, 'hero'),
      whyChooseImage: getServiceImage(service.slug, 'why-choose'),
    },
    otherServices: SERVICES_PAGES.filter((s) => s.slug !== service.slug),
    galleryImages: GALLERY_IMAGES,
    reviews: REVIEWS,
  };
}

export function buildBlogViewModel() {
  const title = `Blog | ${COMPANY_NAME}`;
  const description =
    'Cleaning tips, stain removal guides, and practical advice from Prime Carpet Cleaning — your local carpet, rug, and upholstery experts in London.';
  const ogImage = `${SITE_URL}${LOGO.src}`;

  return {
    ...sharedLayoutData(),
    title,
    description,
    siteUrl: SITE_URL,
    canonicalUrl: `${SITE_URL}/blog/`,
    ogImage,
    schemaJson: JSON.stringify(buildLocalBusinessSchema(ogImage)),
    posts: BLOG_POSTS.map(blogCardData),
  };
}

export function buildBlogPostViewModel(post: BlogPost) {
  const title = post.seoTitle || `${post.title} | ${COMPANY_NAME}`;
  const image = getBlogImage(post.slug);
  const ogImage = image ? `${SITE_URL}${image}` : `${SITE_URL}${LOGO.src}`;
  const canonicalUrl = `${SITE_URL}/blog/${post.slug}/`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    image: ogImage,
    mainEntityOfPage: canonicalUrl,
    author: { '@type': 'Organization', name: COMPANY_NAME },
    publisher: { '@type': 'Organization', name: COMPANY_NAME, url: SITE_URL },
  };

  return {
    ...sharedLayoutData(),
    title,
    description: post.metaDescription,
    siteUrl: SITE_URL,
    canonicalUrl,
    ogImage,
    schemaJson: JSON.stringify(schema),
    post: { ...post, image },
    otherPosts: BLOG_POSTS.filter((p) => p.slug !== post.slug).map(blogCardData),
    galleryImages: GALLERY_IMAGES,
    reviews: REVIEWS,
  };
}
