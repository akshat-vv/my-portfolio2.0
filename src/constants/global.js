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
      { name: "Redux", experties: 40 },
      { name: "Material UI", experties: 30 },
      { name: "Git", experties: 60 },
      { name: "Perforce", experties: 70 },
      { name: "Figma", experties: 90 },
      { name: "Photoshop", experties: 60 },
    ],
  },
  work: [
    {
      role: "Software Developer",
      company: "Amdocs",
      time: "April 2022 - Present",
      desc: [
        "Building and maintaining the user interface of a web application using the React JavaScript library.",
        "Responsible for creating reusable components and implementing the application's visual design and user interactions.",
        "Integrating new functionality in existing application.",
        "Managing the application's state and props to ensure that the UI is updated correctly using Redux.",
        "Integrating the application with back-end APIs and services.",
        "Collaborating with back-end developers to ensure that the front-end and back- end of the application work together seamlessly.",
        "Optimizing the application's performance and ensuring that it is accessible to users with different abilities.",
      ],
    },
    {
      role: "Ass. System Engineer",
      company: "TCS",
      time: "November 2020 - April 2022",
      desc: [
        "Create Single page application with the latest style guide provided by the business.",
        "Creating new web pages from scratch and add functionality to it.",
        "Integrating new features to the existing application on different pages.",
        "Managing the application's state using Redux, including creating actions and reducers to handle updates to the state.",
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
      techStack: ["Jave", "Swing"],
    },
    {
      name: "Audio Book Library",
      description:
        "An audio book library project made using React, HTML, CSS, and JavaScript is a web application that allows users to access and listen to audio books.The application uses JavaScript to handle the functionality of the application, such as routing, user authentication, and audio playback.",
      techStack: ["React", "HTML", "CSS", "JS"],
    },
    {
      name: "Weather App",
      description:
        "A weather app using React is a web or mobile application that allows users to view current weather information and forecast for a specific location.",
      techStack: ["HTML", "CSS", "JS"],
    },
    {
      name: "To-Do List App",
      description:
        "A to-do list app using React Native is a mobile application that allows users to create and manage a list of tasks, or to- do's, that they need to complete. The app would be built using the React Native framework, which allows developers to use React to build mobile apps for iOS and Android.",
      techStack: ["React Native", "HTML", "CSS", "JS"],
    },
  ],
};

export default information;
