import React, { useState, useEffect, useRef } from 'react';
import { NexVersionProps } from './NexVersion.types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import NexInput from '../NexInput';
import NexButton from '../NexButton';
import { CSSTransition } from 'react-transition-group';
import './NexVersion.scss';

const NexVersion: React.FC<NexVersionProps> = ({ version, handleSave }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newVersion, setNewVersion] = useState(version);
  const [originalVersion, setOriginalVersion] = useState(version);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setNewVersion(originalVersion);
        setIsEditing(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [originalVersion]);

  const handleClick = () => {
    setIsEditing(true);
    setOriginalVersion(newVersion);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewVersion(e.target.value);
  };

  const handleSaveClick = () => {
    if (handleSave) {
      handleSave(newVersion);
    }
    setIsEditing(false);

    setTimeout(() => {
      setOriginalVersion(newVersion);
    }, 300);
  };

  return (
    <div className="nex-version-wrapper" ref={wrapperRef}>
      <div className={`nex-version ${isEditing ? 'clicked' : ''}`} onClick={handleClick}>
        {originalVersion}
      </div>
      <CSSTransition
        in={isEditing}
        classNames="fade"
        timeout={300}
        mountOnEnter
        unmountOnExit
      >
        <div className="nex-version-edit-wrapper">
          <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
          <NexInput type="text" placeholder={newVersion} onChange={handleInputChange} fieldSize="small" width={80} />
          <NexButton onClick={handleSaveClick} text="Save" type="success" />
        </div>
      </CSSTransition>
    </div>
  );
};

export default NexVersion;