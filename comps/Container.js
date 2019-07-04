
import Link from 'next/link'

const containerStyle = {
    marginTop: 15,
    padding: 15,
    border: '1px solid #DDD'
}


const Container = props => (
    <div style={containerStyle}>
        {props.children}
    </div>
)

export default Container;