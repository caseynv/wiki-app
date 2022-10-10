import BasicInput from "./reusable/BasicInput"
import Button from "./reusable/Button";


export default function Input(){
    return (
      <div className="flex flex-col w-full py-6 items-center">
        <BasicInput
          label={"enter your search"}
          name={"username"}
          placeholder={"@username"}
          type={"text"}
        />
        <Button color={"blue"} size={"lg"} text={"search"}/>
      </div>
    );
}