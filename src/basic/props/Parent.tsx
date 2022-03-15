import { ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log("clicked")}>
      asdasdsa
    </ChildAsFC>
  );
};

export default Parent;
