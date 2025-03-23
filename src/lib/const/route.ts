export const PUBLIC_PATHS = ['/login', '/signup', '/reset-password'];

export const pathName = {
	home: '/',
	login: '/login',
	my: '/my',
} as const

export type PathName = keyof typeof pathName
export type PathValues = (typeof pathName)[PathName]
