import { Navigate, useParams } from "react-router-dom";

export const Redirsearch = () => {
  const param = useParams();
  return <Navigate to={"/search/" + param.params} />;
};
