import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  position: 'absolute',
  bottom: 20,
  right: 20
};

const CreateNewTodoButton = ({ onClick }) => (
  <div>
    <FloatingActionButton onClick={onClick} style={style}>
      <ContentAdd />
    </FloatingActionButton>
  </div>
);


export default CreateNewTodoButton;
