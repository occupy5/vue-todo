import '../assets/styles/footer.styl'

export default {
    data() {
        return {
            author: 'fan'
        }
    },
    render() {
        return (
            <div id="footer">
                <span>我是{this.author}</span>
            </div>
        )
    }
}