import React from 'react';
import { connect } from 'react-redux';
import { marked } from 'marked';

const Preview = ({ markdown }) => {
  const getMarkup = () => {
    const options = {
      breaks: true,
      sanitize: true
    };
    const html = marked(markdown, options);
    return { __html: html };
  };

  return (
    <div id="preview"
      dangerouslySetInnerHTML={getMarkup()}
    />
  );
};

const mapStateToProps = (state) => ({
  markdown: state.markdown
});

export default connect(mapStateToProps)(Preview);
