import PropTypes from 'prop-types'

function Button({children, version='primary', type='button', isDisabled=false}) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  )
}

Button.propTypes = {
    version: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired
}
export default Button
