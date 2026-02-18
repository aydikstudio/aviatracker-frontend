import { SkyTrackMap } from '@/components/map/SkyTrackMap'

import { FlightDetails } from '../../components/flight-details/FlightDetails'
import { FlightList } from '../../components/flight-list/FlightList'

export function Home() {
	return (
		<div>
			<FlightList />
			<FlightDetails />
			<div className='absolute inset-0 -z-50'>
				<SkyTrackMap />
			</div>
		</div>
	)
}
