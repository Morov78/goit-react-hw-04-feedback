import PropTypes from 'prop-types';
import { Container, WrapContainer } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Container>
      <p>
        Total Feedback: <span>{total}</span>
      </p>

      <WrapContainer>
        <p>
          Good<span>{good}</span>
        </p>
        <p>
          Neutral<span>{neutral}</span>
        </p>
        <p>
          Bad<span>{bad}</span>
        </p>
      </WrapContainer>

      <p>
        Positive feedback: <span>{positivePercentage} %</span>
      </p>
    </Container>
  );
};

Statistics.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
