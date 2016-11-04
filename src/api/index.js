const LOCAL_STORE_KEY = '__SERVER_DATA__';

const FRESH_SERVER_DATA = {
  todosApp: {
    todos: [
      {
        id: 0,
        text: 'New Entry',
        completed: false,
        viewOrder: 0
      },
      {
        id: 1,
        text: 'Entry 2',
        completed: false,
        viewOrder: 1
      },
      {
        id: 2,
        text: 'Best Entry',
        completed: false,
        viewOrder: 2
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
      const currentTodos = currentData.todosApp.todos;

      // Delete the item from the list
      const newTodos = currentTodos.filter(todo => todo.id !== id);
      const newData = Object.assign({}, currentData, {todosApp: Object.assign({}, currentData.todosApp, {todos: newTodos})});

      LocalStorage.set(newData);

      setTimeout(() => resolve(newData.todosApp.todos), getRandomResponseTime());
    });

    return promise;
  }

  static addTodo(text) {
    const promise = new Promise((resolve, reject) => {
      const currentData = LocalStorage.get();

      currentData.todosApp.todos.push({
        id: Math.floor(Math.random() * 1000000000),
        completed: false,
        text,
        viewOrder: currentData.todosApp.todos.length
      });

      LocalStorage.set(currentData);

      setTimeout(() => resolve(currentData.todosApp.todos), getRandomResponseTime());
    });

    return promise;
  }

  static updateTodo(id, text) {
    const promise = new Promise((resolve, reject) => {
      const currentData = LocalStorage.get();
      const currentTodos = currentData.todosApp.todos;

      // Delete the item from the list
      const newTodos = currentTodos.map(todo => {
        if(todo.id === id) {
          todo.text = text;
        }

        return todo;
      });
      const newData = Object.assign({}, currentData, {todosApp: Object.assign({}, currentData.todosApp, {todos: newTodos})});

      LocalStorage.set(newData);

      setTimeout(() => resolve(newData.todosApp.todos), getRandomResponseTime());
    });

    return promise;
  }

  static updateTodoCompletion(id, completionStatus) {
    const promise = new Promise((resolve, reject) => {
      const currentData = LocalStorage.get();
      const currentTodos = currentData.todosApp.todos;

      // Delete the item from the list
      const newTodos = currentTodos.map(todo => {
        if(todo.id === id) {
          todo.completed = completionStatus;
        }

        return todo;
      });
      
      const newData = Object.assign({}, currentData, {todosApp: Object.assign({}, currentData.todosApp, {todos: newTodos})});

      LocalStorage.set(newData);

      setTimeout(() => resolve(newData.todosApp.todos), getRandomResponseTime());
    });

    return promise;
  }

  static updateTodoCompletionAll() {
    const promise = new Promise((resolve, reject) => {
      const currentData = LocalStorage.get();
      const currentTodos = currentData.todosApp.todos;

      // Delete the item from the list
      const newTodos = currentTodos.map(todo => {
        todo.completed = true;
        
        return todo;
      });
      
      const newData = Object.assign({}, currentData, {todosApp: Object.assign({}, currentData.todosApp, {todos: newTodos})});

      LocalStorage.set(newData);

      setTimeout(() => resolve(newData.todosApp.todos), getRandomResponseTime());
    });

    return promise;
  }

  static updateTodoViewOrder(id, moveUp) {
    const promise = new Promise((resolve, reject) => {
      const currentData = LocalStorage.get();
      const currentTodos = currentData.todosApp.todos;
      let currentViewOrder;
      let oldViewOrder;

      // Change the view order of the todo entry
      let newTodos = currentTodos.map(todo => {
        if(todo.id === id) {
          oldViewOrder = todo.viewOrder;
          if(moveUp) {
            todo.viewOrder--;
          } else {
            todo.viewOrder++;
          }

          if(todo.viewOrder < 0) {
            todo.viewOrder = 0;
          } else if(todo.viewOrder >= currentTodos.length) {
            todo.viewOrder = currentTodos.length - 1;
          }

          // Set the current view order to replace the other item with the same view order
          currentViewOrder = todo.viewOrder;
        }
        
        return todo;
      });

      // Swap the view order of the items place that was taken
      newTodos = newTodos.map(todo => {
        if(todo.id !== id && todo.viewOrder === currentViewOrder) {          
          todo.viewOrder = oldViewOrder;
        }
        
        return todo;
      });

      newTodos.sort((a, b) => a.viewOrder - b.viewOrder);
      
      const newData = Object.assign({}, currentData, {todosApp: Object.assign({}, currentData.todosApp, {todos: newTodos})});

      LocalStorage.set(newData);

      setTimeout(() => resolve(newData.todosApp.todos), getRandomResponseTime());
    });

    return promise;
  }
}

export default API;