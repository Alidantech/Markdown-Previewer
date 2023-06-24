import React, { useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faTimes } from '@fortawesome/free-solid-svg-icons';
import './App.css';

const App = () => {
  const [isEditorMaximized, setIsEditorMaximized] = useState(false);
  const [isPreviewMaximized, setIsPreviewMaximized] = useState(false);
  
  const handleMaximizeEditor = () => {
    setIsEditorMaximized(true);
    setIsPreviewMaximized(false);
  };

  const handleMaximizePreview = () => {
    setIsPreviewMaximized(true);
    setIsEditorMaximized(false);
  };

  const handleRestore = () => {
    setIsEditorMaximized(false);
    setIsPreviewMaximized(false);
  };

  return (
    <div className="container">
      <div className={`content-box card ${isEditorMaximized ? 'maximized' : ''}`}>
        <h2>
          Editor
          {!isEditorMaximized && (
            <button className="btn btn-primary resize-button" onClick={handleMaximizeEditor}>
              <FontAwesomeIcon icon={faExpand} />
            </button>
          )}
          {isEditorMaximized && (
            <button className="btn btn-primary resize-button" onClick={handleRestore}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          )}
        </h2>
        <div className="card-body-box">
          <Editor />
        </div>
      </div>
      <div className={`content-box card ${isPreviewMaximized ? 'maximized' : ''}`}>
        <h2 className="sticky-top bg-primary text-white py-2">
          Previewer
          {!isPreviewMaximized && (
            <button className="btn btn-primary resize-button" onClick={handleMaximizePreview}>
              <FontAwesomeIcon icon={faExpand} />
            </button>
          )}
          {isPreviewMaximized && (
            <button className="btn btn-primary resize-button" onClick={handleRestore}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          )}
        </h2>
        <div className="card-body-box">
            <Preview />
        </div>
      </div>
    </div>
  );
};

export default App;
