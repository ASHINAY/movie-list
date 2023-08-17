import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import ListPage from './pages/ListPage/ListPage.jsx';
import DetailsPage from './pages/DetailsPage/DetailsPage.jsx';


function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route exact path='/' element={<ListPage />} />
          <Route exact path='/DetailsPage' element={<DetailsPage />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
