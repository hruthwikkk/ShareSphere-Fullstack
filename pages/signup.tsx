"use client";
import React, { useEffect } from "react";
import { Label } from "../components/ui/Label";
import { Input } from "../components/ui/Input";
import { cn } from "@/utils/cn";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import { useRouter } from "next/navigation"; // Correct import for client-side routing

const SignUp: React.FC = () => {
    const router = useRouter();

    useEffect(() => {
        document.documentElement.classList.add("dark");
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    return (
        <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.01] bg-grid-black/[0.1] flex items-center justify-center">
            <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input">
                <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                    Welcome to Aceternity
                </h2>
                <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Login to aceternity if you can because we don&apos;t have a login flow yet.
                </p>

                <form className="my-8" onSubmit={handleSubmit}>
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                        <LabelInputContainer>
                            <Label htmlFor="firstname">First name</Label>
                            <Input id="firstname" placeholder="Tyler" type="text" />
                        </LabelInputContainer>
                        <LabelInputContainer>
                            <Label htmlFor="lastname">Last name</Label>
                            <Input id="lastname" placeholder="Durden" type="text" />
                        </LabelInputContainer>
                    </div>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="password1">Password</Label>
                        <Input id="password1" placeholder="••••••••" type="password" />
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-8">
                        <Label htmlFor="password2">Your Twitter Password</Label>
                        <Input id="password2" placeholder="••••••••" type="password" />
                    </LabelInputContainer>

                    <button
                        className="bg-gradient-to-br from-black to-neutral-600 w-full text-white rounded-md h-10 font-medium shadow-md hover:bg-gray-800 transition"
                        type="submit"
                    >
                        Sign up &rarr;
                        <BottomGradient />
                    </button>

                    <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

                    <div className="flex flex-col space-y-4">
                        <OAuthButton icon={<IconBrandGithub />} label="GitHub" />
                        <OAuthButton icon={<IconBrandGoogle />} label="Google" />
                    </div>
                </form>
            </div>
        </div>
    );
};

const BottomGradient = () => (
    <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
);

const LabelInputContainer: React.FC<{ children: React.ReactNode; className?: string }> = ({
    children,
    className,
}) => <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;

const OAuthButton: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => (
    <button
        className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 hover:bg-gray-100 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] transition"
        type="button"
    >
        {icon}
        <span className="text-neutral-700 dark:text-neutral-300 text-sm">{label}</span>
        <BottomGradient />
    </button>
);

export default SignUp;
