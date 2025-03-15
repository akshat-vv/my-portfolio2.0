import screen from "../img/screen.jpeg";
import audio from "../img/audio.jpeg";
import weather from "../img/weather.jpeg";
import toDo from "../img/to-do.jpeg";

const information = {
  text: {
    heyText: "Hey, I am",
    knowMoreText: "Know more about me",
  },
  user: {
    name: "Akshat Vijayvergiya",
    role: ["Frontend Developer", "UI Developer", "Graphic Designer"],
  },
  skills: {
    description:
      "Skilled and experienced frontend developer with a strong background increating visually appealing and user-friendly websites and web applications. Proficient in React, HTML, CSS, and JavaScript.Committed to staying current with the latest web development technologies and trends.",
    skillsList: [
      { name: "React Js", experties: 60 },
      { name: "HTML 5", experties: 70 },
      { name: "CSS 3", experties: 90 },
      { name: "Redux", experties: 65 },
      { name: "Material UI", experties: 45 },
      { name: "Git", experties: 60 },
      { name: "Perforce", experties: 70 },
      { name: "Figma", experties: 90 },
      { name: "Photoshop", experties: 60 },
    ],
  },
  work: [
    {
      role: "Frontend Engineer",
      company: "The Hut Group",
      time: "July 2024 - Present",
      desc: [
        "Developed and maintained multi-tenant websites, implementing reusable and adaptable features across various brands",
        "Reduced code complexity and improved frontend stability by 20% through performance optimizations and accessibility fixes",
        "Implemented theme-based customizations, enhancing brand-specific interfaces and boosting user engagement by 15%.",
        "Collaborated with cross-functional teams to deliver scalable, user-centric solutions on tight deadlines."
      ]
    },
    {
      role: "Software Developer",
      company: "Amdocs",
      time: "April 2022 - June 2024",
      desc: [
        "Developing and maintaining dynamic and responsive user interfaces using React.js, contributing to the overall improvement of the user experience.",
        "Collaborating with cross-functional teams, including designers and back-end developers, to understand project requirements and implement front-end solutions.",
        "Implementing state management using Redux, ensuring efficient data flow and application stability.",
        "Creating modular and reusable React components, optimizing code maintainability and facilitating future development.",
        "Integrating RESTful APIs, handling data retrieval and updates for seamless communication with the backend.",
        "Utilized version control like Git, Perforce effectively managing codebase changes and collaborating with team members to resolve merge conflicts.",
        "Implemented responsive web design principles, ensuring a consistent and user-friendly experience across various devices.",
      ],
    },
    {
      role: "Ass. System Engineer",
      company: "TCS",
      time: "November 2020 - April 2022",
      desc: [
        "Engineered cutting-edge single-page applications adhering to the latest business style guide, ensuring a contemporary and brand-aligned digital presence.",
        "Introduced visually compelling and feature-rich pages, enhancing the overall user experience.",
        "Skillfully integrated new functionalities into existing applications, demonstrating adaptability and a deep understanding of project architecture.",
        "Orchestrated the integration of new features seamlessly across various pages within the existing application, ensuring a coherent and unified user experience.",
        "Managed the application's state using Redux, proficiently creating actions and reducers to handle updates systematically."
      ],
    },
    {
      role: "UI Developer",
      company: "Quantic Clouds",
      time: "May 2020 - October 2020",
      desc: [
        "Designing and implementing layouts: Use HTML and CSS to design and implement the layout of web pages, including the placement of elements such as text, images, and buttons.",
        "Creating responsive design: Use CSS to create responsive designs that adapt to different screen sizes and resolutions, ensuring that the web pages look good on different devices.",
      ],
    },
  ],
  projects: [
    {
      name: "Screen Sharing tool",
      description:
        "A screen sharing tool using Java is a software application that allows one user to share their computer screen with another user over the internet. The application captures screenshots of the host's screen at regular intervals and sends them to the client in real-time, allowing the client to see the host's screen as if they were sitting in front of it.",
      techStack: ["Java", "Swing"],
      image: screen,
    },
    {
      name: "Audio Book Library",
      description:
        "An audio book library project made using React, HTML, CSS, and JavaScript is a web application that allows users to access and listen to audio books.The application uses JavaScript to handle the functionality of the application, such as routing, user authentication, and audio playback.",
      techStack: ["React", "HTML", "CSS", "JS"],
      image: audio,
    },
    {
      name: "Weather App",
      description:
        "A weather app using React is a web or mobile application that allows users to view current weather information and forecast for a specific location.",
      techStack: ["HTML", "CSS", "JS"],
      image: weather,
    },
    {
      name: "To-Do List App",
      description:
        "A to-do list app using React Native is a mobile application that allows users to create and manage a list of tasks, or to- do's, that they need to complete. The app would be built using the React Native framework, which allows developers to use React to build mobile apps for iOS and Android.",
      techStack: ["React Native", "HTML", "CSS", "JS"],
      image: toDo,
    },
  ],
};

export default information;
