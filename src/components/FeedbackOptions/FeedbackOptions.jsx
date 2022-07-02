import { PropTypes } from 'prop-types';

import { List, Button } from 'components/FeedbackOptions/List.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback, countTotalFeedback}) => {
    return (
        <List>
            {options.map(option => (
                option !== 'total' && option !== 'positivePercentage' && <Button
                    key={option}
                    name={option}
                    type="button"
                    onClick={(e) => onLeaveFeedback(e.target.name)}
                >{option}</Button>
            ))}
           
        </List>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string)
}