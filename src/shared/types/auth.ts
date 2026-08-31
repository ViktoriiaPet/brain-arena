export interface RegisterRequest {
  name: string
  email: string
  password: string
}

export interface RegisterResponse {
  id: string
  uuid: string
  name: string
  email: string
  role: string
}

export interface LoginRequest {
  email: string
  password: string
}
export interface LoginResponse {
  token: string
  refreshToken: string
  email: string
  role: string
  name: string
  uuid: string
}
