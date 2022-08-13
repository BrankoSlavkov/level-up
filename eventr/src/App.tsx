import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Events } from './pages/Events/Events';
import { AddEvent } from './pages/AddEvent/AddEvent';
import { EditEvent } from './pages/EditEvent/EditEvent';

import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';

import './App.scss';
import { Navigation } from './components/navigation/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/events" element={<Navigation />}>
          <Route index element={<Events />} />
          <Route path="add" element={<AddEvent />} />
          <Route path="edit/:id" element={<EditEvent />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
