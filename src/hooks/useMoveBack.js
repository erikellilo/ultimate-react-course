import { useNavigate } from "react-router-dom";

export function useMoveBack() {
  console.log("movess");
  const navigate = useNavigate();
  return () => navigate(-1);
}
