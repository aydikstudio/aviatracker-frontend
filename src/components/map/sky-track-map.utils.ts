import type { LayerProps } from 'react-map-gl/maplibre'

export const solidStyle: LayerProps = {
	id: 'route-solid',
	type: 'line',
	layout: {
		'line-cap': 'round',
		'line-join': 'round'
	},
	paint: {
		'line-color': '#C6645C',
		'line-width': 2,
		'line-opacity': 1
	}
}

export const dashedStyle: LayerProps = {
	id: 'route-dashed',
	type: 'line',
	layout: {
		'line-cap': 'round',
		'line-join': 'round'
	},
	paint: {
		'line-color': '#5e605f',
		'line-width': 2,
		'line-dasharray': [2, 2],
		'line-opacity': 0.8
	}
}
