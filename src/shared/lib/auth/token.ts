export const getAccessToken = (): string | null => {
  return localStorage.getItem('accessToken')
}

export const setAccessToken = (token: string): void => {
  localStorage.setItem('accessToken', token)
}

export const removeAccessToken = (): void => {
  localStorage.removeItem('accessToken')
}

export const getRefreshToken = (): string | null => {
  return localStorage.getItem('refreshToken')
}
export const setRefreshToken = (refreshToken: string) => {
  localStorage.setItem('refreshToken', refreshToken)
}
export const removeRefreshToken = (): void => {
  localStorage.removeItem('refreshToken')
}
