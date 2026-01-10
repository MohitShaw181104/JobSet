"use client";

import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";
// import { ResponsiveDialog } from "@/components/responsive-dialog";
// import { ErrorState } from "@/components/error-state";
// import { LoadingState } from "@/components/loading-state";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
// import { Button } from "@/components/ui/button";

export const AgentsView = () => {
    const trpc = useTRPC();
    // const {data, isLoading , isError} = useQuery(trpc.agents.getMany.queryOptions());
    const {data} = useSuspenseQuery(trpc.agents.getMany.queryOptions()); //Performin Caching Here

    // if (isLoading) {
    //     return (
    //         <LoadingState
    //             title="Loading Agents"
    //             description="Fetching your agents, please wait..."
    //         />
    //     );
    // }

    // if (isError) {
    //     return (
    //         <ErrorState
    //             title="Failed to load agents"
    //             description="Something went wrong. Please try again later."
    //         />
    //     );
    // }

        return (
            <div>
                {/* <ResponsiveDialog
                    title="Responsive test"
                    description="Responsive Description"
                    open
                    onOpenChange={() =>{}}
                >
                    <Button>
                    Some Action   
                    </Button>
                </ResponsiveDialog> */}
                {JSON.stringify(data)}
            </div>
        )
    };

export const AgentsViewLoading = () => {
    return (
        <LoadingState
            title="Loading Agents"
            description="Fetching your agents, please wait..."
        />
    );
}

export const AgentsViewError = () => {
    return (
        <ErrorState
            title="Failed to load agents"
            description="Something went wrong. Please try again later."
        />
    );
}