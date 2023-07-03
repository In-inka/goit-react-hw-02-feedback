import { Message } from './Notification.styled.jsx';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <Message>{message}</Message>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
