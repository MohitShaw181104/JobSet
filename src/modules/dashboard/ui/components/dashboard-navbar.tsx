"use client";

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { PanelLeftCloseIcon, PanelLeftIcon, SearchIcon } from "lucide-react";
import { use, useEffect, useState } from "react";
import DashboardCommand from "./dashboard-command";

export const DashboardNavbar = () => {

    const{ state, toggleSidebar, isMobile} = useSidebar();
    const [commandOpen, setCommandOpen] = useState(false);

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setCommandOpen((open) => !open);
            }
        };
        document.addEventListener('keydown', down);
        return () => document.removeEventListener('keydown', down);
    }, []);


    return (
        <>
            <DashboardCommand open={commandOpen} setOpen={setCommandOpen}/>
        <nav className="flex px-4 gap-x-2 items-center py-3 border-b bg-background">
        <Button className="size-9 bg-white" variant="outline" onClick={toggleSidebar}>
            {state === "collapsed" || isMobile
                ? <PanelLeftIcon className="size-4"/>
                : <PanelLeftCloseIcon className="size-4"/>}
        </Button>
        <Button className="h-9 w-60 justify-start font-normal text-muted-foreground hover:text-muted-foreground bg-white"
                variant="outline"
                size="sm"
                onClick={()=> {setCommandOpen(open => !open)}}
            >
                <SearchIcon />
                Search meetings...
                <kbd className="ml-auto pointer-events-none inline-flex h-6 select-none items-center gap-1 rounded border bg-muted pz-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                <span className="text-xs">
                    ⌘ + K </span>
                </kbd>

        </Button>
        </nav>
        </>
    )
    }

export default DashboardNavbar
