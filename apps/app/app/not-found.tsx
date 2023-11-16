import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <h2>404 - This page does not exist</h2>

            <div className="my-4">
                <Link href="/">Return Home</Link>
            </div>
        </div>
    );
}
