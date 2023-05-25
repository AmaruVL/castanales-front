import { AppRouter } from "./router/AppRouter"

export const App = () => {
  // console.log('VITE_REACT_APP_API_URL: ',import.meta.env.VITE_REACT_APP_API_URL)
  // console.log('VITE_PORT:', import.meta.env.VITE_PORT)
  // console.log('PORT:', import.meta.env.PORT)
  return (
    <>
      <AppRouter/>
    </>
  )
}
