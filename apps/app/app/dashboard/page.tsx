import { ChevronRight, HomeIcon } from 'lucide-react';
import PageHeader from '@/components/page/page.header';
import { api } from '@starter/backend/trpc/server';

export default async function Index() {
    const data = await api().test();
    console.log(data);

    return (
        <div className="flex-1 w-full flex flex-col gap-4">
            <div className="pb-2 flex">
                <div className="justify-start items-center inline-flex">
                    <div className="justify-start items-center gap-2 flex">
                        <div className="p-1 rounded-md justify-start items-start flex">
                            <HomeIcon className="w-5 h-5 relative" />
                        </div>
                        <ChevronRight className="w-4 h-4 relative fill-muted" />
                        <div className="px-2 py-1 rounded-md justify-center items-center flex">
                            <div className="text-slate-600 text-sm font-medium leading-tight">
                                Dashboard
                            </div>
                        </div>
                        <ChevronRight className="w-4 h-4 relative fill-muted" />
                        <div className="px-2 py-1 bg-gray-50 rounded-md justify-center items-center flex">
                            <div className="text-slate-700 text-sm font-semibold leading-tight">
                                Overview
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-y-6">
                <PageHeader title="Dashboard" subTitle="Welcome to Starter" />
            </div>
        </div>
    );
}
