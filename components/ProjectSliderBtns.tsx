'use client';

import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';

interface ProjectSliderBtnsProps {
  containerStyles?: string;
  btnStyles?: string;
  onPrev: () => void;
  onNext: () => void;
}

const ProjectSliderBtns = ({
  containerStyles = '',
  btnStyles = '',
  onPrev,
  onNext,
}: ProjectSliderBtnsProps) => {
  return (
    <div className={containerStyles}>
      <button
        type="button"
        className={btnStyles}
        onClick={onPrev}
        title="Previous slide"
        aria-label="Previous slide"
      >
        <PiCaretLeftBold />
      </button>

      <button
        type="button"
        className={btnStyles}
        onClick={onNext}
        title="Next slide"
        aria-label="Next slide"
      >
        <PiCaretRightBold />
      </button>
    </div>
  );
};

export default ProjectSliderBtns;
