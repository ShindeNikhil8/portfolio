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
  username: "Nikhil Shinde",
  title: "Hi all, I'm Nikhil",
  subTitle: emoji(
    "I am a final-year Information Technology Engineering student with a strong interest in software development, web technologies, and data science. I enjoy solving problems, building projects that create real-world impact, and continuously improving my skills. With hands-on experience in full-stack development and software engineering, I am eager to apply my knowledge to develop efficient, scalable, and user-focused solutions while continuing to grow as a versatile developer."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1geNCmqS2Ts-yaDkeJvdkE-7mo4viUVQh/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ShindeNikhil8",
  linkedin: "https://www.linkedin.com/in/nikhil-shinde-b94671259",
  gmail: "nikhil892003.93.20@gmail.com",
  gitlab: "https://gitlab.com/nikhil892003.93.20",
  leetcode:"https://leetcode.com/u/Nikhil_Shinde8/",
  codechef:"https://www.codechef.com/users/nikhilshinde89",
  hackerrank:"https://www.hackerrank.com/profile/nikhil892003_931",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle:
    "PASSIONATE FULL STACK DEVELOPER | SOFTWARE ENGINEER | LIFELONG LEARNER 🚀",
  skills: [
    emoji("⚡ Build responsive and interactive Frontend/User Interfaces using React.js, HTML, CSS, JavaScript, and Tailwind CSS"),
    emoji("⚡ Develop scalable Backend services with Node.js and Express, integrating MongoDB & SQL databases"),
    emoji("⚡ Strong foundation in C, C++, Java, and Data Structures & Algorithms for problem-solving"),
    emoji("⚡ Explore Data Science & Machine Learning techniques with Python (classification, regression, data analysis)"),
    emoji("⚡ Manage version control and collaboration using Git & GitHub")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */


  
  softwareSkills: [
  {
    skillName: "C++",
    fontAwesomeClassname: "devicon-cplusplus-plain colored"
  },
  {
    skillName: "C",
    fontAwesomeClassname: "devicon-c-plain colored"
  },

  {
    skillName: "Java",
    fontAwesomeClassname: "fab fa-java"
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "React",
    fontAwesomeClassname: "fab fa-react"
  },
  {
    skillName: "Node.js",
    fontAwesomeClassname: "fab fa-node"
  },
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "MongoDB",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "SQL",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "Tailwind CSS",
    fontAwesomeClassname: "fas fa-paint-brush"
  },
  {
    skillName: "Git",
    fontAwesomeClassname: "fab fa-git-alt"
  },
  {
    skillName: "GitHub",
    fontAwesomeClassname: "fab fa-github"
  }
],
  display: true // Set false to hide this section, defaults to true
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Pimpri Chinchwad College of Engineering, Pune",
      logo: require("./assets/images/pccoe_logo.png"), // keep your PCCOE logo image here
      subHeader: "Bachelor of Engineering in Information Technology",
      duration: "November 2022 - June 2026", // adjust as per your actual batch
      desc: "Actively involved in academics, technical projects, and co-curricular activities at PCCOE. Developed a strong foundation in software engineering, and emerging technologies.",
      descBullets: [
        "Worked on projects like DoubtSolver (Q&A platform) and StudyNotion (EdTech frontend)",
        "Explored domains such as Full Stack Development, Data Science, and Machine Learning",
        "Participated in coding competitions, hackathons, and group projects",
        "Gained practical experience in teamwork, collaboration, and problem-solving"
      ]
    },
    {
      schoolName: "DNYANTIRTH INTERNATIONAL SCHOOL AND JUNIOR COLLEGE",
      logo: require("./assets/images/dnyantirth.jpg"),
      subHeader: "Higher Secondary Education (HSC) - Science Stream",
      duration: "June 2020 - March 2022",
      desc: "Completed Higher Secondary education with specialization in Physics, Chemistry, and Mathematics.",
      descBullets: [
        "Focused on strengthening fundamentals of Mathematics and Computer Science",
      ]
    },
    {
      schoolName: "Auxilium Convent High School",
      logo: require("./assets/images/auxilium.webp"), // replace with actual logo
      subHeader: "Secondary School Certificate (SSC)",
      duration: "June 2018 - March 2020",
      desc: "Completed secondary education with distinction, building strong academic foundations.",
      descBullets: [
        "Actively engaged in extracurricular and cultural activities",
        "Laid the foundation for future studies in Science and Technology"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", 
      progressPercentage: "85%" // React, HTML, CSS, JS, Tailwind
    },
    {
      Stack: "Backend", 
      progressPercentage: "75%" // Node.js, Express
    },
    {
      Stack: "Databases", 
      progressPercentage: "70%" // MongoDB, SQL
    },
    {
      Stack: "Programming & DSA", 
      progressPercentage: "90%" // C, C++, Java, problem-solving
    },
    {
      Stack: "Machine Learning / Data Science", 
      progressPercentage: "55%" // Python, ML basics
    },
    {
      Stack: "Version Control & Tools", 
      progressPercentage: "80%" // Git, GitHub
    }
  ],
  displayCodersrank: false // keep it false unless you want to add CodersRank badges
};


