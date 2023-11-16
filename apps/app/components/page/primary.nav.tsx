import { Separator } from '@starter/ui/client';

export default function PageHeader({
    title,
    subTitle,
}: {
    title: string;
    subTitle: string;
}) {
    return (
        <>
            <div className="w-full flex flex-col gap-2">
                <h3 className="text-2xl font-medium leading-8">{title}</h3>
                <p className="text-base text-muted-foreground leading-6">
                    {subTitle}
                </p>
            </div>
            <Separator />
        </>
    );
}
