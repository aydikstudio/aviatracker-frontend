import type { ReactNode } from 'react'

interface Props {
	children: ReactNode
}

export function SubHeading({ children }: Props) {
	return (
		<h1 className='text-foreground mb-4 text-lg font-semibold opacity-70'>
			{children}
		</h1>
	)
}
