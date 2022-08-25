life.onload = (status) => {
    status === '👨‍💻' ? `Coding ${status}` :
        status === '☕' ? `Drinking ${status}` :
            new Error('Something wrong')
}