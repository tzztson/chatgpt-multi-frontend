import React, { useEffect } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import useStore from '../../useStore';
import UserSidebar from '../UserSidebar';
import UserList from '../UserList';

const UserLayout = () => {
  const { token } = useStore();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileUserList, setUserList] = React.useState(false);

  useEffect(() => {
    if (!token) navigate('/login');
    switch (location.pathname) {
      case '/user/chatting':
        break;
    }
    // eslint-disable-next-line
  }, [location]);

  return (
    <div className="user-layout">
      <UserSidebar setUserList={setUserList} mobileList={mobileUserList} />
      <UserList mobileList={mobileUserList} />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;
