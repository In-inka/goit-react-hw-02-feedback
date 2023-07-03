import { Title } from './Section.styled';
import PropTypes from 'prop-types';

const Section = ({ title = ' ', children }) => {
  return (
    <section>
      <Title>{title}</Title>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
