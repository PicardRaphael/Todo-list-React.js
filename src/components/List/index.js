import React from 'react';
import PropTypes from 'prop-types';

import Task from 'src/components/Task';
import './list.sass';

const Tasks = ({ tasks, actions }) => (
  <ul className="todo-list">
    {
      tasks.map(task => (
        <Task key={task.id} {...task} {...actions} />
      ))
    }
  </ul>
);

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  }).isRequired).isRequired,
  actions: PropTypes.object.isRequired
};

export default Tasks;
