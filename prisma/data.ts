const companys = [
  {
    active: true,
    name: 'wolfe',
    address: '456 Jefferson Avenue',
    city: 'Louisville',
    state: 'KY',
    zip: '40202',
    phone: '888-555-0199',
    email: 'info@wolfe-bikes.com',
  },
]

const colors = [
  {
    value: 'Black',
    hex: '#000000',
  },
  {
    value: 'Red',
    hex: '#ff0000',
  },
  {
    value: 'Yellow',
    hex: '#f9db24',
  },
  {
    value: 'Gray',
    hex: '#2E312E',
  },
]

const sizes = [
  {
    value: 'S',
  },
  {
    value: 'M',
  },
  {
    value: 'L',
  },
  {
    value: 'XL',
  },
  {
    value: 'XXL',
  },
]

const categories = [
  {
    value: 'Bikes',
  },
  {
    value: 'Gear',
  },
  {
    value: 'Parts',
  },
]

const products = [
  {
    active: true,
    featured: true,
    name: 'Slayer',
    subtitle: '29 Carbon - 140mm',
    price: 7299,
    recurrence: 0,
    discount: 0,
    productTitle: 'Climb. Descend. Smile. Repeat.',
    productDescription:
      'The quiet Quiver Killer strikes again. The Slayer is our 140mm 29” big-wheeled trail bike featuring a steeper 77° seat angle and the best attributes from both its Following and Wreckoning brothers. Still, the Slayer stands on its own, with an increased reach that benefits both climbing and descending, a fierce DH capability, an Enduro heart, and diabolical cornering powers. Quiet, stiff, fast and poppy-as-hell, the Offering sacrifices nothing but gives you God-like powers. All hail, the Dark Lord of singletrack.',
    productImage: '/assets/images/mb-right-top.webp',
    productImageAltText: 'Slayer',
    heroImage1: '/assets/images/mb-left-top.webp',
    heroImage1AltText: 'Slayer',
    heroImage2: '/assets/images/mb-left-bottom.webp',
    heroImage2AltText: 'Slayer',
    heroImage3: '/assets/images/mb-right-bottom.webp',
    heroImage3AltText: 'Slayer',
    colors: {
      create: [
        { value: 'Black', hex: '#000000' },
        { value: 'Red', hex: '#ff0000' },
        { value: 'Yellow', hex: '#f9db24' },
      ],
    },
    sizes: {
      create: [
        { value: 'S' },
        { value: 'M' },
        { value: 'L' },
        { value: 'XL' },
        { value: 'XXL' },
      ],
    },
    category: { create: { value: 'Bikes' } },
  },
  {
    active: true,
    featured: true,
    name: 'Megadeath',
    subtitle: '29 Carbon - 140mm',
    price: 8299,
    recurrence: 0,
    discount: 0,
    productTitle: 'Climb. Descend. Smile. Repeat.',
    productDescription:
      'The quiet Quiver Killer strikes again. The Megadeath is our 140mm 29” big-wheeled trail bike featuring a steeper 77° seat angle and the best attributes from both its Following and Wreckoning brothers. Still, the Slayer stands on its own, with an increased reach that benefits both climbing and descending, a fierce DH capability, an Enduro heart, and diabolical cornering powers. Quiet, stiff, fast and poppy-as-hell, the Offering sacrifices nothing but gives you God-like powers. All hail, the Dark Lord of singletrack.',
    productImage: '/assets/images/mb-right-top.webp',
    productImageAltText: 'Megadeath',
    heroImage1: '/assets/images/mb-left-top.webp',
    heroImage1AltText: 'Megadeath',
    heroImage2: '/assets/images/mb-left-bottom.webp',
    heroImage2AltText: 'Megadeath',
    heroImage3: '/assets/images/mb-right-bottom.webp',
    heroImage3AltText: 'Megadeath',
    colors: {
      create: [
        { value: 'Black', hex: '#000000' },
        { value: 'Gray', hex: '#2E312E' },
      ],
    },
    sizes: {
      create: [
        { value: 'S' },
        { value: 'M' },
        { value: 'L' },
        { value: 'XL' },
        { value: 'XXL' },
      ],
    },
    category: { create: { value: 'Bikes' } },
  },
  {
    active: true,
    featured: true,
    name: 'Deathbringer',
    subtitle: '29 Carbon - 140mm',
    price: 9999,
    recurrence: 0,
    discount: 0,
    productTitle: 'Climb. Descend. Smile. Repeat.',
    productDescription:
      'The quiet Quiver Killer strikes again. The Deathbringer is our 140mm 29” big-wheeled trail bike featuring a steeper 77° seat angle and the best attributes from both its Following and Wreckoning brothers. Still, the Slayer stands on its own, with an increased reach that benefits both climbing and descending, a fierce DH capability, an Enduro heart, and diabolical cornering powers. Quiet, stiff, fast and poppy-as-hell, the Offering sacrifices nothing but gives you God-like powers. All hail, the Dark Lord of singletrack.',
    productImage: '/assets/images/mb-right-top.webp',
    productImageAltText: 'Deathbringer',
    heroImage1: '/assets/images/mb-left-top.webp',
    heroImage1AltText: 'Deathbringer',
    heroImage2: '/assets/images/mb-left-bottom.webp',
    heroImage2AltText: 'Deathbringer',
    heroImage3: '/assets/images/mb-right-bottom.webp',
    heroImage3AltText: 'Deathbringer',
    colors: {
      create: [
        { value: 'Black', hex: '#000000' },
        { value: 'Gray', hex: '#2E312E' },
      ],
    },
    sizes: {
      create: [
        { value: 'S' },
        { value: 'M' },
        { value: 'L' },
        { value: 'XL' },
        { value: 'XXL' },
      ],
    },
    category: { create: { value: 'Bikes' } },
  },
  {
    active: true,
    featured: true,
    name: 'Rockstar',
    subtitle: '29 Carbon - 140mm',
    price: 5999,
    recurrence: 0,
    discount: 0,
    productTitle: 'Climb. Descend. Smile. Repeat.',
    productDescription:
      'The quiet Quiver Killer strikes again. The Rockstar is our 140mm 29” big-wheeled trail bike featuring a steeper 77° seat angle and the best attributes from both its Following and Wreckoning brothers. Still, the Slayer stands on its own, with an increased reach that benefits both climbing and descending, a fierce DH capability, an Enduro heart, and diabolical cornering powers. Quiet, stiff, fast and poppy-as-hell, the Offering sacrifices nothing but gives you God-like powers. All hail, the Dark Lord of singletrack.',
    productImage: '/assets/images/mb-right-top.webp',
    productImageAltText: 'Rockstar',
    heroImage1: '/assets/images/mb-left-top.webp',
    heroImage1AltText: 'Rockstar',
    heroImage2: '/assets/images/mb-left-bottom.webp',
    heroImage2AltText: 'Rockstar',
    heroImage3: '/assets/images/mb-right-bottom.webp',
    heroImage3AltText: 'Rockstar',
    colors: {
      create: [
        { value: 'Black', hex: '#000000' },
        { value: 'Gray', hex: '#2E312E' },
      ],
    },
    sizes: {
      create: [
        { value: 'S' },
        { value: 'M' },
        { value: 'L' },
        { value: 'XL' },
        { value: 'XXL' },
      ],
    },
    category: { create: { value: 'Bikes' } },
  },
  {
    active: true,
    name: 'Offering',
    subtitle: '29 Carbon - 140mm',
    price: 4999,
    recurrence: 0,
    discount: 0,
    productTitle: 'Climb. Descend. Smile. Repeat.',
    productDescription:
      'The quiet Quiver Killer strikes again. The Offering is our 140mm 29” big-wheeled trail bike featuring a steeper 77° seat angle and the best attributes from both its Following and Wreckoning brothers. Still, the Slayer stands on its own, with an increased reach that benefits both climbing and descending, a fierce DH capability, an Enduro heart, and diabolical cornering powers. Quiet, stiff, fast and poppy-as-hell, the Offering sacrifices nothing but gives you God-like powers. All hail, the Dark Lord of singletrack.',
    productImage: '/assets/images/mb-right-top.webp',
    productImageAltText: 'Offering',
    heroImage1: '/assets/images/mb-left-top.webp',
    heroImage1AltText: 'Offering',
    heroImage2: '/assets/images/mb-left-bottom.webp',
    heroImage2AltText: 'Offering',
    heroImage3: '/assets/images/mb-right-bottom.webp',
    heroImage3AltText: 'Offering',
    colors: {
      create: [
        { value: 'Black', hex: '#000000' },
        { value: 'Gray', hex: '#2E312E' },
      ],
    },
    sizes: {
      create: [
        { value: 'S' },
        { value: 'M' },
        { value: 'L' },
        { value: 'XL' },
        { value: 'XXL' },
      ],
    },
    category: { create: { value: 'Bikes' } },
  },
  {
    active: true,
    name: "Stan's No Tubes",
    subtitle: '',
    price: 34,
    recurrence: 6,
    discount: 10,
    productTitle: "Stan's Notubes Tire Sealant",
    productDescription:
      "If tubeless is the new black, Stan's NoTubes Tire Sealant is a classic secret-agent tuxedo. Just pour some of this milky goo into your tubeless-compatible tires, pop them onto the bead, and spin 'em around to get an even coating that will protect you from leaks and punctures all the way up to 1/4in. It makes it safer and easier to run tubeless tires at low pressure, and can work with wheels designed to be run tubeless or wheels that have been converted to accommodate a tubeless setup. Sharp rocks, thorns, and broken glass won't ruin your ride anymore, and the ability to ride at lower pressures will increase grip when you're in slick terrain.",
    productImage: '/assets/images/stans-right-top.webp',
    productImageAltText: "Stan's No Tubes",
    heroImage1: '/assets/images/stans-left-top.webp',
    heroImage1AltText: "Stan's No Tubes",
    heroImage2: '/assets/images/stans-left-bottom.webp',
    heroImage2AltText: "Stan's No Tubes",
    heroImage3: '/assets/images/stans-right-bottom.webp',
    heroImage3AltText: "Stan's No Tubes",
    category: { create: { value: 'Parts' } },
  },
]

