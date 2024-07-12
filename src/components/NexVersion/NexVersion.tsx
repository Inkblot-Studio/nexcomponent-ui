import React, { useState, useEffect, useRef } from 'react';
import { NexVersionProps } from './NexVersion.types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import NexInput from '../NexInput';
import NexButton from '../NexButton';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import './NexVersion.scss';

/**
 * NexVersion component
 *
 * Component to display and edit a version number.
 *
 * @param {NexVersionProps} props - Component properties
 * @param {string} props.version - Current version number to display and edit
 * @param {(newVersion: string) => void} props.handleSave - Function to handle saving the edited version
 */
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
    setOriginalVersion(newVersion);
  };

  return (
    <div className="nex-version-wrapper" ref={wrapperRef}>
      <motion.div
        className={`nex-version ${isEditing ? 'clicked' : ''}`}
        onClick={handleClick}
        initial={{ opacity: 1 }}
        animate={{ opacity: isEditing ? 0.5 : 1 }}
        transition={{ duration: 0.3 }}
      >
        {originalVersion}
      </motion.div>
      {isEditing && (
        <motion.div
          className="nex-version-edit-wrapper"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
          <NexInput
            type="text"
            placeholder={newVersion}
            onChange={handleInputChange}
            fieldSize="small"
            width={80}
          />
          <NexButton onClick={handleSaveClick} text="Save" type="success" />
        </motion.div>
      )}
    </div>
  );
};

export default NexVersion;