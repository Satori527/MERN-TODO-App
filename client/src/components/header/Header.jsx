import { CardHeader } from "@mui/material";
import ButtonUsage from "../MuiButton";


function Header() {
    return (
        <>
            <div className="flex flex-row justify-between p-4 bg-slate-100 absolute top-0 w-full left-0">
                <h1 className="text-black font-black text-2xl">TODO</h1>
                
                <ButtonUsage/>
                
            </div>
            <CardHeader/>
        </>
    );
}

export default Header;