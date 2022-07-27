import { useEffect, useState } from 'react';

import styles from './Accordion.module.css';

const questions = [
  'Where are products made?',
  'How to Purchase our product?',
  'How to Purchase our product?',
];

const Item = ({ index, question }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    index === 1 && setIsActive(true);
  }, [index]);

  return (
    <div
      className={styles.item_box}
      style={index % 2 === 0 ? { border: 'none' } : {}}
    >
      <div className={styles.item_head}>
        <p className={styles.item_question}>{question}</p>
        <p
          className={styles.item_btn}
          onClick={() => setIsActive((prev) => !prev)}
        >
          {isActive ? '-' : '+'}
        </p>
      </div>
      {isActive && (
        <div className={styles.item_content}>
          Many brands, especially in period care, carry products that take
          centuries to biodegrade with pronounce.{' '}
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  return (
    <div className={styles.container}>
      <h5 className={styles.heading}>
        You have <span className={styles.highlight}>questions,</span> we have
        answers.
      </h5>
      {questions?.map((question, index) => (
        <Item key={index} question={question} index={index + 1} />
      ))}
    </div>
  );
};

export default Accordion;
