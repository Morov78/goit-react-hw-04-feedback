import PropTypes from 'prop-types';
import { Container } from './FeedbackOptions.styled';
import Button from '../Button';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Container display="flex" flex="5px">
      {options.map(optionButton => (
        <Button
          key={optionButton}
          option={optionButton}
          onLeaveFeedback={onLeaveFeedback}
        />
      ))}
    </Container>
  );
};

FeedbackOptions.prototype = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
