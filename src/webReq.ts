// axios se jo data a raha he wo generic type ka he isliye hum interface bana ke use karenge
// npm i somelibrary
// npm i -D @types/somelibrary agr ts and declaration files if needed
//  https://jsonplaceholder.typicode.com/todos/1
// import axios, { AxiosResponse } from "axios"; ye agr error de to neeche wali line use
// krna he import krke seperately
import axios from "axios";
import type { AxiosResponse } from "axios";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchData = async () => {
  try {
    const response: AxiosResponse<Todo> = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    console.log("todo", response.data);
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.log("axios error", error.message);
      if (error.response) {
        console.log("error response data", error.response.data);
        console.log("error response status", error.response.status);
      }
    }
  }
};

// axios.get("https://example.com").then((response) => {
//   console.log(response.data);
// });
// // {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// // }
