import PropTypes from 'prop-types';
import Box from 'components/Box';
const Notification = ({ title }) => {
  return (
    <Box mt="40px" as="p">
      {title}
    </Box>
  );
};
Notification.prototype = {
  title: PropTypes.string.isRequired,
};
export default Notification;
