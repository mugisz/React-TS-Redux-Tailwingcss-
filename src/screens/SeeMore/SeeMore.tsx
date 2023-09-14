import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { getAUsers } from "../../redux/slices/TodoSlice";
import { Link, useParams } from "react-router-dom";
import "../SeeMore/seeMore.scss";
const SeeMore = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.todoAc.users);
  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    dispatch(getAUsers(id));
  }, []);

  return (
    <div className="seeBlocks">
      <div className="firstSeeBlock">
        <h1>Main user informations: </h1>
        <div className="seeItem">User id:{user?.id}</div>
        <div className="seeItem">User name:{user?.name}</div>

        <div className="seeItem">User email:{user?.email}</div>
      </div>
      <div className="addresBlock">
        <h1>User adress: </h1>
        <div className="seeItem">User street:{user?.address?.street}</div>
        <div className="seeItem">User suite:{user?.address?.suite}</div>

        <div className="seeItem">User city:{user?.address?.city}</div>

        <div className="seeItem">User zipcode:{user?.address?.zipcode}</div>
      </div>
      <Link to="/all">Back</Link>
    </div>
  );
};

export default SeeMore;
