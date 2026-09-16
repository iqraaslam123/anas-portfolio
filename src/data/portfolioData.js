// Portfolio content — source of truth: Muhammad Anas CV (assets/cv.jpeg + cv2.jpeg)

const whatsappNumber = '923122312838'
const whatsappMessage = 'Hello Muhammad Anas, I visited your portfolio and would like to discuss a creative project.'

export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

export const portfolio = {
  name: 'Muhammad Anas',
  title: 'Motion Graphic Designer / Video Editor',
  roleLabel: 'Motion Graphic Designer / Video Editor',
  monogram: 'MA.',
  location: 'Karachi, Pakistan',
  email: 'muhammadanas997@qmail.com',
  phone: '+92 312 2312838',
  phoneRaw: '+923122312838',

  cv: {
    download: '/assets/cv/muhammad-anas-cv.jpg',
    page2: '/assets/cv/muhammad-anas-cv-page-2.jpg'
  },

  social: {
    vimeo: { label: 'Vimeo', url: 'https://vimeo.com/anas997', handle: 'anas997' },
    behance: { label: 'Behance', url: 'https://www.behance.net/anas997', handle: 'anas997' },
    linkedin: { label: 'LinkedIn', url: 'https://www.linkedin.com/in/anas997', handle: 'in/anas997' }
  },

  summary: 'Creative and detail-oriented Motion Graphic Designer with 5+ years of professional experience in animation and video editing. Specializes in producing corporate videos, brand campaigns, and interactive educational content. Passionate about visual storytelling and eager to contribute to high-performing creative teams in advertising, media, and entertainment.',

  heroIntro: 'I craft cinematic motion graphics, animation and video edits that make brands move — from corporate films and brand campaigns to interactive educational content.',

  stats: [
    { value: 5, suffix: '+', label: 'Years Experience', key: 'years' },
    { value: 100, suffix: '+', label: 'Motion Graphics Projects', key: 'projects' },
    { value: 40, suffix: '%', label: 'Social Media Engagement Boost', key: 'engagement' },
    { value: null, suffix: '', label: 'Corporate / FMCG / Education Sectors', key: 'sectors', valueText: 'Multiple' }
  ],

  about: {
    lead: 'Creative and detail-oriented Motion Graphic Designer with 5+ years of professional experience in animation and video editing.',
    paragraphs: [
      'Specializing in producing corporate videos, brand campaigns, and interactive educational content, Muhammad blends strong visual storytelling with disciplined production craft.',
      'Passionate about visual storytelling and eager to contribute to high-performing creative teams in advertising, media, and entertainment.'
    ],
    highlights: [
      'Motion Graphics & Animation',
      'Video Editing & Postproduction',
      'Corporate Videos & Brand Campaigns',
      'Interactive Educational Content',
      'Visual Storytelling'
    ]
  },

  experience: [
    {
      company: 'Digital Gravity',
      location: 'Karachi, Pakistan',
      role: 'Motion Graphics Designer',
      period: 'July 2025 – Present',
      start: 'July 2025',
      end: 'Present',
      description: 'Delivered high-impact motion graphics for UAE Swat Challenge & Novaheim Real Estate, significantly improving brand presence.',
      responsibilities: [
        'Developed motion graphics for commercial ads, social media campaigns, and corporate branding',
        'Collaborated with creative and marketing teams to translate ideas into dynamic visuals',
        'Optimized animation workflows to meet tight deadlines without compromising quality',
        'Worked on 3D animation integration with After Effects and Cinema 4D for premium clients'
      ],
      stack: ['After Effects', 'Premiere Pro', 'Cinema 4D']
    },
    {
      company: 'Digitiz Digitas',
      location: 'Karachi, Pakistan',
      role: 'Animator',
      period: 'October 2022 – June 2025',
      description: 'Created animations for global brands including Tetra Pak and Sensodyne, strengthening digital engagement.',
      responsibilities: [
        'Designed animations for FMCG campaigns including Morinaga, Tetra Pak and Sensodyne',
        'Produced product commercials, infographics, and explainer videos',
        'Ensured brand consistency across multiple platforms',
        'Coordinated with art directors and copywriters to produce cohesive campaigns'
      ],
      stack: ['After Effects', 'Premiere Pro', 'Photoshop', 'Illustrator']
    },
    {
      company: 'Sabaq Pvt. Ltd',
      location: 'Karachi, Pakistan',
      role: '2D Character Animator',
      period: 'June 2021 – October 2022',
      description: 'Produced interactive 2D animated content for educational platforms, boosting student engagement.',
      responsibilities: [
        'Created character rigs and educational story-based animations using Moho & Character Animator',
        'Collaborated with academic content teams to simplify complex concepts visually',
        'Edited and finalized high-quality outputs for e-learning platforms',
        'Enhanced interactivity in content'
      ],
      stack: ['Moho', 'Character Animator']
    },
    {
      company: 'Switch Studios',
      location: 'Karachi, Pakistan',
      role: 'Junior Animator',
      period: 'September 2019 – May 2021',
      description: 'Designed explainer & branding animations for SMEs, supporting client acquisition.',
      responsibilities: [
        'Produced animated logos, lower-thirds, intros/outros for corporate videos',
        'Designed product demo videos and motion infographics for marketing purposes',
        'Assisted senior animators in 3D asset integration',
        'Contributed to storyboard creation and idea pitching sessions with clients'
      ],
      stack: ['After Effects', 'Illustrator', 'Moho']
    }
  ],

  achievements: [
    {
      number: '01',
      title: '100+ Projects Delivered',
      text: 'Successfully delivered 100+ motion graphics projects across corporate, FMCG, and education sectors.'
    },
    {
      number: '02',
      title: '40% Engagement Boost',
      text: 'Boosted social media engagement up to 40% through innovative animated campaigns.'
    },
    {
      number: '03',
      title: 'Client Pitch Ownership',
      text: 'Took complete ownership of a major client pitch, independently preparing and presenting the entire proposal with full creative direction and execution knowledge.'
    },
    {
      number: '04',
      title: 'Regional Brand Impact',
      text: 'Contributed to brand launches and digital campaigns that increased client visibility in UAE and Pakistan markets.'
    }
  ],

  additionalSkills: [
    'Storyboarding & Concept Development',
    'Typography & Visual Composition',
    'Video Editing & Postproduction',
    'Team Collaboration & Communication'
  ],

  software: [
    { name: 'Adobe After Effects', mark: 'Ae', tag: 'Animation & Compositing' },
    { name: 'Adobe Premiere Pro', mark: 'Pr', tag: 'Video Editing' },
    { name: 'Adobe Character Animator', mark: 'Ch', tag: 'Character Animation' },
    { name: 'Adobe Photoshop', mark: 'Ps', tag: 'Design & Retouching' },
    { name: 'Adobe Illustrator', mark: 'Ai', tag: 'Vector & Motion Design' },
    { name: 'Blender', mark: 'B', tag: '3D Animation' },
    { name: 'Moho', mark: 'Mo', tag: '2D Rigging & Animation' },
    { name: 'Cinema 4D', mark: 'C4D', tag: '3D & Motion Graphics' }
  ],

  marqueeItems: [
    'Adobe After Effects',
    'Adobe Premiere Pro',
    'Adobe Character Animator',
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Blender',
    'Moho',
    'Cinema 4D'
  ],

  education: [
    {
      degree: 'Bachelor of Science (BS) Mass Communication',
      institution: 'Federal Urdu University of Arts, Sciences & Technology, Karachi',
      year: '2022'
    },
    {
      degree: 'Diploma Business Administration (DBA)',
      institution: 'Technical Education, Karachi',
      year: '2018'
    }
  ],

  nav: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Showreel', href: '#showreel' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' }
  ],

  footer: {
    rights: '© 2026 Muhammad Anas. All Rights Reserved.',
    tagline: 'Motion Graphic Designer / Video Editor'
  }
}