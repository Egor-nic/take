import { Outlet } from 'react-router';

export default function DefaultLayout() {
  return (
    <div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
