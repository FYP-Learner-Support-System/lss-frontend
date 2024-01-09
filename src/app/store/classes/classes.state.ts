import { classesInterface } from "./classes.module";

export const initialState : classesInterface = [
    {
        id:1,
        name: "NLP 101",
        description: "Introduction to NLP",
        courseCode: "NLP101",
        content: [],
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
      content: [],
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
      content: [],
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
      content: [],
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
      content: [],
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
      content: [],
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