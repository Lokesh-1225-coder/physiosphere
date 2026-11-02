export interface BookingFormData {
  fullName: string;
  mobile: string;
  email: string;
  address: string;
  service: string;
  description: string;
  honeypot?: string; // spam protection field
}

export interface BookingResponse {
  success: boolean;
  message: string;
  error?: string;
}
