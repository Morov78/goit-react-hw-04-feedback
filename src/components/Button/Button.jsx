import PropTypes from 'prop-types';
import { ButtonStyle } from './Button.styled';
const Button = ({ option, onLeaveFeedback }) => {
  const optionUpper = option[0].toUpperCase() + option.slice(1);
  return (
    <>
      <ButtonStyle type="button" onClick={() => onLeaveFeedback(option)}>
        {optionUpper}
      </ButtonStyle>
    </>
  );
};
Button.prototype = {
  option: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default Button;
