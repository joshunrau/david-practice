import { useContext } from 'react';
import { LoginContext } from '../../../context/LoginContext';
import { UsersDatabase } from '../../../utils/users-database';

export const AdminPage = () => {
  const users = UsersDatabase.getUsers();
  const isLoggedin = useContext(LoginContext);
  if(!isLoggedin){
    return(<p>access denied</p>);
  }
  else{
    return (
      <div>
        <h3 className="font-semibold space-y-2">Users</h3>
        {users.map((user) => (
          <div key={user.username}>
            <p>Username: {user.username}</p>
            <p>Password: {user.password}</p>
          </div>
        ))}
      </div>
    );

  };
 
 
};
