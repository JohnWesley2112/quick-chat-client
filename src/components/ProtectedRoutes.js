import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLoggedUser } from '../apiCalls/user';
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast';
import { setUser } from '../redux/userSlice';

function ProtectedRoutes({ children }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    window.dispatchEvent(new Event('storage'))
    useEffect(() => {
        if (localStorage.getItem('token')) {
            // the logic to get the current user
            const getLoggedInUser = async () => {
                let response = null;
                try {
                    response = await getLoggedUser();
                    if (response.success) {
                        dispatch(setUser(response.data))
                    } else {
                        toast.error(response.message)
                        navigate('/login');
                    }
                } catch (error) {
                    navigate('/login');
                }
            }
            getLoggedInUser();
        } else {
            navigate('/login');
        }
    }, [navigate, dispatch,])
    return (
        <>
            {
                children
            }
        </>
    )
}

export default ProtectedRoutes;