import React from 'react';

const Header = ({message}) => {
	return (
		<h2 className="heading">
			{message}
		</h2>
	);
};

Header.propTypes = {
	message: React.PropTypes.string
};

Header.defaultProps = {
	message: "Hello Default!"
};

export default Header;
