const LOCAL_STORE_KEY = '__SERVER_DATA__';

const FRESH_SERVER_DATA = {
  todosApp: {
    todos: [
      {
        id: 0,
        text: 'New Entry',
        completed: false
      },
      {
        id: 1,
        text: 'Entry 2',
        completed: false
      },
      {
        id: 2,
        text: 'Best Entry',
        completed: false
      }
    ]
  }
};

const getRandomResponseTime = () => 50 + Math.floor(Math.random() * 500);

class LocalStorage {
  static get() {
    if(localStorage.getItem(LOCAL_STORE_KEY) === null) {
      LocalStorage.set(FRESH_SERVER_DATA);
    }

    return JSON.parse(localStorage.getItem(LOCAL_STORE_KEY));
  }

  static set(data) {
    data = (typeof data === "object") ? JSON.stringify(data) : data;

    localStorage.setItem(LOCAL_STORE_KEY, data);

    return true;
  }
}

class API {
  static deserializeFromServer() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(LocalStorage.get()), getRandomResponseTime());
    });

    return promise;
  }

  static serializeToServer(data) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(LocalStorage.set(data)), getRandomResponseTime());
    });

    return promise;
  }

  static deleteTodo(id) {
    const promise = new Promise((resolve, reject) => {
      const currentData = LocalStorage.get();

      // Delete the item from the list
      const newData = currentData.todosApp.todos.filter(todo => todo.id !== id);

      LocalStorage.set(newData);

      setTimeout(() => resolve(true), getRandomResponseTime());
    });

    return promise;
  }

  static addTodo(text) {
    console.log('Adding todo:', text);
    const promise = new Promise((resolve, reject) => {
      const currentData = LocalStorage.get();

      currentData.todosApp.todos.push({
        id: Math.floor(Math.random() * 1000000000),
        completed: false,
        text
      });

      LocalStorage.set(currentData);

      setTimeout(() => resolve(currentData.todosApp.todos), getRandomResponseTime());
    });

    return promise;
  }

  static updateTodo(id, text) {
    const promise = new Promise((resolve, reject) => {
      const currentData = LocalStorage.get();

      const newData = currentData.todosApp.todos.map(todo => {
        if(todo.id === id) {
          todo.text = text;
        }

        return todo;
      });

      LocalStorage.set(newData);

      setTimeout(() => resolve(true), getRandomResponseTime());
    });

    return promise;
  }

  static updateTodoCompletion(id, completionStatus) {
    const promise = new Promise((resolve, reject) => {
      const currentData = LocalStorage.get();

      const newData = currentData.todosApp.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = completionStatus;
        }

        return todo;
      });

      LocalStorage.set(newData);

      setTimeout(() => resolve(true), getRandomResponseTime());
    });

    return promise;
  }
}

export default API;