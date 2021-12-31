/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Kartikeya",
  logo_name: "khatri.k()",
  nickname: "kaka",
  full_name: "Kartikeya Khatri",
  subTitle: "Software Development Manager at Amazon🔥.",
  resumeLink:
    "https://drive.google.com/file/d/1PA3Kq1xRcDCcFGPEB2n1wijmMB9Iu67m/view?usp=sharing",
  mail: "mailto:kartikkhatri01@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/869kartik",
  linkedin: "https://www.linkedin.com/in/kartikeya-khatri-a299b214/",
  gmail: "kartikkhatri01@gmail.com",
  facebook: "https://www.facebook.com/kartik.khatri1",
  twitter: "https://twitter.com/Kartikeya9",
  instagram: "https://www.instagram.com/private_final_static/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        `⚡ A passionate technology professional with a proven track record in building, architecting and delivering highly
        reliable and scalable applications across diverse engineering domains such as internet/enterprise applications, voice,
       e-commerce and financial systems. Highly adept in driving fast paced projects and implementing innovative solutions to
       engineering problems at scale. Currently working as a Software Development Manager 3, Amazon Alexa, Bay Area`,
      ],
      softwareSkills: [
        {
          skillName: "Dynamo DB",
          fontAwesomeClassname: "logos:aws-dynamodb",
          style: {
            color: "black",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "S3",
          fontAwesomeClassname: "logos:aws-s3",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },

        {
          skillName: "Elasticsearch",
          fontAwesomeClassname: "logos:elasticsearch",
          style: {
            color: "#7377AD",
          },
        },
        {
          skillName: "SQS",
          fontAwesomeClassname: "logos:aws-sqs",
          style: {
            color: "#7377AD",
          },
        },
        {
          skillName: "SNS",
          fontAwesomeClassname: "logos:aws-sns",
          style: {
            color: "#7377AD",
          },
        },
        {
          skillName: "Cloudwatch",
          fontAwesomeClassname: "logos:aws-cloudwatch",
          style: {
            color: "#7377AD",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        // {
        //   skillName: "GraphQL",
        //   fontAwesomeClassname: "simple-icons:graphql",
        //   style: {
        //     color: "#DE33A6",
        //   },
        // },

        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:amazondynamodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Indian Institue of Technology, Roorkee",
      subtitle: "Bachelor in Production & Industrial Engineering",
      logo_path: "ssec.png",
      alt_name: "SSEC",
      duration: "2008 - 2012",
      descriptions: [
        "⚡ I have studied supply chain management, operational planning and various other subjects related to Industrial engineering. ",
      ],
      website_link:
        "https://new.iitr.ac.in/Main/pages/_en_Indian_Institute_of_Technology_Roorkee__en_.html",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Architecting on AWS",
      logo_path: "mongo.png",
      alt_name: "MongoDB University",
      // color_code: "#2AAFED",
      color_code: "#47A048",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description: "I have 9+ years of Experience in Tech Industry.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Software Development Manager",
          company: "Amazon",
          company_url: "https://amazon.com",
          logo_path: "amazon.jpg",
          duration: "Aug 2016 - Present",
          location: "United States",
          description: `1) Leading team of 6 people and responsible for driving the strategic development of Atocha tool. Atocha
          tool is being used by 700 services and handles 2.7 trillion requests per day.\n
                        2) Be a key contributor to our success and drive the strategic development of the Amazon Atocha Tool that includes multiple web services and UI Components.
                        3) Design and build customer and business facing highly visible features for Atocha Tool.
                        4) Interact with business stakeholders and other technology teams while innovating software solutions and laying the software foundation for supporting many new business initiatives for years to come.
                        5) Estimate engineering effort, plan implementation, and rollout system changes that meet requirements for functionality, performance, scalability, reliability, and adherence to development goals and principles.
                        6) Help onboard new SDEs in team by assisting them in technical challenges and training them in amazon specific technologies.
                        7) Participate in the full software development lifecycle, working within broadly defined parameters, using specialized knowledge of Web based technologies and amazon AWS services`,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
        {
          title: "Software Development Engineer",
          company: "Snapdeal",
          company_url: "http://snapdeal.com/",
          logo_path: "snapdeal.jpg",
          duration: "July 2015 - July 2016",
          location: "Gurgaon, India",
          description: `Worked on designing and building the financial system which was responsible for calculation the seller price, margin, shipping cost etc for the millions of items on Snapdeal.
                        2) Built the new system called Duco from scratch which computed the storage cost of the seller items being stored in Snapdeal Warehouses.`,
          color: "#ee3c26",
        },
        {
          title: "Application Developer",
          company: "Oracle",
          company_url: "http://oracle.com/",
          logo_path: "oracle.png",
          duration: "July 2012 - Dec 2014",
          location: "Hyerabad, India",
          description: `1) Design the appropriate model for the items, integrated with the existing one for the items of Sales and Operation Planning.
                                   2) Introducing the additional feature of exporting the customized profile, other than the pre seeded one for Demand Planning.
                                   3) Work closely with other engineers to develop the best technical design and approach for new product development.`,
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "kartikdp.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle: "",
    link: "https://medium.com/@kartikkhatri01",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "AutomateInstaPyBot",
      url: "https://github.com/harikanani/AutomateInstaPyBot",
      description:
        "This is Instagram Bot. This will login to your Instagram account. Follow Users, Unfollow Users, Remove Profile Photo",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "1",
      name: "react-twitter-clone",
      url: "https://github.com/harikanani/react-twitter-clone",
      description:
        "A React Twitter Clone UI with basic functionality such as make a Tweet.Embedded Profile Tweets and Share on Twitter.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      id: "2",
      name: "node-blockchain",
      url: "https://github.com/harikanani/node-blockchain",
      description:
        "A simple blockchain and cryptocurrency wallet implemented in Node.js and TypeScript (for learning purposes).",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "TypeScript",
          iconifyClass: "logos-typescript",
        },
      ],
    },
    {
      id: "3",
      name: "top-crypto-gainers",
      url: "https://github.com/harikanani/top-crypto-gainers",
      description:
        "A top high price changed crypto coins wring 24 hoursA sound-classifier webapp made with ReactJS + TensorflowJS.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "4",
      name: "personal-portfolio",
      url: "https://github.com/harikanani/personal-portfolio",
      description:
        "A simple command line interface based quiz app to know more about me :).",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "3",
      name: "node_express_crud_api_starter",
      url: "https://github.com/harikanani/node_express_crud_api_starter",
      description: "Simple NodeJS Express CRUD Operations API starter.",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "4",
      name: "node-web-scrapper",
      url: "https://github.com/harikanani/node-web-scrapper",
      description:
        "A Simple web scrapper that scrap the information of amazon products such as price.It also scrap Wikipedia Data such as birthdate.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "5",
      name: "harikanani.github.io",
      url: "https://github.com/harikanani/harikanani.github.io",
      description:
        "A Personal Portfolio Website that showcases my work and experience. which is hosted on Github Pages.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "SCSS",
          iconifyClass: "vscode-icons:file-type-scss2",
        },
      ],
    },
    {
      id: "6",
      name: "Automate Attendace",
      url: "https://github.com/harikanani/Node_Python",
      description: "Automation of Online Attendance using node js and python",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "7",
      name: "Automate Discord Bot",
      url: "https://github.com/harikanani/AutomateDiscordBot",
      description:
        "A Discord Bot to send Automatic messages to serer channel in regular time difference.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Python Selenium",
          iconifyClass: "logos-selenium",
        },
        {
          name: "Chromium Browser",
          iconifyClass: "openmoji-chromium",
        },
      ],
    },
    {
      id: "8",
      name: "Flask Blog",
      url: "https://github.com/harikanani/flask_blog",
      description: "A Simple Blog Web Application made using Flask Framework",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "cib-flask",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
      ],
    },
    {
      id: "9",
      name: "Netflix top series",
      url: "https://github.com/harikanani/netflix-top-series",
      description: "List of Top Netflix Series which is deployed to vercel.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
      ],
    },
    {
      id: "10",
      name: "COVID-19 Tracker",
      url: "https://github.com/harikanani/Covid19TrackerReact",
      description:
        "Simple Covid-19 Tracker made using React and deployed to Vercel.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
      ],
    },
    {
      id: "11",
      name: "Food Order Static Website",
      url: "https://github.com/harikanani/food-order-website",
      description:
        "A simple static website related to food restaurants service. this is reasponsive as well.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "PHP",
          iconifyClass: "logos-php",
        },
      ],
    },
    {
      id: "12",
      name: "NFT Launchpad",
      url: "https://deliquescent-cents.000webhostapp.com/",
      description: "NFT Launchpad crypto site portfolio",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
