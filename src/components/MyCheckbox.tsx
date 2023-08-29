import { Checkbox } from "@mui/material";

interface MyCheckBoxProps {
    name: string | undefined;
    edge: false | "start" | "end" | undefined;
    handleChange: any;
    isChecked? : boolean;
    noteId? : string;
}

const MyCheckBox = ({name, edge,isChecked,noteId,handleChange}: MyCheckBoxProps) => {

    return (
        <Checkbox
            name={name}
            edge={edge}  
            onChange={handleChange}
            checked={isChecked}
        />
    )
}

export default MyCheckBox;