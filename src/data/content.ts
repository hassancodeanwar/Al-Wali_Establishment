import { Locale } from './locales';

export type ContentKey = 
  | 'home' 
  | 'about' 
  | 'services' 
  | 'projects' 
  | 'testimonials' 
  | 'contact'
  | 'navigation'
  | 'footer'
  | 'hero';

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
};

export type Testimonial = {
  id: string;
  name: string;
  company: string;
  quote: string;
  image: string;
};

export type TeamMember = {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
};

export type Content = {
  meta: {
    title: string;
    description: string;
  };
  navigation: {
    home: string;
    about: string;
    services: string;
    projects: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    subtitle: string;
    description: string[];
    mission: {
      title: string;
      text: string;
    };
    vision: {
      title: string;
      text: string;
    };
    team: {
      title: string;
      subtitle: string;
      members: TeamMember[];
    };
  };
  services: {
    title: string;
    subtitle: string;
    items: Service[];
  };
  projects: {
    title: string;
    subtitle: string;
    categories: string[];
    items: Project[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: Testimonial[];
  };
  contact: {
    title: string;
    subtitle: string;
    address: string;
    phone: string;
    email: string;
    form: {
      name: string;
      email: string;
      phone: string;
      message: string;
      submit: string;
      success: string;
    };
  };
  footer: {
    copyright: string;
    links: {
      label: string;
      url: string;
    }[];
  };
};

export const content: Record<Locale, Content> = {
  ar: {
    meta: {
      title: 'مؤسسة الوالي | متخصصون في حفر الآبار وطلمبات أعماق البحار',
      description: 'مؤسسة الوالي متخصصة في حفر الآبار وطلمبات أعماق البحار بجودة عالية وخبرة واسعة.',
    },
    navigation: {
      home: 'الرئيسية',
      about: 'عن الشركة',
      services: 'خدماتنا',
      projects: 'مشاريعنا',
      contact: 'اتصل بنا',
    },
    hero: {
      title: 'حلول متطورة لحفر الآبار وطلمبات الأعماق',
      subtitle: 'نقدم حلولاً متكاملة ومبتكرة في مجال حفر الآبار وطلمبات أعماق البحار بأعلى معايير الجودة',
      cta: 'تواصل معنا',
    },
    about: {
      title: 'عن مؤسسة الوالي',
      subtitle: 'خبرة تمتد لأكثر من 20 عاماً في مجال حفر الآبار وطلمبات الأعماق',
      description: [
        'تأسست مؤسسة الوالي بهدف تقديم حلول متكاملة في مجال حفر الآبار وطلمبات أعماق البحار بأعلى معايير الجودة والكفاءة.',
        'نمتلك فريقاً من المهندسين والفنيين ذوي الخبرة العالية والمؤهلات المتميزة، ونستخدم أحدث التقنيات والمعدات للوصول إلى أفضل النتائج.',
        'نسعى دائماً لتطوير خدماتنا وتحسين أدائنا لتلبية احتياجات عملائنا ومواكبة التطورات المستمرة في القطاع.'
      ],
      mission: {
        title: 'رسالتنا',
        text: 'تقديم حلول متكاملة في مجال حفر الآبار وطلمبات أعماق البحار تلبي احتياجات عملائنا بأعلى معايير الجودة والكفاءة، مع الالتزام بالمعايير البيئية والسلامة المهنية.',
      },
      vision: {
        title: 'رؤيتنا',
        text: 'أن نكون الخيار الأول والمفضل في مجال حفر الآبار وطلمبات أعماق البحار على المستوى المحلي والإقليمي، من خلال الابتكار المستمر وتقديم حلول متميزة.',
      },
      team: {
        title: 'فريقنا',
        subtitle: 'خبراء متخصصون في مجال حفر الآبار وطلمبات الأعماق',
        members: [
          {
            id: '1',
            name: 'م. أحمد الوالي',
            position: 'المدير التنفيذي',
            bio: 'يمتلك خبرة أكثر من 20 عاماً في مجال حفر الآبار وطلمبات الأعماق، حاصل على شهادة الهندسة من جامعة مرموقة.',
            image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          },
          {
            id: '2',
            name: 'م. سارة المهندس',
            position: 'مدير المشاريع',
            bio: 'خبرة 15 عاماً في إدارة مشاريع حفر الآبار، حاصلة على ماجستير في هندسة المياه والبيئة.',
            image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          },
          {
            id: '3',
            name: 'م. محمد العلي',
            position: 'مدير العمليات الفنية',
            bio: 'خبير في تصميم وتركيب طلمبات الأعماق، حاصل على شهادة في الهندسة الميكانيكية مع خبرة 12 عاماً.',
            image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          },
        ],
      },
    },
    services: {
      title: 'خدماتنا',
      subtitle: 'حلول متكاملة في مجال حفر الآبار وطلمبات الأعماق',
      items: [
        {
          id: '1',
          title: 'حفر آبار المياه',
          description: 'نقدم خدمات حفر آبار المياه باستخدام أحدث التقنيات والمعدات، مع ضمان الجودة والكفاءة.',
          icon: 'droplet',
        },
        {
          id: '2',
          title: 'تركيب طلمبات الآبار',
          description: 'نقوم بتركيب طلمبات الآبار بمختلف أنواعها وأحجامها، مع توفير خدمات الصيانة والدعم الفني.',
          icon: 'pump',
        },
        {
          id: '3',
          title: 'طلمبات أعماق البحار',
          description: 'نوفر حلولاً متكاملة لطلمبات أعماق البحار للاستخدامات الصناعية والتجارية والبحثية.',
          icon: 'anchor',
        },
        {
          id: '4',
          title: 'صيانة الآبار والمضخات',
          description: 'نقدم خدمات صيانة دورية وطارئة للآبار والمضخات لضمان استمرارية العمل وتفادي الأعطال.',
          icon: 'wrench',
        },
        {
          id: '5',
          title: 'استشارات فنية',
          description: 'نوفر استشارات فنية متخصصة في مجال حفر الآبار وطلمبات الأعماق، بناءً على خبرتنا الواسعة.',
          icon: 'clipboard-check',
        },
        {
          id: '6',
          title: 'تطوير حلول مخصصة',
          description: 'نطور حلولاً مخصصة تلبي احتياجات مشاريعكم الخاصة في مجال حفر الآبار وطلمبات الأعماق.',
          icon: 'settings',
        },
      ],
    },
    projects: {
      title: 'مشاريعنا',
      subtitle: 'بعض من أبرز مشاريعنا التي نفخر بها',
      categories: ['جميع المشاريع', 'حفر الآبار', 'طلمبات الأعماق', 'المشاريع الحكومية', 'المشاريع الخاصة'],
      items: [
        {
          id: '1',
          title: 'حفر آبار مياه في منطقة الرياض',
          description: 'مشروع حفر 5 آبار مياه عميقة في منطقة الرياض، بعمق يتراوح بين 500 إلى 800 متر.',
          category: 'حفر الآبار',
          image: 'https://images.pexels.com/photos/226589/pexels-photo-226589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          id: '2',
          title: 'تركيب طلمبات أعماق في منشأة صناعية',
          description: 'تركيب وتشغيل 3 طلمبات أعماق بحرية لمنشأة صناعية على ساحل الخليج العربي.',
          category: 'طلمبات الأعماق',
          image: 'https://images.pexels.com/photos/162568/oil-pump-jack-sunset-clouds-silhouette-162568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          id: '3',
          title: 'مشروع آبار مياه للري الزراعي',
          description: 'حفر وتجهيز 10 آبار مياه للري الزراعي في المنطقة الشرقية، مع تركيب أنظمة ضخ متكاملة.',
          category: 'المشاريع الخاصة',
          image: 'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          id: '4',
          title: 'مشروع تزويد المياه لمدينة سكنية',
          description: 'مشروع متكامل لحفر الآبار وتركيب طلمبات لتزويد مدينة سكنية جديدة بالمياه.',
          category: 'المشاريع الحكومية',
          image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          id: '5',
          title: 'صيانة وتطوير آبار قائمة',
          description: 'مشروع صيانة وتطوير 15 بئراً قائماً في منطقة القصيم، مع تحديث أنظمة الضخ وزيادة الإنتاجية.',
          category: 'حفر الآبار',
          image: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          id: '6',
          title: 'تركيب طلمبات لمشروع استزراع سمكي',
          description: 'تصميم وتركيب منظومة طلمبات أعماق متطورة لمشروع استزراع سمكي على ساحل البحر الأحمر.',
          category: 'طلمبات الأعماق',
          image: 'https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
      ],
    },
    testimonials: {
      title: 'آراء عملائنا',
      subtitle: 'ما يقوله عملاؤنا عن خدماتنا',
      items: [
        {
          id: '1',
          name: 'م. خالد السعيد',
          company: 'شركة الواحة للتطوير العقاري',
          quote: 'تعاملنا مع مؤسسة الوالي في مشروع حفر آبار لمجمع سكني، وكانت التجربة ممتازة من حيث الالتزام بالجودة والمواعيد وحل المشكلات.',
          image: 'https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          id: '2',
          name: 'د. سلمان الفارس',
          company: 'هيئة المياه والكهرباء',
          quote: 'نفذت مؤسسة الوالي عدة مشاريع لصالح الهيئة، وأثبتت دائماً التزامها بالمعايير الفنية والبيئية وجودة التنفيذ.',
          image: 'https://images.pexels.com/photos/3782214/pexels-photo-3782214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          id: '3',
          name: 'أ. نورة المطيري',
          company: 'مزارع الخير الزراعية',
          quote: 'ساعدتنا مؤسسة الوالي في حل مشكلة نقص المياه في مزارعنا من خلال حفر وتجهيز آبار بكفاءة عالية وتكلفة مناسبة.',
          image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
      ],
    },
    contact: {
      title: 'اتصل بنا',
      subtitle: 'نحن هنا للإجابة على استفساراتكم وتلبية احتياجاتكم',
      address: 'وادي النطرون، البحيرة، مصر',
      phone: '+20 01062784604',
      email: 'info@alwali.com',
      form: {
        name: 'الاسم',
        email: 'البريد الإلكتروني',
        phone: 'رقم الهاتف',
        message: 'الرسالة',
        submit: 'إرسال',
        success: 'تم إرسال رسالتك بنجاح، وسنتواصل معك قريباً.',
      },
    },
    footer: {
      copyright: '© 2025 مؤسسة الوالي. جميع الحقوق محفوظة.',
      links: [
        {
          label: 'سياسة الخصوصية',
          url: '/privacy',
        },
        {
          label: 'الشروط والأحكام',
          url: '/terms',
        },
        {
          label: 'خريطة الموقع',
          url: '/sitemap',
        },
      ],
    },
  },
  en: {
    meta: {
      title: 'Al Wali Establishment | Specialists in Well Drilling and Deep-Sea Pumps',
      description: 'Al Wali Establishment specializes in well drilling and deep-sea pumps with high quality and extensive experience.',
    },
    navigation: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      title: 'Advanced Solutions for Well Drilling and Deep Pumps',
      subtitle: 'We provide integrated and innovative solutions in well drilling and deep-sea pumps with the highest quality standards',
      cta: 'Contact Us',
    },
    about: {
      title: 'About Al Wali Establishment',
      subtitle: 'Experience spanning more than 20 years in well drilling and deep pumps',
      description: [
        'Al Wali Establishment was founded to provide integrated solutions in well drilling and deep-sea pumps with the highest standards of quality and efficiency.',
        'We have a team of highly experienced and qualified engineers and technicians, and we use the latest technologies and equipment to achieve the best results.',
        'We always strive to develop our services and improve our performance to meet the needs of our clients and keep pace with the continuous developments in the sector.'
      ],
      mission: {
        title: 'Our Mission',
        text: 'To provide integrated solutions in well drilling and deep-sea pumps that meet the needs of our clients with the highest standards of quality and efficiency, while adhering to environmental standards and occupational safety.',
      },
      vision: {
        title: 'Our Vision',
        text: 'To be the first and preferred choice in the field of well drilling and deep-sea pumps at the local and regional levels, through continuous innovation and providing distinguished solutions.',
      },
      team: {
        title: 'Our Team',
        subtitle: 'Specialists in well drilling and deep pumps',
        members: [
          {
            id: '1',
            name: 'Eng. Ahmed Al Wali',
            position: 'CEO',
            bio: 'Has more than 20 years of experience in well drilling and deep pumps, holds an engineering degree from a prestigious university.',
            image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          },
          {
            id: '2',
            name: 'Eng. Sarah Al Mohandis',
            position: 'Project Manager',
            bio: '15 years of experience in managing well drilling projects, holds a master\'s degree in water and environmental engineering.',
            image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          },
          {
            id: '3',
            name: 'Eng. Mohammed Al Ali',
            position: 'Technical Operations Manager',
            bio: 'Expert in designing and installing deep pumps, holds a degree in mechanical engineering with 12 years of experience.',
            image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          },
        ],
      },
    },
    services: {
      title: 'Our Services',
      subtitle: 'Integrated solutions in well drilling and deep pumps',
      items: [
        {
          id: '1',
          title: 'Water Well Drilling',
          description: 'We provide water well drilling services using the latest technologies and equipment, with guaranteed quality and efficiency.',
          icon: 'droplet',
        },
        {
          id: '2',
          title: 'Well Pump Installation',
          description: 'We install well pumps of various types and sizes, providing maintenance and technical support services.',
          icon: 'pump',
        },
        {
          id: '3',
          title: 'Deep-Sea Pumps',
          description: 'We provide integrated solutions for deep-sea pumps for industrial, commercial, and research uses.',
          icon: 'anchor',
        },
        {
          id: '4',
          title: 'Well and Pump Maintenance',
          description: 'We provide periodic and emergency maintenance services for wells and pumps to ensure continuity of work and avoid breakdowns.',
          icon: 'wrench',
        },
        {
          id: '5',
          title: 'Technical Consultations',
          description: 'We provide specialized technical consultations in the field of well drilling and deep pumps, based on our extensive experience.',
          icon: 'clipboard-check',
        },
        {
          id: '6',
          title: 'Custom Solutions Development',
          description: 'We develop customized solutions that meet the needs of your specific projects in the field of well drilling and deep pumps.',
          icon: 'settings',
        },
      ],
    },
    projects: {
      title: 'Our Projects',
      subtitle: 'Some of our most prominent projects that we are proud of',
      categories: ['All Projects', 'Well Drilling', 'Deep Pumps', 'Government Projects', 'Private Projects'],
      items: [
        {
          id: '1',
          title: 'Water Well Drilling in Riyadh Area',
          description: 'A project to drill 5 deep water wells in Riyadh area, with depths ranging from 500 to 800 meters.',
          category: 'Well Drilling',
          image: 'https://images.pexels.com/photos/226589/pexels-photo-226589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          id: '2',
          title: 'Deep Pumps Installation in Industrial Facility',
          description: 'Installation and operation of 3 deep-sea pumps for an industrial facility on the Arabian Gulf coast.',
          category: 'Deep Pumps',
          image: 'https://images.pexels.com/photos/162568/oil-pump-jack-sunset-clouds-silhouette-162568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          id: '3',
          title: 'Water Wells Project for Agricultural Irrigation',
          description: 'Drilling and equipping 10 water wells for agricultural irrigation in the Eastern Region, with integrated pumping systems installation.',
          category: 'Private Projects',
          image: 'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          id: '4',
          title: 'Water Supply Project for Residential City',
          description: 'Integrated project for drilling wells and installing pumps to supply a new residential city with water.',
          category: 'Government Projects',
          image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          id: '5',
          title: 'Maintenance and Development of Existing Wells',
          description: 'A project to maintain and develop 15 existing wells in Qassim region, with updating pumping systems and increasing productivity.',
          category: 'Well Drilling',
          image: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          id: '6',
          title: 'Pump Installation for Fish Farming Project',
          description: 'Design and installation of an advanced deep pump system for a fish farming project on the Red Sea coast.',
          category: 'Deep Pumps',
          image: 'https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
      ],
    },
    testimonials: {
      title: 'Client Testimonials',
      subtitle: 'What our clients say about our services',
      items: [
        {
          id: '1',
          name: 'Eng. Khalid Al Saeed',
          company: 'Al Waha Real Estate Development',
          quote: 'We worked with Al Wali Establishment on a well drilling project for a residential complex, and the experience was excellent in terms of commitment to quality, deadlines, and problem-solving.',
          image: 'https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          id: '2',
          name: 'Dr. Salman Al Faris',
          company: 'Water and Electricity Authority',
          quote: 'Al Wali Establishment has implemented several projects for the Authority, and has always demonstrated its commitment to technical and environmental standards and quality of implementation.',
          image: 'https://images.pexels.com/photos/3782214/pexels-photo-3782214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          id: '3',
          name: 'Ms. Noura Al Mutairi',
          company: 'Al Khair Agricultural Farms',
          quote: 'Al Wali Establishment helped us solve the problem of water shortage in our farms by drilling and equipping wells with high efficiency and reasonable cost.',
          image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
      ],
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'We are here to answer your inquiries and meet your needs',
      address: 'Wady El-Natroon, Bohaira, Egypt',
      phone: '+20 01062784604',
      email: 'info@alwali.com',
      form: {
        name: 'Name',
        email: 'Email',
        phone: 'Phone Number',
        message: 'Message',
        submit: 'Send',
        success: 'Your message has been sent successfully, and we will contact you soon.',
      },
    },
    footer: {
      copyright: '© 2025 Al Wali Establishment. All rights reserved.',
      links: [
        {
          label: 'Privacy Policy',
          url: '/privacy',
        },
        {
          label: 'Terms and Conditions',
          url: '/terms',
        },
        {
          label: 'Sitemap',
          url: '/sitemap',
        },
      ],
    },
  },
};
