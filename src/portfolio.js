/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Zain Mushtaq",
  title: "Hi all, I'm Zain",
  subTitle: emoji(
    "A motivated Full Stack Software Developer 🚀 with over a year of experience in Backend Development, specializing in PHP, Laravel, CodeIgniter, HTML, CSS, Bootstrap, jQuery, JSON, MySQL, API development, and Power Apps."
  ),
  resumeLink:
    "/resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/zain3330",
  linkedin: "https://www.linkedin.com/in/zainmushtaq/",
  gmail: "zainmushtaq055@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE BACKEND DEVELOPER WITH A DRIVE TO MASTER EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop and maintain robust Backend architectures using PHP, Laravel, and CodeIgniter"
    ),
    emoji(
      "⚡ Build responsive and dynamic Front end / User Interfaces with HTML5, CSS3, Bootstrap, Tailwind, and React.js"
    ),
    emoji(
      "⚡ Expertise in Database management and optimization using MySQL"
    ),
    emoji(
      "⚡ Integration of APIs and third-party services, ensuring seamless interactions and data flow"
    ),
    emoji(
      "⚡ Develop enterprise-level systems such as ERP and HMIS, tailored to client needs"
    ),
    emoji(
      "⚡ Utilize Power Apps for Mobile App Development and automation of business processes"
    ),
    emoji(
      "⚡ Proficient in Web Scraping to gather and analyze data from various sources"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "tailwind",
      fontAwesomeClassname: "fas fa-wind"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "jquery",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "codeigniter",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "mysql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "web scraping",
      fontAwesomeClassname: "fas fa-search"
    },
    {
      skillName: "power apps",
      fontAwesomeClassname: "fas fa-mobile-alt"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Lahore",
      // logo: require("./assets/images/uol.webp"), // Replace with the correct path to your university's logo
      subHeader: "Bachelor of Science in Computer Science (BSCS)",
      duration: "September 2018 - July 2022", // Adjusted to reflect the typical duration of a bachelor's degree
      desc: "Focused on web development, database management, and mobile app technologies.",
      descBullets: [
      "Completed a final year project titled 'PLAYit,' a mobile application developed using React Native that allows users to play audio and videos. The app includes unique features such as Video Locker, Video Downloader, and support for HD and 4K video formats.",
      ]
    },

    {
      schoolName: "Forman Christian College (A Chartered University)",
      // logo: "https://www.fccollege.edu.pk/wp-content/uploads/2020/06/FCC-Logo-White.png", // Replace with the correct logo URL if available
      subHeader: "F.Sc. Pre-Engineering (Intermediate)",
      duration: "2015 - 2017",
      desc: "Completed Intermediate studies with a focus on Pre-Engineering subjects, laying the foundation for a career in computer science and engineering.",
      descBullets: [
        "Gained strong foundational knowledge in mathematics, physics, and chemistry",
        "Developed problem-solving skills essential for engineering and technology disciplines",
        "Participated in various academic and extracurricular activities, enhancing both technical and soft skills"
      ]
    }

  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend Development", // Reflects your experience in backend technologies
      progressPercentage: "80%" // Adjusted based on your experience and expertise
    },
    {
      Stack: "Frontend Development", // Reflects your experience in frontend technologies
      progressPercentage: "70%" // Adjusted based on your experience and expertise
    },
    {
      Stack: "Database Management", // Represents your skills in database technologies
      progressPercentage: "75%" // Adjusted based on your experience and expertise
    },
    {
      Stack: "Web Scraping", // Reflects your experience in web scraping
      progressPercentage: "65%" // Adjusted based on your experience and expertise
    },
    {
      Stack: "Mobile App Development", // Reflects your experience with Power Apps
      progressPercentage: "60%" // Adjusted based on your experience and expertise
    }
  ],
  displayCodersrank: false // Set true to display CodersRank badges section
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Fatima Memorial Hospital",
      companylogo: require("./assets/images/fmh3.png"),       date: "March 2024 – Present",
      // desc: "Designed and implemented a Power App to verify employee discounts on Outpatient (OPT) and Inpatient (IPT) services, enhancing efficiency and accuracy in discount management. Provide ongoing support and maintenance for ERP and Hospital Management Information System (HMIS) solutions, ensuring seamless integration and optimal performance. Additionally, working on a job portal project, focusing on development and integration of job listing features.",
      descBullets: [
        "Developed a Power App for managing and verifying employee discounts on healthcare services",
        "Provided support for ERP and HMIS solutions, ensuring seamless integration and performance",
        "Collaborated with cross-functional teams to enhance system features and resolve issues",
        "Currently developing and integrating features for a job portal project"
      ]
    },
    {
      role: "Backend Developer",
      company: "Freelancer",
      companylogo: require("./assets/images/freelacer.webp"),       date: "March 2023 – February 2024",
      // desc: "Developed a comprehensive Fuel Management System for Almeraj Groups using PHP CodeIgniter. Designed and implemented the system's architecture, ensuring scalability and performance. Built and maintained Laravel APIs for a Coach Analysis Platform to manage teams, players, coaches, and videos.",
      descBullets: [
        "Developed a Fuel Management System with PHP CodeIgniter, focusing on scalability and performance",
        "Designed and implemented system architecture for efficient fuel management",
        "Built and maintained Laravel APIs for managing teams, players, coaches, and videos"
      ]
    },
    {
      role: "Frontend Developer",
      company: "Snexus",
      companylogo: require("./assets/images/snexus.jpeg"), // Replace with the correct logo URL if available
      date: "November 2022 – February 2023",
      // desc: "Worked as a UI Developer responsible for converting PSD designs to HTML, HTML5/CSS3/JS, and React JS Framework. Focused on creating responsive, user-friendly front-end interfaces.",
      descBullets: [
        "Converted PSD designs to HTML, HTML5, CSS3, and JavaScript",
        "Developed user interfaces using React JS Framework",
        "Ensured responsiveness and cross-browser compatibility"
      ]
    }
  ]

};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/pro1.png"),
      projectName: "Coaches Sports Analysis",
      projectDesc: "A platform designed to assist coaches in analyzing sports performances, enabling them to manage teams, track player progress, and review game footage. The project includes features for uploading and categorizing videos, and comprehensive data analytics.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://stage.coachessportsanalysis.com/login"
        }
        // You can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/pro2.png"),
      projectName: "Fuel Management System - Almeraj Groups",
      projectDesc: "Developed for Almeraj Groups, this system manages fuel consumption, tracks usage, and generates reports for better resource management. The project focuses on enhancing operational efficiency and scalability.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.almerajgroups.com/dashboard"
        }
      ]
    }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+923095911378",
  email_address: "zainmushtaq055@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
