import Link from 'next/link';
import { routes } from '@/config/routes';

export default async function Index() {
    return <Link href={routes.dashboard}>Dashboard</Link>;
}
