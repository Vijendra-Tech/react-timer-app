import React, {
  useImperativeHandle,
  useRef,
  forwardRef,
  useState,
} from 'react';

const TimerIndicator = forwardRef((props, ref) => {
  const [text, setText] = useState('Please Start...');
  const timeRef = useRef(null);
  useImperativeHandle(ref, () => {
    return {
      start() {
        setText('Timer Started');
      },
      stop() {
        setText('Timer Stopped');
      },
    };
  });
  return (
    <p {...props} ref={timeRef}>
      {text}
    </p>
  );
});

export default TimerIndicator;
