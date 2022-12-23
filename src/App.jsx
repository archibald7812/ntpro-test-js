import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Layout } from "./components/Layout/Layout";
import { ArchivePage } from "./pages/ArchivePage.jsx/AcrhivePage";
import { TraidingPage } from "./pages/TraidingPage/TraidingPage";
import { updateCurrencies } from "./store/currencies/currenciesSlice";

function App() {

  const dispatch = useDispatch()

  useLayoutEffect(() => {
    dispatch(updateCurrencies())

    setInterval(() => {
      dispatch(updateCurrencies())
    }, 2000)

  }, [dispatch])

  return (
    <HashRouter>
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<TraidingPage />} />
            <Route path='archive' element={<ArchivePage />} />
          </Route>
        </Routes>
      </>
    </HashRouter>)
}

export default App;
