"use client";

import { BotIcon, StarIcon, VideoIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

import{
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { DashboardUserButton } from './dashboard-user-button';


const firstSection =[
    {
        icon: VideoIcon,
        label: "Meetings",
        href: "/meetings"
    },
    {
        icon: BotIcon,
        label: "Agents",
        href: "/agents"
    },
]


const secondSection =[
    {
        icon: StarIcon,
        label: "Upgrade",
        href: "/upgrade"
    },
];

export const DashboardSidebar = () => {

    const pathName = usePathname();

    return (
        <Sidebar>
            <SidebarHeader className=' text-sidebar-accent-foreground'>
                <Link href="/" className="flex items-center gap-2 px-2 pt-2">
                <Image src="/logo.svg" alt="Jobset.io" width={36} height={36} />
                <p className="text-2xl font-semibold">Jobset.io</p>
                </Link>
            </SidebarHeader>
            <div className="px-4 py-2">
                <Separator className='opacity-50 text-[#5D6868]'/>
            </div>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {firstSection.map((item) => (
                                <SidebarMenuItem key={item.href}>
                                    <SidebarMenuButton
                                    asChild
                                    className={cn(
                                        "h-10 hover:bg-liner-to-r/oklch border border-transparent hover:border-[black]/50 from-sidebar-accent from-5% via-30% via-sidebar/50 to sidebar/50",
                                        pathName === item.href && "bg-linear-to-r/oklch border-[black]/50 "
                                    )}
                                    isActive={pathName === item.href}
                                    >
                                    <Link href={item.href}>
                                        <item.icon className="mr-2 h-4 w-4" />
                                        <span className='text-sm font-medium tracking-tight'>{item.label}</span>
                                    </Link>
                                </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <div className="px-4 py-2">
                <Separator className='opacity-50 text-[#5D6868]'/>
                </div>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {secondSection.map((item) => (
                                <SidebarMenuItem key={item.href}>
                                    <SidebarMenuButton
                                    asChild
                                    className={cn(
                                        "h-10 hover:bg-liner-to-r/oklch border border-transparent hover:border-[black]/50 from-sidebar-accent from-5% via-30% via-sidebar/50 to sidebar/50",
                                        pathName === item.href && "bg-linear-to-r/oklch border-[black]/50 "
                                    )}
                                    isActive={pathName === item.href}
                                    >
                                    <Link href={item.href}>
                                        <item.icon className="mr-2 h-4 w-4" />
                                        <span className='text-sm font-medium tracking-tight'>{item.label}</span>
                                    </Link>
                                </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className='text-white'>
                <DashboardUserButton/>
            </SidebarFooter>
        </Sidebar>
    )
}