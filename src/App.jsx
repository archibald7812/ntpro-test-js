import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { HashRouter, Route, Routes } from "react-router-dom";
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
    }, 5000)

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
