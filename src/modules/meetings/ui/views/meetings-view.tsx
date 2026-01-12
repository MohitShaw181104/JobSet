"use client";

import { ErrorState } from '@/components/error-state';
import { LoadingState } from '@/components/loading-state';
import { useTRPC } from '@/trpc/client';
import { useSuspenseQuery } from '@tanstack/react-query';
import React from 'react'

export const MeetingsView = () => {

    const trpc = useTRPC();
    const {data} = useSuspenseQuery(trpc.meetings.getMany.queryOptions({}));

    return (
        <div>
        {JSON.stringify(data?.items)}
        </div>
    );
};

export default MeetingsView

export const MeetingsViewLoading = () => {
    return (
        <LoadingState
            title="Loading Meetings"
            description="Fetching your agents, please wait..."
        />
    );
}

export const MeetingsViewError = () => {
    return (
        <ErrorState
            title="Failed to load meetings"
            description="Something went wrong. Please try again later."
        />
    );
}
