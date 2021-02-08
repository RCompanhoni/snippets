/*
  Simple example of an interface definition and types declared for each argument of the `logTodo` function
*/

import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/posts/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;
  const { id, title, completed } = todo;
  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The TODO with ID: ${id}
    Has a title of: ${title}
    Is it finished: ${completed}
  `);
};
