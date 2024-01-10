import { classesInterface } from "./classes.module";

export const initialState : classesInterface = [
    {
      id: 1,
      name: "NLP 101",
      description: "Introduction to NLP",
      courseCode: "NLP101",
      content: [
        {
          name: "Dr. Saman Hina",
          timeStamp: new Date,
          post: { fileName: "NLP Introduction Slides", fileType: "PDF", thumbnail: "" },
          postType: "file",
        },
        {
          name: "Dr. Saman Hina",
          timeStamp: new Date,
          post: "Welcome to NLP 101! In this course, we'll explore the fundamentals of Natural Language Processing. I'm excited to embark on this learning journey with you. Please check the course materials for the syllabus and get ready for an engaging semester!",
          postType: "announcement",
        },
      ],
      instructor: {
        name: "Dr. Saman Hina",
        email: "samanhina123@gmail.com",
      },
      students: [
        { name: "Muhammad Abdul Rafay", id: "A123" },
        { name: "Muhammad Uzair Khan", id: "B456" },
        { name: "Faseeh Ur Rehman", id: "B456" },
      ],
    },
    {
      id: 2,
      name: "Islamic Studies 201",
      description: "Advanced Islamic Studies",
      courseCode: "ISL201",
      content: [
        {
          name: "Dr. Aisha Ahmed",
          timeStamp: new Date,
          post: { fileName: "ISL201 Course Outline", fileType: "PDF", thumbnail: "" },
          postType: "file",
        },
        {
          name: "Dr. Aisha Ahmed",
          timeStamp: new Date,
          post: "Assalamualaikum and welcome to Islamic Studies 201! We'll delve into advanced topics related to Islamic studies in this course. I look forward to fruitful discussions and shared insights. Make sure to review the course outline and start your readings. Let's make it a great semester!",
          postType: "announcement",
        },
      ],
      instructor: {
        name: "Dr. Aisha Ahmed",
        email: "aisha.ahmed@example.com",
      },
      students: [
        { name: "Fatima Abdullah", id: "C789" },
        { name: "Ahmed Ali", id: "D012" },
        { name: "Amina Khan", id: "E345" },
        { name: "Muhammad Abdul Rafay", id: "A123" },
        { name: "Muhammad Uzair Khan", id: "B456" },
      ],
    },
    {
      id: 3,
      name: "Arabic Language 101",
      description: "Basic Arabic Language Course",
      courseCode: "AR101",
      content: [
        {
          name: "Miss. Farah Sadiq",
          timeStamp: new Date,
          post: { fileName: "AR101 Vocabulary List", fileType: "PDF", thumbnail: "" },
          postType: "file",
        },
        {
          name: "Miss. Farah Sadiq",
          timeStamp: new Date,
          post: "Welcome to Arabic Language 101! Get ready to embark on a journey to learn the basics of the Arabic language. Please check the course materials for the vocabulary list, and let's begin our exploration of this beautiful language together!",
          postType: "announcement",
        },
      ],
      instructor: {
        name: "Miss. Farah Sadiq",
        email: "farahsadiq123@gmail.com",
      },
      students: [
        { name: "Sara Malik", id: "F678" },
        { name: "Omar Ibrahim", id: "G901" },
        { name: "Muhammad Uzair Khan", id: "B456" },
        { name: "Faseeh Ur Rehman", id: "B456" },
      ],
    },
    {
      id: 4,
      name: "History of Islamic Civilization",
      description: "Exploring Islamic History",
      courseCode: "HISTISL",
      content: [
        {
          name: "Dr. Yasin Farooq",
          timeStamp: new Date,
          post: { fileName: "HISTISL Research Paper Guidelines", fileType: "PDF", thumbnail: "" },
          postType: "file",
        },
        {
          name: "Dr. Yasin Farooq",
          timeStamp: new Date,
          post: "Salaam everyone! Welcome to the History of Islamic Civilization course. We'll be uncovering the rich history of Islam together. Take a look at the research paper guidelines and be prepared for an exciting semester of exploration and learning. Looking forward to our discussions!",
          postType: "announcement",
        },
      ],
      instructor: {
        name: "Dr. Yasin Farooq",
        email: "yasin.farooq@gmail.com",
      },
      students: [
        { name: "Zainab Ahmed", id: "I567" },
        { name: "Muhammad Abdul Rafay", id: "A123" },
        { name: "Muhammad Uzair Khan", id: "B456" },
        { name: "Ismail Khan", id: "J890" },
        { name: "Nadia Rahman", id: "K123" },
      ],
    },
    {
      id: 5,
      name: "Quranic Studies 301",
      description: "Advanced Quranic Studies",
      courseCode: "QUR301",
      content: [
        {
          name: "Umm Salma Hussain",
          timeStamp: new Date,
          post: { fileName: "QUR301 Reading List", fileType: "PDF", thumbnail: "" },
          postType: "file",
        },
        {
          name: "Umm Salma Hussain",
          timeStamp: new Date,
          post: "Bismillah! Welcome to Quranic Studies 301. We'll be delving into advanced studies of the Quran. Check the reading list, and get ready for an enriching experience. Feel free to reach out for any questions or clarifications. Let's make this semester a meaningful one!",
          postType: "announcement",
        },
      ],
      instructor: {
        name: "Umm Salma Hussain",
        email: "salma.hussain@gmail.com",
      },
      students: [
        { name: "Yusuf Ali", id: "L456" },
        { name: "Mariam Abbas", id: "M789" },
        { name: "Amir Ahmad", id: "N012" },
      ],
    },
    {
      id: 6,
      name: "Islamic Art and Architecture",
      description: "Exploring Islamic Art",
      courseCode: "ARTISL",
      content: [
        {name:"Dr. Fatima Khan",timeStamp: new Date ,post:{fileName:"Islamic Values (vol 2)",fileType:"PDF",thumbnail:""}, postType:"file"},
        {name:"Dr. Fatima Khan",timeStamp: new Date ,post:"Hello Everyone! Rubricks for the Final Exams will posted soon!", postType:"announcement"},
      ],
      instructor: {
        name: "Dr. Fatima Khan",
        email: "fatima.khan@gmail.com",
      },
      students: [
        { name: "Bilal Ahmed", id: "O345" },
        { name: "Ayesha Malik", id: "P678" },
        { name: "Hassan Ali", id: "Q901" },
        { name: "Muhammad Uzair Khan", id: "B456" },
        { name: "Faseeh Ur Rehman", id: "B456" },
      ],
    },
]