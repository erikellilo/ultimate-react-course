import { useNavigate } from "react-router-dom";

export function useMoveBack() {
  console.log("move ins");
  const navigate = useNavigate();
  return () => navigate(-1);
}
