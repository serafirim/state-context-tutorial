/*
::::::::::::::::::[ NOTES ]:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
* Context is an interface for sharing information. Many applications have some universal information they 
  need to share across the application, such as user preferences, theming information, and site-wide app
  changes. 
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

import './App.css'
import Navigation from '../Navigation/Navigation'
import SaladMaker from '../SaladMaker/SaladMaker'
import UserContext from '../User/User'

const user = {
  name: 'Seri',
  favorites: [
    'apple',
    'avocado',
    'carrot',
  ]
}

function App() {
  return (
    <>
      <UserContext.Provider value={user}>
          <Navigation />
          <SaladMaker />
      </UserContext.Provider>
    </>
  )
}

export default App
