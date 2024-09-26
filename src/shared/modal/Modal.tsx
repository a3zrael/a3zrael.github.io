import React, { FC, useState } from 'react';
import cn from 'classnames';
import './Modal.css';

interface IModalProps {
  visible: boolean;
  children: React.ReactNode;
}

export const Modal: FC<IModalProps> = ({ visible, children }) => {
  const [isVisible, setIsVisible] = useState(visible);

  return (
    <div className={cn('overlay', { active: isVisible })}>
      <div className="modal">
        <div className="close-btn" onClick={() => setIsVisible(false)}>
          x
        </div>
        <div className="content">{children}</div>
      </div>
      <div className="black"></div>
    </div>
  );
};
