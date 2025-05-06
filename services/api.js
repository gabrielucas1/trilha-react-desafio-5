import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://swiedsellyyzczfhetfh.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3aWVkc2VsbHl5emN6ZmhldGZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1NTA5NDYsImV4cCI6MjA2MjEyNjk0Nn0.EJBiBLwBwxktsM_ra5Oxq8Rd0rHfzI5KI9J-S7o7C6o",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3aWVkc2VsbHl5emN6ZmhldGZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1NTA5NDYsImV4cCI6MjA2MjEyNjk0Nn0.EJBiBLwBwxktsM_ra5Oxq8Rd0rHfzI5KI9J-S7o7C6o"
    }
})