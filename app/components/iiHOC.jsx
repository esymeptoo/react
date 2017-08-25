import WrappedComponent1 from './WrappedComponent1'
function iiHOC(WrappedComponent1) {
    return class Enhancer extends WrappedComponent1{
        constructor(props) {
            super(props)
        }
        render() {
            return super.render()
        }
    }
}
export default new iiHOC(WrappedComponent1)