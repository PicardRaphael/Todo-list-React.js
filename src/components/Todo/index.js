import React from 'react';
import PropTypes from 'prop-types';

import Form from 'src/components/Form';
import Counter from 'src/components/Counter';
import List from 'src/components/List';
import tasks from 'src/data/tasks';
import './todo.sass';


class Todo extends React.Component {
  state = { tasks }

  addTask = (label) => {
    const allIds = this.state.tasks.map(t => t.id);
    const newId = allIds.length ? Math.max(...allIds) + 1 : 0;
    const newTask = {
      id: newId,
      label: label,
      done: false
    };
    const tasks = [...this.state.tasks, newTask];
    this.setState({ tasks });
  }

  checkTask = id => () => {
    const tasks = this.state.tasks.map((task) => {
      // Lorsqu'on détecte la tâche ciblée par le handler…
      if (task.id === id) {
        // …on inverse sa valeur de "done".
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    });
    // Puis on remplace toutes les tâches, une seule d'entre elles ayant été
    // effectivement modifiée.
    this.setState({ tasks });
  }

  deleteTask = id => () => {
    const tasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({ tasks });
  }

  favoriteTask = id => () => {
    const tasks = this.state.tasks.map((task) => {
      if (task.id === id) {
        /* eslint-disable no-prototype-builtins */
        if (!task.hasOwnProperty('favorite')) {
          task.favorite = false;
        }
        task.favorite = !task.favorite;
      }
      return task;
    });
    this.setState({ tasks });
  }

  render() {
    const { tasks } = this.state;
    const orderedTasks = [
      ...tasks.filter(t => !t.done && t.favorite),
      ...tasks.filter(t => !t.done && !t.favorite),
      ...tasks.filter(t => t.done),
    ];
    const count = tasks.filter(t => !t.done).length;
    const taskActions = {
      onCheckTask: this.checkTask,
      onDelTask: this.deleteTask,
      onFavoriteTask: this.favoriteTask
    };

    return (
      <div className="todo">
        <Form onAddTask={this.addTask} />
        <Counter count={count} />
        <List tasks={orderedTasks} actions={taskActions} />
      </div>
    );
  }
}

Todo.propTypes = {};

export default Todo;
