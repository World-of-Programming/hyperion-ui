import { Navigate, useLocation } from 'react-router-dom'
import { authService } from '@hyperion/config/auth/auth.service'

interface AdminRouteProps {
    element: React.ReactElement
}

export const AdminRoute = ({ element }: AdminRouteProps) => {
    const location = useLocation()

    if (!authService.isAdmin()) {
        return <Navigate to="/login" replace state={{ from: location }} />
    }

    return element
}