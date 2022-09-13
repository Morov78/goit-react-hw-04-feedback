import PropTypes from 'prop-types';
import Box from 'components/Box';
const Section = ({ title, children }) => {
  return (
    <Box textAlign="center" as="section">
      <h2>{title}</h2>
      {children}
    </Box>
  );
};

Section.prototype = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string,
};
export default Section;
