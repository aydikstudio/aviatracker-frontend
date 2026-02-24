import { SkyTrackMap } from '@/components/map/SkyTrackMap'

import { FlightDetails } from '../../components/flight-details/FlightDetails'
import { FlightList } from '../../components/flight-list/FlightList'

export function Home() {
	return (
		<div>
			<div className='absolute inset-0'>
				<SkyTrackMap />
			</div>
			<FlightList />
			<FlightDetails />
		</div>
	)
}