// Work experience section

const workExperiences = {
  display: true, // Set to true to show workExperiences Section
  experience: [
    {
      role: "Web Development Intern",
      company: "Team Anantam Rocketry & Space Research (TARSR), PCCOE Pune",
      companylogo: require("./assets/images/logo.png"), // Add your logo image here
      date: "Jul 2025 – Aug 2025",
      desc: "Successfully completed an internship focusing on website development for Team Anantam Rocketry & Space Research. Demonstrated dedication, creativity, and professionalism in all assigned tasks, contributing significantly to enhancing the team's digital presence.",
      descBullets: [
        "Developed and maintained responsive and user-friendly web pages for the official team website.",
        "Ensured smooth navigation and optimal performance across devices.",
        "Applied problem-solving skills and creativity to improve website functionality.",
        "Contributed to building a professional digital presence for the team, adding value to TARSR initiatives."
      ],
      certificateLink: "https://drive.google.com/file/d/1Ue2DMm4SR1sc25qma0zPylJAnMVJ60IE/view?usp=sharing" // Add link to your certificate or leave blank
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
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
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
      title: "Postman API Fundamentals – Student Expert",
      subtitle: "Earned Student Expert certification by mastering Postman API testing and collaboration tools.",
      image: require("./assets/images/Postman-Logo.jpg"),
      imageAlt: "Postman Logo",
      footerLink: [
        {
          name: "View Certificate",
          badge:"./assets/images/postman_badge.png", // replace with your badge image
          url: "https://drive.google.com/file/d/13fgGci-32KNl7Z-L1xGrK8ymy6MdouII/view?usp=sharing" // replace with your certificate link
        }
      ]
    },
    {
      title: "Java (Basic) – HackerRank",
      subtitle: "Successfully cleared the HackerRank Java Basic Skills Certification Test.",
      image: require("./assets/images/javalogo.png"),
      imageAlt: "Java Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1BKC8MOTdGHDKCkESxKgwLrTZH-_FEXl5/view?usp=sharing"
        }
      ]
    },
    {
      title: "C Programming Course Certificate",
      subtitle: "Earned certification in C Programming, focusing on data structures, problem solving, and algorithms.",
      image: require("./assets/images/cLogo.jpg"),
      imageAlt: "C Language Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1DwT_m_xl6xJB4tfagOQZC9bWDDAiATZB/view?usp=sharing"
        }
      ]
    },
    {
      title: "Extra-Curricular Achievements",
      subtitle: "Participated and excelled in various non-technical events and competitions.",
      image: require("./assets/images/trophy.jpg"),
      imageAlt: "Trophy Icon",
      footerLink: [
        { name: "Virtual Treasure Hunt", url: "" },
        { name: "2nd Prize – Live Painting Competition", url: "" },
        { name: "Hobby Exhibition", url: "" }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
  display: true // Set false to hide this section, defaults to true
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
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
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
  // number: "+92-0000000000",
  email_address: "nikhil892003.93.20@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
