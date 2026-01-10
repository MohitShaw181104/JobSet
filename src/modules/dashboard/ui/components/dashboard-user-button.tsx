import {authClient} from "@/lib/auth-client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { GeneratedAvatar } from "@/components/ui/generated-avatar";
import { ChevronDownIcon, CreditCardIcon, LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

import{
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import{
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
    DrawerFooter,
    DrawerDescription,
} from "@/components/ui/drawer";


export const DashboardUserButton = () => {

    const Router = useRouter();
    const isMobile = useIsMobile();
    const{data, isPending}= authClient.useSession();

    const onLogout = async () => {
        await authClient.signOut({
            fetchOptions:{
            onSuccess: () => {
            Router.push('/sign-in');
            }
        }
    })
    };
        

    if(isPending){
        return <div className="p-4">Loading...</div>;
    }

    if(!data?.user){
        return null;
    }

    if (isMobile) {
        return (
            <Drawer>
            <DrawerTrigger asChild>
                <button
                className="rounded-lg border border-border/10 p-3 w-full flex items-center justify-between bg-white/10 overflow-hidden gap-x-2"
                >
                {data?.user.image ? (
                    <Avatar>
                    <AvatarImage src={data.user.image} />
                    </Avatar>
                ) : (
                    <GeneratedAvatar
                    seed={data?.user.name || "User"}
                    variant="botttsNeutral"
                    className="size-9 mr-3"
                    />
                )}

                <div className="flex flex-col gap-0.5 text-left overflow-hidden flex-1 min-w-0">
                    <p className="text-sm truncate w-full">{data.user.name}</p>
                    <p className="text-xs truncate w-full">{data.user.email}</p>
                </div>

                <ChevronDownIcon className="size-4 shrink-0" />
                </button>
            </DrawerTrigger>

            <DrawerContent>
                <DrawerHeader>
                <DrawerTitle>{data.user.name}</DrawerTitle>
                <DrawerDescription>{data.user.email}</DrawerDescription>
                </DrawerHeader>

                <DrawerFooter className="flex flex-col gap-2">
                <Button variant="outline">
                    <CreditCardIcon className="size-4 text-black" />
                    Billing
                </Button>

                <Button variant="outline" onClick={onLogout}>
                    <LogOutIcon className="size-4 text-black" />
                    Logout
                </Button>
                </DrawerFooter>
            </DrawerContent>
            </Drawer>
        );
        }


    return (
        <DropdownMenu>
        <DropdownMenuTrigger className="rounded-lg border border-border/10 p-3 w-full flex items-center justify-between bg-white/10 overflow-hidden gap-x-2">
            {data?.user.image ? (
                <Avatar>
                <AvatarImage src={data.user.image} />
                </Avatar>
            ) : (<GeneratedAvatar
                seed={data?.user.name || "User"}
                variant="botttsNeutral"
                className="size-9 mr-3"
            /> 
        )}
        <div className="flex flex-col gap-0.5 text-left overflow-hidden flex-1 min-w-0">
            <p className="text-sm truncate w-full">
                {data.user.name}
            </p>
            <p  className="text-xs truncate w-full">
                {data.user.email}
            </p>
        </div>
        <ChevronDownIcon className="size-4 shrink-0"/>
        </DropdownMenuTrigger> 
        <DropdownMenuContent className="w-72" align="end" side="right">
            <DropdownMenuLabel>
                <div className="flex flex-col gap-1">
                    <span className="font-medium truncate">{data.user.name}</span>
                    <span className="text-sm text-muted-foreground truncate">{data.user.email}</span>
                </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator/>
            <DropdownMenuItem className="cursor-pointer flex items-center justify-between">
                Billing
            <CreditCardIcon className="size-4"/>
            </DropdownMenuItem>
            <DropdownMenuItem 
            onClick={onLogout}
            className="cursor-pointer flex items-center justify-between">
                Logout
            <LogOutIcon className="size-4"/>
            </DropdownMenuItem>
        </DropdownMenuContent>  
        </DropdownMenu>
    )
}