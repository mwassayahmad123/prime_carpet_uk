export const COMPANY_NAME = 'Prime Carpet Cleaning and Upholstery Steam Cleaning';

export const LOGO = {
  src: '/images/logo.png',
  alt: COMPANY_NAME,
};

export const CONTACT = {
  address: 'United Kingdom',
  street: '123 Prime Street',
  city: 'London',
  postalCode: 'SW1A 1AA',
  countryCode: 'GB',
  phone: '+44 7846 364007',
  phoneHref: '+447846364007',
  whatsapp: '+44 7846 364007',
  whatsappHref: '447846364007',
  email: 'primecleanu@gmail.com',
  facebook: 'https://www.facebook.com/profile.php?id=61594301987751',
  linkedin: 'https://www.linkedin.com/company/prime-carpet-cleaning-london/',
  instagram: 'https://www.instagram.com/primecleanu',
  googleBusiness: 'https://maps.app.goo.gl/brhikNmYH2Ha5rPGA',
  googleReviews: 'https://maps.app.goo.gl/apRdokegmd7Rm7VeA',
};

// Homepage "Our Services" card copy (HTML allowed for internal links).
export const HOME_SERVICE_BLURBS: Record<string, string> = {
  'carpet-cleaning':
    'Our <a href="/services/carpet-cleaning/">professional carpet cleaning in London</a> helps remove built-up dirt, stains, allergens, and everyday marks from your carpets. We use professional extraction equipment to clean deep into the fibres while helping your carpets look fresher and feel cleaner. Whether you need carpet cleaning for your home, rental property, or business, we provide a thorough, professional service suited to your carpet\'s type and condition.',
  'upholstery-sofa-cleaning':
    'Sofas, armchairs, and other fabric furniture collect dust, dirt, and everyday marks over time. Our upholstery and sofa cleaning service helps refresh your furniture without being harsh on the fabric. From family sofas to office seating, we carefully select the right cleaning method for the material to help restore freshness, colour, and comfort.',
  'rug-cleaning':
    'Different rugs need different levels of care. Our rug cleaning service removes dirt, stains, and odours while protecting the rug\'s fibres and colours. Whether you have an everyday rug or a more delicate piece, we assess it first and use a suitable cleaning method to give it the care it needs.',
  'mattress-cleaning':
    'Your mattress can collect dust, allergens, sweat, and odours over time. Professional mattress cleaning helps freshen the surface and remove unwanted build-up, creating a cleaner sleeping environment for your home. We clean mattresses of different sizes and can recommend the right approach based on their condition and fabric.',
  'stain-removal':
    'Some stains need more than regular carpet cleaning. Our stain removal service tackles common marks such as wine, coffee, mud, food, and <a href="/blog/how-to-remove-pet-urine-stains-from-carpet/">pet accidents using treatments suited to the carpet</a> or fabric. We assess the stain and material before treatment, helping us choose an approach that is effective while protecting the surface wherever possible.',
  'end-of-tenancy-cleaning':
    'Moving out of a rented property? Our end-of-tenancy carpet and upholstery cleaning helps freshen the areas that often show the most wear before you hand back the keys. We can clean carpets and upholstered furnishings to help leave the property looking clean and well cared for. Service availability depends on the property and cleaning requirements.',
};

// Update to the real domain once the site is live — used for canonical URLs,
// Open Graph tags, and the JSON-LD schema.
export const SITE_URL = 'https://primecarpetcleaning.co.uk';

export const SERVICE_AREA = 'London';
export const SERVICE_AREA_TEXT = 'Proudly Serving London & Surrounding Areas';

export const REVIEWS = [
  {
    name: 'Sarah Mitchell',
    rating: 5,
    stars: '★★★★★',
    text: 'Our carpets look brand new! The team was professional, on time, and the steam cleaning made a huge difference.',
  },
  {
    name: 'James Thompson',
    rating: 5,
    stars: '★★★★★',
    text: 'Booked a free consultation and they explained everything clearly. Highly recommend Prime Carpet Cleaning to everyone.',
  },
  {
    name: 'Emily Clarke',
    rating: 5,
    stars: '★★★★★',
    text: 'They cleaned our sofa and carpets — both look amazing. Easy booking via WhatsApp and fantastic results.',
  },
];

export const FAQ_ITEMS = [
  {
    question: 'Where can I hire a carpet cleaner near me?',
    answer:
      'Prime Carpet Cleaning and Upholstery Steam Cleaning offers local, professional carpet, rug, and upholstery cleaning services across London and surrounding areas. Whether you need residential, commercial, or <a href="/services/end-of-tenancy-cleaning/">end-of-tenancy cleaning</a>, you can book directly by calling us or submitting a quote form.',
  },
  {
    question: 'What cleaning services do you offer?',
    answer:
      'We provide carpet cleaning, upholstery and sofa cleaning, <a href="/services/rug-cleaning/">rug cleaning</a>, mattress cleaning, stain removal, and end-of-tenancy carpet and <a href="/services/upholstery-sofa-cleaning/">upholstery cleaning</a>. We serve both residential customers and commercial clients across London.',
  },
  {
    question: 'Is it worth getting carpets professionally cleaned?',
    answer:
      'Yes, carpet cleaning is well worth the investment. Professional carpet cleaning can reach deeper into carpet fibres than <a href="/blog/how-often-should-you-vacuum-your-carpet/">routine vacuuming</a> and can help remove embedded dirt, stains, allergens and odours. Professional hot-water extraction is one commonly used method for deep carpet cleaning.',
  },
  {
    question: 'How much does it cost to have a carpet cleaned in London?',
    answer:
      'Carpet cleaning prices depend on the number of rooms, carpet condition, material, staining, and the type of property. At Prime Carpet Cleaning and Upholstery Steam Cleaning, we provide fully transparent, fixed quotes with no hidden fees.',
  },
  {
    question: 'Can I reschedule my appointment?',
    answer:
      'Yes. If you need to change your appointment, contact us by phone or WhatsApp at least 24 hours before your scheduled time, and we will do our best to arrange another suitable appointment.',
  },
  {
    question: 'Are you a local carpet cleaning company in London?',
    answer:
      'Yes. Prime Carpet Cleaning provides professional cleaning services for homes and businesses across <a href="/areas/berkshire/carpet-cleaning/">Berkshire</a>, <a href="/areas/surrey/carpet-cleaning/">Surrey</a>, <a href="/areas/hampshire/carpet-cleaning/">Hampshire</a>, and the surrounding areas. If you\'re searching for "local carpet cleaners" or "carpet cleaners near me", you can contact us to check availability in your area.',
  },
];

export const GALLERY_IMAGES = [
  { src: '/images/gallery/1.webp', alt: 'Freshly steam cleaned living room carpet' },
  { src: '/images/gallery/2.webp', alt: 'Upholstery steam cleaning in progress' },
  { src: '/images/gallery/3.webp', alt: 'Before and after carpet cleaning result' },
  { src: '/images/gallery/4.webp', alt: 'Professional rug steam cleaning' },
  { src: '/images/gallery/5.webp', alt: 'Clean sofa after upholstery treatment' },
  { src: '/images/gallery/6.webp', alt: 'Spotless carpet in a modern home' },
];

export const SERVICE_OPTIONS = [
  'Carpet Steam Cleaning',
  'Upholstery Steam Cleaning',
  'Rug Cleaning',
  'Mattress Cleaning',
  'Stain Removal',
  'End-of-Tenancy Cleaning',
  'Other',
];

export const NAV_LINKS = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/about/' },
  { label: 'Services', href: '/#services' },
  { label: 'Service Areas', href: '/areas/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/#contact' },
];
