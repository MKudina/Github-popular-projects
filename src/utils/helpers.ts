export const formatCounter = (count: number) => {
    return count >= 1000000 ? `${Math.round(count / 100_000) / 10}M` :
    count >= 1000 ? `${Math.round(count / 100) / 10}k` : count;
}

export const dataFormat = (data: string) => {
    const date = new Date(data);
    const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    return formattedDate
}