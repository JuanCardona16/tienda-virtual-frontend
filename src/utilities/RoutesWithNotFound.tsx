import { Route, Routes } from "react-router-dom"

interface Props {
  children: JSX.Element[] | JSX.Element; 
}

const RoutesWithNotFound = ({ children }: Props) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<div>PAGES NOT FOUND</div>} />
    </Routes>
  );
}

export default RoutesWithNotFound