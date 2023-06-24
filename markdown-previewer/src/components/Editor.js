import React from 'react';
import { connect } from 'react-redux';
import { updateMarkdown } from '../redux/actions';

const Editor = ({ markdown, updateMarkdown }) => {
  const handleChange = (event) => {
    updateMarkdown(event.target.value);
  };

  return (
    <textarea
      id="editor"
      value={markdown}
      onChange={handleChange}
    />
  );
};

const mapStateToProps = (state) => ({
  markdown: state.markdown
});

const mapDispatchToProps = {
  updateMarkdown
};

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
