import { logout } from '../../redux/auth/auth-operation';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoggedIn } from '../../redux/auth/auth-selectors';

const UserMenu = () => {
  const token = useSelector(selectLoggedIn);
  const dispatch = useDispatch();

  return (
    <>
      <button type="button" onClick={() => dispatch(logout(token))}>
        Logout
      </button>
    </>
  );
};

export default UserMenu;
