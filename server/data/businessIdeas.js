const businessIdeas = [
  {
    title: "Freelance Web Development Agency",
    description:
      "Develop responsive websites and web applications for startups, local businesses, and entrepreneurs using modern web technologies.",
    category: "Technology",
    level: "Intermediate",
    investment: "₹20,000 - ₹50,000",
    skill: "Web Development",
    isActive: true,
  },
  {
    title: "Mobile App Development Studio",
    description:
      "Build Android and iOS mobile applications for businesses using Flutter or React Native.",
    category: "Technology",
    level: "Advanced",
    investment: "₹30,000 - ₹60,000",
    skill: "Mobile Development",
    isActive: true,
  },
  {
    title: "Website Maintenance Service",
    description:
      "Provide website updates, bug fixes, security monitoring, backups, and technical support for business websites.",
    category: "Technology",
    level: "Beginner",
    investment: "₹10,000 - ₹25,000",
    skill: "Website Management",
    isActive: true,
  },
  {
    title: "E-Commerce Store Development",
    description:
      "Create complete online shopping websites for retailers with payment gateways and inventory management.",
    category: "Technology",
    level: "Intermediate",
    investment: "₹25,000 - ₹60,000",
    skill: "E-Commerce Development",
    isActive: true,
  },
  {
    title: "Cloud IT Support Services",
    description:
      "Help businesses migrate to cloud platforms, manage cloud storage, and maintain online infrastructure.",
    category: "Technology",
    level: "Advanced",
    investment: "₹40,000 - ₹80,000",
    skill: "Cloud Computing",
    isActive: true,
  },
  {
    title: "Cybersecurity Consulting",
    description:
      "Provide vulnerability assessments, security audits, and cyber safety solutions for organizations.",
    category: "Technology",
    level: "Advanced",
    investment: "₹50,000 - ₹1,00,000",
    skill: "Cybersecurity",
    isActive: true,
  },
  {
    title: "Software Testing Company",
    description:
      "Offer manual and automated software testing services to startups and software companies.",
    category: "Technology",
    level: "Intermediate",
    investment: "₹20,000 - ₹45,000",
    skill: "Software Testing",
    isActive: true,
  },
  {
    title: "Computer Repair & IT Support",
    description:
      "Provide laptop, desktop, printer, and networking repair services for homes and offices.",
    category: "Technology",
    level: "Beginner",
    investment: "₹15,000 - ₹40,000",
    skill: "Computer Hardware",
    isActive: true,
  },
  {
    title: "Custom ERP Solution Provider",
    description:
      "Develop customized ERP systems to manage inventory, billing, HR, and finance for businesses.",
    category: "Technology",
    level: "Advanced",
    investment: "₹60,000 - ₹1,50,000",
    skill: "Enterprise Software Development",
    isActive: true,
  },
  {
    title: "SaaS Product Startup",
    description:
      "Build subscription-based software products that solve business problems and generate recurring revenue.",
    category: "Technology",
    level: "Advanced",
    investment: "₹75,000 - ₹2,00,000",
    skill: "Full Stack Development",
    isActive: true,
  },
  {
    title: "AI Chatbot Development Service",
    description:
      "Develop AI-powered chatbots for websites, e-commerce stores, and customer support using modern AI platforms.",
    category: "AI & Automation",
    level: "Advanced",
    investment: "₹40,000 - ₹90,000",
    skill: "Artificial Intelligence",
    isActive: true,
  },
  {
    title: "AI Content Creation Agency",
    description:
      "Help businesses generate blogs, marketing copy, product descriptions, and social media content using AI tools.",
    category: "AI & Automation",
    level: "Intermediate",
    investment: "₹15,000 - ₹35,000",
    skill: "AI Content Creation",
    isActive: true,
  },
  {
    title: "Business Process Automation",
    description:
      "Automate repetitive business tasks such as email workflows, CRM updates, and document generation.",
    category: "AI & Automation",
    level: "Advanced",
    investment: "₹35,000 - ₹75,000",
    skill: "Automation Tools",
    isActive: true,
  },
  {
    title: "AI Resume & Portfolio Builder",
    description:
      "Build an online platform that helps students and professionals create resumes and portfolios using AI.",
    category: "AI & Automation",
    level: "Intermediate",
    investment: "₹20,000 - ₹50,000",
    skill: "Web Development",
    isActive: true,
  },
  {
    title: "AI Business Analytics Consultancy",
    description:
      "Provide businesses with AI-powered data analysis, forecasting, and decision-making solutions.",
    category: "AI & Automation",
    level: "Advanced",
    investment: "₹50,000 - ₹1,20,000",
    skill: "Data Analytics",
    isActive: true,
  },

  {
    title: "Social Media Marketing Agency",
    description:
      "Manage social media accounts, create engaging content, and run advertising campaigns for businesses.",
    category: "Digital Marketing",
    level: "Intermediate",
    investment: "₹15,000 - ₹40,000",
    skill: "Social Media Marketing",
    isActive: true,
  },
  {
    title: "SEO Consulting Agency",
    description:
      "Improve website rankings through search engine optimization, keyword research, and technical SEO services.",
    category: "Digital Marketing",
    level: "Intermediate",
    investment: "₹10,000 - ₹30,000",
    skill: "SEO",
    isActive: true,
  },
  {
    title: "Email Marketing Service",
    description:
      "Create and manage email campaigns, newsletters, and customer engagement strategies for businesses.",
    category: "Digital Marketing",
    level: "Beginner",
    investment: "₹8,000 - ₹20,000",
    skill: "Email Marketing",
    isActive: true,
  },
  {
    title: "YouTube Channel Management",
    description:
      "Help creators and businesses manage YouTube channels, optimize videos, and grow their audience.",
    category: "Digital Marketing",
    level: "Intermediate",
    investment: "₹15,000 - ₹35,000",
    skill: "Video Marketing",
    isActive: true,
  },
  {
    title: "Performance Marketing Agency",
    description:
      "Run ROI-focused advertising campaigns on Google, Facebook, and Instagram to generate leads and sales.",
    category: "Digital Marketing",
    level: "Advanced",
    investment: "₹25,000 - ₹60,000",
    skill: "Performance Marketing",
    isActive: true,
  },
  {
    title: "Graphic Design Agency",
    description:
      "Provide logo design, branding, brochures, banners, and marketing materials for businesses and startups.",
    category: "Design & Creative",
    level: "Beginner",
    investment: "₹10,000 - ₹30,000",
    skill: "Graphic Design",
    isActive: true,
  },
  {
    title: "UI/UX Design Studio",
    description:
      "Design intuitive user interfaces and user experiences for websites, mobile apps, and SaaS platforms.",
    category: "Design & Creative",
    level: "Intermediate",
    investment: "₹20,000 - ₹50,000",
    skill: "UI/UX Design",
    isActive: true,
  },
  {
    title: "Video Editing Agency",
    description:
      "Offer professional video editing services for YouTubers, businesses, influencers, and marketing campaigns.",
    category: "Design & Creative",
    level: "Beginner",
    investment: "₹15,000 - ₹35,000",
    skill: "Video Editing",
    isActive: true,
  },
  {
    title: "Animation & Motion Graphics Studio",
    description:
      "Create animated explainer videos, motion graphics, and promotional content for brands and educational platforms.",
    category: "Design & Creative",
    level: "Advanced",
    investment: "₹40,000 - ₹80,000",
    skill: "Animation",
    isActive: true,
  },
  {
    title: "Photography & Videography Services",
    description:
      "Provide photography and videography services for weddings, events, products, and corporate clients.",
    category: "Design & Creative",
    level: "Intermediate",
    investment: "₹30,000 - ₹1,00,000",
    skill: "Photography",
    isActive: true,
  },
  {
    title: "Interior Design Consultancy",
    description:
      "Design residential and commercial interiors with space planning, furniture selection, and décor solutions.",
    category: "Design & Creative",
    level: "Advanced",
    investment: "₹50,000 - ₹1,50,000",
    skill: "Interior Design",
    isActive: true,
  },
  {
    title: "Print-on-Demand Merchandise Store",
    description:
      "Sell custom T-shirts, mugs, hoodies, and accessories through print-on-demand platforms without maintaining inventory.",
    category: "Design & Creative",
    level: "Beginner",
    investment: "₹10,000 - ₹25,000",
    skill: "Product Design",
    isActive: true,
  },
  {
    title: "Brand Identity Consultancy",
    description:
      "Help businesses build a strong brand through logo creation, visual identity, typography, and brand strategy.",
    category: "Design & Creative",
    level: "Intermediate",
    investment: "₹20,000 - ₹45,000",
    skill: "Branding",
    isActive: true,
  },

  {
    title: "Online Coding Academy",
    description:
      "Teach programming languages, web development, and software engineering through online live classes and recorded courses.",
    category: "Education",
    level: "Intermediate",
    investment: "₹20,000 - ₹50,000",
    skill: "Programming",
    isActive: true,
  },
  {
    title: "Language Training Institute",
    description:
      "Provide spoken English, IELTS, foreign language, and communication skills training for students and professionals.",
    category: "Education",
    level: "Beginner",
    investment: "₹15,000 - ₹40,000",
    skill: "Language Training",
    isActive: true,
  },
  {
    title: "Career Guidance & Counseling Center",
    description:
      "Offer career counseling, aptitude testing, interview preparation, and higher education guidance.",
    category: "Education",
    level: "Intermediate",
    investment: "₹20,000 - ₹45,000",
    skill: "Career Counseling",
    isActive: true,
  },
  {
    title: "Skill Development Institute",
    description:
      "Provide practical training in digital skills, office productivity, entrepreneurship, and employability.",
    category: "Education",
    level: "Intermediate",
    investment: "₹30,000 - ₹70,000",
    skill: "Skill Development",
    isActive: true,
  },
  {
    title: "Competitive Exam Coaching",
    description:
      "Prepare students for government and competitive examinations through classroom and online coaching.",
    category: "Education",
    level: "Advanced",
    investment: "₹40,000 - ₹90,000",
    skill: "Teaching",
    isActive: true,
  },
  {
    title: "STEM Learning Center",
    description:
      "Teach robotics, coding, electronics, and science experiments to school students through hands-on learning.",
    category: "Education",
    level: "Intermediate",
    investment: "₹50,000 - ₹1,20,000",
    skill: "STEM Education",
    isActive: true,
  },
  {
    title: "Online Course Marketplace",
    description:
      "Build a platform where educators can create, publish, and sell online courses across multiple subjects.",
    category: "Education",
    level: "Advanced",
    investment: "₹60,000 - ₹1,50,000",
    skill: "EdTech Development",
    isActive: true,
  },
  {
    title: "Home Bakery",
    description:
      "Start a home-based bakery offering cakes, cookies, pastries, and customized desserts for local customers and events.",
    category: "Food & Beverage",
    level: "Beginner",
    investment: "₹25,000 - ₹60,000",
    skill: "Baking",
    isActive: true,
  },
  {
    title: "Cloud Kitchen",
    description:
      "Operate a delivery-only food business by preparing quality meals for online food delivery platforms.",
    category: "Food & Beverage",
    level: "Intermediate",
    investment: "₹50,000 - ₹1,50,000",
    skill: "Food Preparation",
    isActive: true,
  },
  {
    title: "Organic Food Store",
    description:
      "Sell organic fruits, vegetables, grains, spices, and healthy food products through a retail or online store.",
    category: "Food & Beverage",
    level: "Intermediate",
    investment: "₹75,000 - ₹2,00,000",
    skill: "Retail Management",
    isActive: true,
  },
  {
    title: "Healthy Juice & Smoothie Bar",
    description:
      "Serve fresh juices, smoothies, protein shakes, and healthy beverages for fitness-conscious customers.",
    category: "Food & Beverage",
    level: "Beginner",
    investment: "₹40,000 - ₹80,000",
    skill: "Food Service",
    isActive: true,
  },
  {
    title: "Catering Services",
    description:
      "Provide catering services for weddings, corporate events, parties, and social gatherings with customized menus.",
    category: "Food & Beverage",
    level: "Advanced",
    investment: "₹1,00,000 - ₹3,00,000",
    skill: "Catering Management",
    isActive: true,
  },

  {
    title: "Boutique Clothing Brand",
    description:
      "Launch a fashion brand offering custom-designed ethnic, casual, or formal clothing through online and offline channels.",
    category: "Fashion & Beauty",
    level: "Intermediate",
    investment: "₹75,000 - ₹2,00,000",
    skill: "Fashion Design",
    isActive: true,
  },
  {
    title: "Beauty Salon & Spa",
    description:
      "Provide professional beauty, skincare, haircare, and wellness services for men and women.",
    category: "Fashion & Beauty",
    level: "Intermediate",
    investment: "₹1,00,000 - ₹3,00,000",
    skill: "Beauty & Wellness",
    isActive: true,
  },
  {
    title: "Handmade Jewelry Business",
    description:
      "Design and sell handcrafted jewelry through social media, exhibitions, and e-commerce platforms.",
    category: "Fashion & Beauty",
    level: "Beginner",
    investment: "₹20,000 - ₹50,000",
    skill: "Jewelry Design",
    isActive: true,
  },
  {
    title: "Cosmetics & Skincare Brand",
    description:
      "Develop and market natural skincare, beauty, and cosmetic products through retail and online stores.",
    category: "Fashion & Beauty",
    level: "Advanced",
    investment: "₹1,50,000 - ₹5,00,000",
    skill: "Cosmetic Product Development",
    isActive: true,
  },

  {
    title: "Organic Farming Enterprise",
    description:
      "Cultivate organic vegetables, fruits, and herbs using sustainable farming practices and direct-to-consumer sales.",
    category: "Agriculture",
    level: "Intermediate",
    investment: "₹75,000 - ₹2,50,000",
    skill: "Organic Farming",
    isActive: true,
  },
  {
    title: "Hydroponic Farming Business",
    description:
      "Grow vegetables and herbs using hydroponic systems for year-round production with efficient water usage.",
    category: "Agriculture",
    level: "Advanced",
    investment: "₹2,00,000 - ₹5,00,000",
    skill: "Hydroponics",
    isActive: true,
  },
  {
    title: "Dairy & Milk Products Business",
    description:
      "Produce and sell fresh milk, curd, paneer, ghee, and other dairy products to local markets and retailers.",
    category: "Agriculture",
    level: "Intermediate",
    investment: "₹1,50,000 - ₹4,00,000",
    skill: "Dairy Management",
    isActive: true,
  },

  {
    title: "Fitness Training Center",
    description:
      "Open a gym or personal fitness training center offering customized workout programs and wellness coaching.",
    category: "Health & Fitness",
    level: "Intermediate",
    investment: "₹2,00,000 - ₹6,00,000",
    skill: "Fitness Training",
    isActive: true,
  },
  {
    title: "Yoga & Meditation Studio",
    description:
      "Offer yoga, meditation, and mindfulness sessions for individuals, corporate clients, and wellness groups.",
    category: "Health & Fitness",
    level: "Beginner",
    investment: "₹40,000 - ₹1,20,000",
    skill: "Yoga Instruction",
    isActive: true,
  },
  {
    title: "Nutrition & Diet Consultancy",
    description:
      "Provide personalized diet planning, nutrition counseling, and healthy lifestyle coaching for clients.",
    category: "Health & Fitness",
    level: "Intermediate",
    investment: "₹20,000 - ₹60,000",
    skill: "Nutrition",
    isActive: true,
  },
];

export default businessIdeas;
