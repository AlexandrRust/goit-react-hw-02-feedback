

export const Statistics = ({ textContent }) => {
    const array = Object.entries(textContent)
    return (
        <ul>
        {array.map(([key, value]) => <li key={key}>{key}: {value}</li>)}   
        </ul>
    )
}