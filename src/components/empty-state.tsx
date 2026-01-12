import Image from "next/image";

interface Props{
    title: string;
    description: string;
    image?: string;
};

export const EmptyState = ({
    title, 
    description,
    image= "/empty.svg"
    }: Props) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <Image src={image} alt="Empty" className="rounded-xl pb-4 pt-4" width={180} height= {180} />
                <div className="flex flex-col gap-y-6 max-w-md mx-auto text-center">
                    <h6 className="text-lg font-medium">{title}</h6>
                    <p className="text-sm text-muted-foreground">{description}</p>
                </div>
        </div>
    );
}