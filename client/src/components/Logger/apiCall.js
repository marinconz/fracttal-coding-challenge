export const fetchLogs = async () => {
    const response = await fetch('http://localhost:5000/logs',{
        method: 'GET'
    })
    return response.json()
}