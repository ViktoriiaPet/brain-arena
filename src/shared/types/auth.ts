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
