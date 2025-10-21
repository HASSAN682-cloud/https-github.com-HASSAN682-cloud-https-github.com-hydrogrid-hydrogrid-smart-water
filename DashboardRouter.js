import jwtDecode from 'jwt-decode';

const token = localStorage.getItem('token');
const user = token ? jwtDecode(token) : null;

return (
  <>
    {user?.role === 'admin' ? <AdminDashboard /> : <TechnicianDashboard />}
  </>
);
