// import { clsx, type ClassValue } from "clsx";
// import { twMerge } from "tailwind-merge";
// import urlSlug from "url-slug";
//
// import { generateRandomPattern } from "@/lib/pattern";
//
// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs));
// }
//
// export const generateSlug = (text: string) => {
//   return urlSlug(text);
// };
//
export const getInitials = (name: string) => {
    if (!name) return 'J D';
    const [firstName, lastName] = name.split(' ');
    return `${firstName ? firstName[0] : ''}${lastName ? lastName[0] : ''}`;
};
//
// export const generatePattern = generateRandomPattern;
//
export const capitalize = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
};
//
// export const saEvent = (eventName: string) => {
//   // @ts-ignore
//   if (window && window.sa_event) return window.sa_event(eventName);
// };
//
// export const authErrors: Record<string, string> = {
//   Signin: "Try signing with a different account.",
//   OAuthSignin: "Try signing with a different account.",
//   OAuthCallback: "Try signing with a different account.",
//   OAuthCreateAccount: "Try signing with a different account.",
//   EmailCreateAccount: "Try signing with a different account.",
//   Callback: "Try signing with a different account.",
//   OAuthAccountNotLinked:
//     "To confirm your identity, sign in with the same account you used originally.",
//   EmailSignin: "Check your email address.",
//   CredentialsSignin:
//     "Sign in failed. Check the details you provided are correct.",
//   default: "Unable to sign in.",
// };