const communityImages = [
  {
    sortOrder: 1,
    image: '/assets/images/community1.webp',
    altText: 'Community 1',
  },
  {
    sortOrder: 2,
    image: '/assets/images/community4.webp',
    altText: 'Community 4',
  },
  {
    sortOrder: 3,
    image: '/assets/images/community7.webp',
    altText: 'Community 7',
  },
  {
    sortOrder: 4,
    image: '/assets/images/community2.webp',
    altText: 'Community 2',
  },
  {
    sortOrder: 5,
    image: '/assets/images/community5.webp',
    altText: 'Community 5',
  },
  {
    sortOrder: 6,
    image: '/assets/images/community8.webp',
    altText: 'Community 8',
  },
  {
    sortOrder: 7,
    image: '/assets/images/community3.webp',
    altText: 'Community 3',
  },
  {
    sortOrder: 8,
    image: '/assets/images/community6.webp',
    altText: 'Community 6',
  },
  {
    sortOrder: 9,
    image: '/assets/images/community9.webp',
    altText: 'Community 9',
  },
]

const headerLinks = [
  {
    active: true,
    sortOrder: 1,
    title: 'Bikes',
    subtitle: '',
    image: '/assets/images/bikes.webp',
    altText: 'Bikes',
    label: 'Show Now',
    link: '/bikes',
  },
  {
    active: true,
    sortOrder: 2,
    title: 'Gear',
    subtitle: '',
    image: '/assets/images/gear.webp',
    altText: 'Gear',
    label: 'Show Now',
    link: '/gear',
  },
  {
    active: true,
    sortOrder: 3,
    title: 'Parts',
    subtitle: '',
    image: '/assets/images/parts.webp',
    altText: 'Parts',
    label: 'Show Now',
    link: '/parts',
  },
]

