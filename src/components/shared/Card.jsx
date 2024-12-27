import PropTypes from 'prop-types'

function Card({children, reverse}) {
  return (
    <div className={reverse ? 'card' : 'card'}>
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.string.isRequired
}

export default Card
