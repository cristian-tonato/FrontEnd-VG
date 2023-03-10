import { Navigate } from 'react-router-dom';
import { useUsers } from '../../../../features/user/hooks/useUser';

export function PrivateRouter({ children }: { children: JSX.Element }) {
    const { users } = useUsers();
    return users.isLogged ? (
        children
    ) : (
        <Navigate to="/no-log" replace={true}></Navigate>
    );
}
