/**
 * A Fatory returns a new object
 */
module.exports = () => {
    return {
        valueAttribute: 1,
        inc() {
            this.valueAttribute++
        }
    }
}