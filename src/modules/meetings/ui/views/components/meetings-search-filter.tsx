    import { SearchIcon } from "lucide-react"
    import { Input } from "@/components/ui/input"
import { useMeetingsFilters } from "@/modules/meetings/hooks/use-meetings-filters";

    
    export const MeetingsSearchFilter = () => {

        const[filters, setFilters] = useMeetingsFilters();

    return (
        <div className="relative">
        <SearchIcon
        className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
        />
        <Input
            placeholder="Filter by name"
            className= " h-9 bg-white w-50 pl-7"
            value= {filters.search}
            onChange={(e)=> setFilters({search: e.target.value})}
        />
        </div>
    )
    }

    export default MeetingsSearchFilter;
