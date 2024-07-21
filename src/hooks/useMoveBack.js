import { useNavigate } from "react-router-dom";

export function useMoveBack() {
  console.log("move trheessssss");
  const navigate = useNavigate();
  return () => navigate(-1);
}
