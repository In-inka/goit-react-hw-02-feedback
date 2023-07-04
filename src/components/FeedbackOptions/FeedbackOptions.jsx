import shortid from 'shortid';
import { Feedback, Btn } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <Feedback>
        {options.map(option => (
          <Btn type="button" onClick={onLeaveFeedback} key={shortid.generate()}>
            {option}
          </Btn>
        ))}
      </Feedback>
    </>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
