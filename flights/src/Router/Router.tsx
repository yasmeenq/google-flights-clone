import { Route, Routes } from "react-router-dom";
import { SreachPage } from "../Components/SreachPage/SreachPage";
import { ResultPage } from "../Components/ResultPage/ResultPage";

export function Router(): JSX.Element {
  return (
    <div className="Router">
      <Routes>
        <Route path="/" element={<SreachPage />} />
        <Route path="/results" element={<ResultPage />} />
      </Routes>
    </div>
  );
}
