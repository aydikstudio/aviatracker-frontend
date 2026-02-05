import { Moon, Sun } from 'lucide-react'

import { useTheme } from '@/providers/theme/useTheme'

import { Button } from './ui/button'

export function ThemeToggle() {
	const { theme, toggleTheme } = useTheme()

	return (
		<>
			<Button
				onClick={() => {
					toggleTheme()
				}}
				variant='secondary'
				size='icon'
			>
				{theme === 'dark' ? <Moon size={23} /> : <Sun size={23} />}
			</Button>
		</>
	)
}
