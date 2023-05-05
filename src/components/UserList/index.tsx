import React from 'react';

const UserList = (props: any) => {
  const { mobileList } = props;

  React.useEffect(() => {
    console.log(mobileList);
  },[mobileList])
  return <div className={`user-list ${mobileList?"show":""}`}></div>;
};

export default UserList;
