import React from 'react';
import { useSelector } from 'react-redux';
import { iNavLink } from '../../components/Layout/common/types';
import { authSelector } from '../selectors';

interface iProp {
  links: iNavLink[];
}

const useControlNavLinks = ({ links }: iProp) => {
  const { user } = useSelector(authSelector);

  const [navLinks, setNavLinks] = React.useState(links);

  React.useEffect(() => {
    if (!user) {
      setNavLinks((prevLinks) =>
        prevLinks.filter((link) => link.key !== 'profile' && link.key !== 'admin'),
      );
    }
    if (user) {
      setNavLinks((prevLinks) => [
        ...prevLinks,
        {
          name: 'Profile',
          path: '/profile',
          key: 'profile',
        },
      ]);
    }
    if (user?.role === 'Admin') {
      setNavLinks((prevLinks) => [
        ...prevLinks,
        {
          name: 'Admin',
          path: '/admin',
          key: 'admin',
        },
      ]);
    }
  }, [user]);

  return { navLinks };
};

export default useControlNavLinks;
