import React from 'react';
import { Link, useMatch } from 'react-router-dom';

interface CustomLinkProps extends React.PropsWithChildren {
  to: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ children, to, ...props }) => {
  const match = useMatch(to);
  return (
    <Link
      to={to}
      style={{
        backgroundColor: match ? '#eeeff8' : '',
        color: match ? '#5383ff' : 'black',
        borderRadius: '0 22px 22px 0',
        paddingLeft: '25px',
        textDecoration: 'none',
        padding: '5px 20px',
      }}
      {...props}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
