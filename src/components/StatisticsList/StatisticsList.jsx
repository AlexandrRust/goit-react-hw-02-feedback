import { List, Item } from "./StatisticsList.styled"

export const Statistics = ({ good, neutral, bad, total, positivePercentage, countPercentage}) => {
    const array = Object.entries({ good, neutral, bad, total, positivePercentage})
    return (
        <List>
            {array.map(([key, value]) => <Item key={key}>{key}: {value}</Item>)}
            {countPercentage(good, total)}
        </List>
    )
}