const heroItems = [
  {
    active: true,
    title: 'Summer Sale',
    subtitle: '10% Off all Gear',
    image: '/assets/images/hero.webp',
    altText: 'Bike in woods',
    label: 'Start Shopping',
    link: '/gear',
  },
]

const footerItems = [
  {
    active: true,
    sortOrder: 1,
    title: 'Shop',
    links: {
      create: [
        { sortOrder: 1, label: 'Bikes', link: '/' },
        { sortOrder: 2, label: 'Gear', link: '/' },
        { sortOrder: 3, label: 'Parts', link: '/' },
      ],
    },
  },
  {
    active: true,
    sortOrder: 2,
    title: 'Orders & Returns',
    links: {
      create: [
        { sortOrder: 1, label: 'Full Bike Assembly', link: '/' },
        { sortOrder: 2, label: 'Shipping & Delivery', link: '/' },
        { sortOrder: 3, label: 'Return Policy', link: '/' },
        { sortOrder: 4, label: 'Affirm Financing', link: '/' },
      ],
    },
  },
  {
    active: true,
    sortOrder: 3,
    title: 'Company',
    links: {
      create: [
        { sortOrder: 1, label: 'Click & Mortar', link: '/' },
        { sortOrder: 2, label: 'Terms & Conditions', link: '/' },
        { sortOrder: 3, label: 'Privacy Policy', link: '/' },
        { sortOrder: 4, label: 'Dealers', link: '/' },
        { sortOrder: 5, label: 'Demo Tour', link: '/' },
      ],
    },
  },
  {
    active: true,
    sortOrder: 4,
    title: 'Support',
    links: {
      create: [
        { sortOrder: 1, label: 'Register Your Bike', link: '/' },
        { sortOrder: 2, label: 'Warranty Policy', link: '/' },
        { sortOrder: 3, label: 'Get Support', link: '/' },
        { sortOrder: 4, label: 'Tech Details', link: '/' },
        {
          sortOrder: 5,
          label: 'Decal Install Instructions',
          link: '/',
        },
        { sortOrder: 6, label: 'Bike Archive', link: '/' },
      ],
    },
  },
]

module.exports = {
  companys,
  colors,
  sizes,
  categories,
  products,
  communityImages,
  headerLinks,
  heroItems,
  footerItems,
}
