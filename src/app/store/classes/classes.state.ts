import { classesInterface } from "./classes.module";

export const initialState : classesInterface = [
    {
        id:1,
        name: "Math 101",
        description: "Introduction to Mathematics",
        courseCode: "MATH101",
        content: [],
        instructor: {
          name: "Professor Smith",
          email: "smith@example.com",
        },
        students: [
          { name: "Alice", id: "A123" },
          { name: "Bob", id: "B456" },
        ],
      },
      {
        id:2,
        name: "English 201",
        description: "Advanced English Composition",
        courseCode: "ENG201",
        content: [],
        instructor: {
          name: "Professor Johnson",
          email: "johnson@example.com",
        },
        students: [
          { name: "Charlie", id: "C789" },
          { name: "Diana", id: "D012" },
        ],
      },
    {
        id:3,
        name: "Math 101",
        description: "Introduction to Mathematics",
        courseCode: "MATH101",
        content: [],
        instructor: {
          name: "Professor Smith",
          email: "smith@example.com",
        },
        students: [
          { name: "Alice", id: "A123" },
          { name: "Bob", id: "B456" },
        ],
      },
      {
        id:4,
        name: "English 201",
        description: "Advanced English Composition",
        courseCode: "ENG201",
        content: [],
        instructor: {
          name: "Professor Johnson",
          email: "johnson@example.com",
        },
        students: [
          { name: "Charlie", id: "C789" },
          { name: "Diana", id: "D012" },
        ],
      }
]