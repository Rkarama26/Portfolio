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
  username: "Rohit vishwakarma",
  title: "Hi all, I'm Rohit",
  subTitle: emoji(
    "A passionate Software Engineer 🚀 with a focus on Java, Spring Boot, and React. Experienced in building scalable, full-stack applications, including backend APIs and frontend UI. Eager to apply my skills and grow as a developer in the tech industry. Welcome to my portfolio!"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1QNPI3HIkUk3ILvEWkSyRIndTcLX_6cVU/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Rkarama26",
  linkedin: "https://www.linkedin.com/in/rohit026/",
  gmail: "rohit.karma026@gmail.com",
  x: "https://x.com/Rohit_karma_",
  //gitlab: "https://gitlab.com/saadpasta",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY SOFTWARE DEVELOPER WHO WANTS TO EXPLORE",
  skills: [
    emoji(
      "⚡ Develop scalable and efficient full-stack applications using Java, Spring Boot, and React."
    ),
    emoji("⚡ Build robust backend APIs and design user interfaces."),
    emoji(
      "⚡ Integrate and optimize messaging systems like Kafka and RabbitMQ for seamless communication between services."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "spring",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "spring boot",
      fontAwesomeClassname: "fas fa-power-off"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
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
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
      logo: require("./assets/images/RGPV-Logo.webp"),
      subHeader: "Bachelor of Technology",
      duration: "September 2021 - April 2025",
      desc: "Electronics & Communication.",

    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Java",
      progressPercentage: "100%"
    },
    {
      Stack: "JavaScript",
      progressPercentage: "100%"
    },

    {
      Stack: "React",
      progressPercentage: "100%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Innobimb Infotech",
      companylogo: require("./assets/images/innobimbinfotech_logo.jpeg"),
      //src\assets\images\innobimbinfotech_logo.jpeg
      date: "September 2024 – December 2024",
      desc: "Building Secure and Efficient APIs: Software Engineering Internship at Innobimb Infotech",
      descBullets: [
        " Developed secure RESTful APIs using Java 17 and Spring Boot, implementing OAuth2 for user authentication.",
        " Enhanced database performance with Spring Data JPA, reducing data retrieval time by 30%."
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
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Won National Science confrence",
      subtitle:
        "Achieved first place at NCRIMA 2024 for designing an innovative IoT-based health monitoring solution.",
      image: require("./assets/images/IEEE.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        /* {
           name: "Certification",
           url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
         },
         */
      ]
    },
    {
      title: "Entrepreneurship Co-Chair, Young Indians",
      subtitle:
        "Organized 5 seminars with industry experts for 1000+ participants and led 4 workshops, enhancing entrepreneurial skills for 150+ attendees.",
      image: require("./assets/images/yi.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        /*  {
            name: "View Google Assistant Action",
            url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
          }
            */
      ]
    },

    {
      title: "Cloud Computing with AWS",
      subtitle: "Completed Certifcation from E-cell, IIT Kharagpur for Amazon Web Services.",
      image: require("./assets/images/IIT.jpeg"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/1goyKWNexMBgqRpiOOpKQtcDhLhIFLX4x/view" },
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
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
  displayMediumBlogs: "true", 
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
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9407274612",
  email_address: "rohit.karma026@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "Rohit_karma_", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
