/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Evans Djangbah",
  title: "Hi all, I'm Evans",
  subTitle: emoji(
    "I'm a passionate Mechanical Engineer 🚀 with a huge crush on robots and making functional engineering designs. Excels in electronics, software development and embedded software and hardware as well."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/djangbahevans",
  linkedin: "https://www.linkedin.com/in/djangbahevans/",
  gmail: "djangbahevans@gmail.com",
  // gitlab: "https://gitlab.com/djangbahevans",
  facebook: "https://www.facebook.com/djangbahevans",
  // medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/7770070/djangbahevans",
  twitter: "https://twitter.com/djangbahevans",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY MECHANICAL ENGINEER WITH A WIDE RANGE OF SKILLS ACROSS BOARD",
  skills: [
    emoji(
      "⚡ I don't just design products, I develop solutions that solves your every need"
    ),
    emoji("⚡ From design to development, to rendering, to electronics integration, Evans has got you covered"),
    emoji(
      "⚡ I bring a wide range of skills to the table to develop smart, foolproof solutions that just work"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // {
    //   skillName: "html-5",
    //   fontAwesomeClassname: "fab fa-html5"
    // },
    // {
    //   skillName: "css3",
    //   fontAwesomeClassname: "fab fa-css3-alt"
    // },
    // {
    //   skillName: "JavaScript",
    //   fontAwesomeClassname: "fab fa-js"
    // },
    // {
    //   skillName: "reactjs",
    //   fontAwesomeClassname: "fab fa-react"
    // },
    // {
    //   skillName: "nodejs",
    //   fontAwesomeClassname: "fab fa-node"
    // },
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Kwame Nkrumah University of Science and Technology",
      logo: require("./assets/images/knust_logo.png"),
      subHeader: "Bachelor of Science in Mechanical Engineering",
      duration: "September 2013 - July 2017",
      desc: "Graduated with a Second Class Upper division. President of the Society of Automotive Engineers (2016-2017).",
      descBullets: [
        // ""
      ]
    },
    {
      schoolName: "Ghana Secondary Technical School",
      logo: require("./assets/images/GSTS_logo.jpg"),
      subHeader: "High School Diploma in General Science",
      duration: "September 2008 - May 2012",
      desc: "Graduated with 6 A's and 2 B's.",
      descBullets: [
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Mechanical Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Software Development",
      progressPercentage: "70%"
    },
    {
      Stack: "Embedded Systems Development",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "Kumasi Hive",
      companylogo: require("./assets/images/kumasi_hive_logo.jpg"),
      date: "August 2021 – Present",
      desc: "Volunteered for this role to gain more experience in professional software development.",
      descBullets: [
        "Develop frontend applications for Kumasi Hive subsidiaries like Hive Academy",
        "Lead design engineer for all engineering hardware"
      ]
    },
    {
      role: "Robotics Lab Lead",
      company: "Kumasi Hive",
      companylogo: require("./assets/images/kumasi_hive_logo.jpg"),
      date: "January 2020 – Present",
      desc: "Volunteered to create the Robotics Lab as a result of my passion in robotics and my hope to work with them in the long term.",
      descBullets: [
        "Head of the robotics lab",
        "Develops training curriculum and manual",
        "Runs training programs to train the general public in robotics based on ROS"
      ]
    },
    {
      role: "Makerspace Associate",
      company: "Kumasi Hive",
      companylogo: require("./assets/images/kumasi_hive_logo.jpg"),
      date: "July 2018 – Present",
      desc: "Original role at Kumasi Hive. Worked in a team of 4 individuals to accomplish company objectives.",
      descBullets: [
        "Head of the master craftsmen team",
        "Lead design engineer for all engineering hardware",
        "Lead of making and engineering of hardware components needed for any training program and/or projects",
        "Lead of the Makerspace and responsible for all tools in equipment including 3D printers and laser cutters",
        "Design and build necessary machines for the Hive Biolab"
      ]
    },
    {
      role: "Teaching Assistant",
      company: "Kwame Nkrumah University of Science and Technology",
      companylogo: require("./assets/images/knust_logo.png"),
      date: "September 2017 – July 2018",
      desc: "Mandatory National Service posting. I was the teaching assistant to 3 supervisors, Dr F. Nyarko, Dr G. Takyi, and Mr M.N. Sackey.",
      descBullets: [
        "Organized and led tutorial extra class sessions",
        "Substituted for supervisors in class when they were not available",
        "Helped supervisors to grade student tests and exams",
        "Ensured all needed logistics for class were available on time",
        "Assisted supervisors with research work by writing code to perform data analysis as directed by supervisor"
      ]
    },
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
      image: require("./assets/images/yah_logo.webp"),
      projectName: "Lab and Library on Wheels with Young at Heart Ghana",
      projectDesc: "Designed and developed a mobile, portable laptop charging cart, with solar housing to be deployed in rural schools.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.youngatheartgh.com/lab-and-library-on-wheels-system"
        }
        //  you can add extra buttons here.
      ]
    },
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   projectName: "Nextu",
    //   projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "http://nextu.se/"
    //     }
    //   ]
    // }
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
      title: "2021 PARC Virtual Robotics Engineers League Winner",
      subtitle:
        "Led Team Asimov to develop a mobile robot that can navigate a city block safely, while obeying traffic rules and avoiding obstacles.",
      image: require("./assets/images/parc_logo.png"),
      footerLink: [
        {
          name: "Announcement",
          url: "https://twitter.com/ParcRobotics/status/1437373941056774150"
        },
        {
          name: "Phase 1 Code",
          url: "https://github.com/djangbahevans/parc-solution"
        },
        {
          name: "Phase 2 Code",
          url: "https://github.com/djangbahevans/parc-phase2"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With love for building cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://djangbah.wordpress.com/2018/11/01/dont-just-learn-ansys-learn-the-finite-element-method",
      title: "Don’t just learn ANSYS. Learn the Finite Element Method.",
      description:
        "At the end of the first semester of my final year as an undergraduate, we were expected to have a defense on our progress of our final year projects so far. My team was working on a Tesla turbine."
    },
    {
      url: "https://djangbah.wordpress.com/2017/12/18/by-way-of-introduction",
      title: "By Way of Introduction…",
      description:
        "I created this blog in 2010 while I was a third-year high school student at Ghana Secondary Technical School. At the time, I had no idea what I wanted to write about."
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

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+233501360696",
  email_address: "djangbahevans@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "djangbahevans", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
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
  twitterDetails
};
