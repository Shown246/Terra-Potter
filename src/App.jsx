import AuthContextProvider from './AuthContextProvider';
import './App.css'
import Router from './Router'

function App() {
  
  return (
    <div className='dark:bg-[#20161f] text-[#db924b]'>
      <AuthContextProvider>
        <Router/>
      </AuthContextProvider>
    </div>
  )
}

export default App;
