// through fetch API bhi kr skte the but axios zyada popular he

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchData = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    if (!response.ok) {
      throw new Error(`Http error: ${response.status}`);
    }

    const data: Todo = await response.json();
  } catch (error: any) {}
};
