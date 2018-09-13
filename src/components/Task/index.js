import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FaTrashAlt, FaStar } from 'react-icons/fa';

import './task.sass';

const Task = ({
  id,
  done,
  favorite,
  label,
  onCheckTask,
  onDelTask,
  onFavoriteTask
}) => {
  const currentClassNames = classNames(
    'task',
    {
      'task--done': done,
      'task--favorite': favorite,
    },
  );
  return (
    <li className={currentClassNames}>
      <input type="checkbox" checked={done} onChange={onCheckTask(id)}  />
      {/* <i className="fas fa-trash-alt task-trash" onClick={onDelTask(id)}></i> */}
      <FaTrashAlt className="task-delete" onClick={onDelTask(id)} />
      <FaStar className="task-favorite" onClick={onFavoriteTask(id)} />
      <span className="task-label">{label}</span>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  favorite: PropTypes.bool.isRequired,
  onCheckTask: PropTypes.func.isRequired,
  onDelTask: PropTypes.func.isRequired,
  onFavoriteTask: PropTypes.func.isRequired
};

Task.defaultProps = {
  favorite: false
};

export default Task;
