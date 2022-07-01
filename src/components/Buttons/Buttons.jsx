import { PropTypes } from 'prop-types';

import { ButtonsList } from 'components/ButtonsList/ButtonsList.styled';
import { Button } from './Button.styled';

export const Buttons = ({ textContent }) => {
    return (
        <ButtonsList>
            {textContent.map(text => <Button key={text} name={text} type="button">{text}</Button>)}
        </ButtonsList>
    )
}

Buttons.propTypes = {
    textContent: PropTypes.arrayOf(PropTypes.string)
}