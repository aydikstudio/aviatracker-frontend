import { Outlet } from 'react-router'

import { Header } from './header/Header'

export function CenterLayout() {
	return (
		<div className='mt-24'>
			<Outlet />
		</div>
	)
}
