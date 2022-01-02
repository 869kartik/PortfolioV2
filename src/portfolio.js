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
  logo_name: "khatrik.k()",
  nickname: "kaka",
  full_name: "Kartikeya Khatri",
  subTitle: "Software Development Manager at Amazon🔥",
  description:
    "Welcome to my portfolio and to a place where I will share my experiences/learnings from trying out different tech, reading different books & blogs.",
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
  twitter: "https://twitter.com/kartik869",
  instagram: "https://www.instagram.com/private_final_static/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        `⚡ Design, implement and deploy distributed and highly scalable systems using specialized knowledge of Web based technologies and Cloud services. 
        `,
        `⚡ Mentor new team members and junior engineers, help them learn tech stack and system design. 
        `,
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
      title: "Software Management",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Partner with software development, product  teams to solve complex problems.",
        "⚡ Work closely with the engineers to architect and develop the best technical design and approach.",
        "⚡ Instill best practices for software development and documentation, assure designs meet requirements and deliver high-quality work on tight schedules.",
        "⚡ Prepare technical requirements and software design specifications.",
        "⚡ Effectively mentor and manage a team of software developers including their projects and performance.",
      ],
      softwareSkills: [],
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
          description: `⚡ Leading team of 6 people and responsible for driving the strategic development of Atocha tool. Atocha
          tool is being used by 700 services and handles 2.7 trillion requests per day.
                        ⚡ Be a key contributor to our success and drive the strategic development of the Amazon Atocha Tool that includes multiple web services and UI Components.
                        ⚡ Design and build customer and business facing highly visible features for Atocha Tool.
                        ⚡ Interact with business stakeholders and other technology teams while innovating software solutions and laying the software foundation for supporting many new business initiatives for years to come.
                        ⚡ Estimate engineering effort, plan implementation, and rollout system changes that meet requirements for functionality, performance, scalability, reliability, and adherence to development goals and principles.
                        ⚡ Help onboard new SDEs in team by assisting them in technical challenges and training them in amazon specific technologies.
                        ⚡ Participate in the full software development lifecycle, working within broadly defined parameters, using specialized knowledge of Web based technologies and amazon AWS services`,
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
          description: `⚡ Worked on designing and building the financial system which was responsible for calculation the seller price, margin, shipping cost etc for the millions of items on Snapdeal.
                        ⚡ Built the new system called Duco from scratch which computed the storage cost of the seller items being stored in Snapdeal Warehouses.`,
          color: "#ee3c26",
        },
        {
          title: "Application Developer",
          company: "Oracle",
          company_url: "http://oracle.com/",
          logo_path: "oracle.png",
          duration: "July 2012 - Dec 2014",
          location: "Hyerabad, India",
          description: `⚡ Design the appropriate model for the items, integrated with the existing one for the items of Sales and Operation Planning.
                                   ⚡ Introducing the additional feature of exporting the customized profile, other than the pre seeded one for Demand Planning.
                                   ⚡ Work closely with other engineers to develop the best technical design and approach for new product development.`,
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Learning",
  description:
    "Here are my different experiences/learnings from trying out different tech/books.",
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
  books: [
    {
      title: "Books",
      experiences: [
        {
          title: "NoSql For Dummies",
          company: "Book to learn NoSql",
          company_url: "https://amazon.com",
          logo_path: "nosqldummy.png",
          duration: "Aug 2021 - Jan 2022",
          location: "United States",
          description: `⚡ Its not a good book to learn NoSql from start.
                     ⚡ It talks about consistency, maintenance and cluster management a lot.
                     ⚡ It does talk about query and search functionality but it doesnt talk about it in detail which I believe is the first step to learn NoSql`,

          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
      ],
    },
  ],
  blogs: [
    {
      title: "Blogs",
      experiences: [],
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
