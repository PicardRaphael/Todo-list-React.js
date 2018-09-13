import React from 'react';
import PropTypes from 'prop-types';

import './form.sass';

class Form extends React.Component {
  onSubmit = (evt) => {
    evt.preventDefault();
    const input = document.querySelector('.todo-input');
    this.props.onAddTask(input.value);
    input.value = '';
  }

  render() {
    return (
      <form className="todo-form" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Ajoutez votre tâche"
          className="todo-input"
        />
      </form>
    );
  }
}

Form.propTypes = {
  onAddTask: PropTypes.func.isRequired
};

export default Form;
