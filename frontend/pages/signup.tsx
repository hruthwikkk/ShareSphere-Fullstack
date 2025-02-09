"use client";
import React, { useState, useEffect } from "react";
import { Label } from "../components/ui/Label";
import { Input } from "../components/ui/Input";
import { cn } from "@/utils/cn";
import { useRouter } from "next/navigation"; // Correct import for client-side routing
import Cookies from "js-cookie";

const SignUp: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        email: "",
        phone: "",
        password: "",
    });

    const router = useRouter();

    useEffect(() => {
        document.documentElement.classList.add("dark");
    }, []);

    // Update form data on change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validate that the email ends with '@ncsu.edu'
        if (!formData.email.endsWith("@ncsu.edu")) {
            alert("Please use your university email (@ncsu.edu).");
            return;
        }

        try {
            // Send POST request to the backend /api/signup endpoint
            const response = await fetch("http://localhost:8080/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                // Ensure age is sent as a number
                body: JSON.stringify({
                    name: formData.name,
                    age: parseInt(formData.age, 10),
                    email: formData.email,
                    phone: formData.phone,
                    password: formData.password,
                }),
            });

            if (!response.ok) {
                // Try to extract an error message from the response
                const errorData = await response.json();
                throw new Error(errorData.error || "Signup failed");
            }

            const result = await response.json();
            console.log("Signup successful:", result);

            // Store the JWT token as a cookie. Customize options as needed.
            Cookies.set("token", result.token, {
                expires: 7, // expires in 7 days
                secure: true,
                sameSite: "strict",
            });

            // Redirect to home page (adjust as needed)
            router.push("/homepage");
        } catch (error: any) {
            console.error("Error during signup:", error);
            alert("Signup failed: " + error.message);
        }
    };

    return (
        <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.01] bg-grid-black/[0.1] flex items-center justify-center">
            <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input">
                <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                    Welcome to ShareSphere
                </h2>
                <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Where Campus Connects and Resources Flow.
                </p>

                <form className="my-8" onSubmit={handleSubmit}>
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                        <LabelInputContainer>
                            <Label htmlFor="firstname">Name</Label>
                            <Input
                                id="firstname"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Tyler"
                                type="text"
                            />
                        </LabelInputContainer>
                        <LabelInputContainer>
                            <Label htmlFor="age">How old are you?</Label>
                            <Input
                                id="age"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                placeholder="18"
                                type="number"
                            />
                        </LabelInputContainer>
                    </div>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="email">
                            Email Address (only @ncsu.edu allowed)
                        </Label>
                        <Input
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="iAmAWizard@ncsu.edu"
                            type="email"
                        />
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="0000000000"
                            type="phone"
                        />
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="password1">Password</Label>
                        <Input
                            id="password1"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="••••••••"
                            type="password"
                        />
                    </LabelInputContainer>

                    <button
                        className="bg-gradient-to-br from-black to-neutral-600 w-full text-white rounded-md h-10 font-medium shadow-md hover:bg-gray-800 transition relative"
                        type="submit"
                    >
                        Sign up &rarr;
                        <BottomGradient />
                    </button>
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

const LabelInputContainer: React.FC<{
    children: React.ReactNode;
    className?: string;
}> = ({ children, className }) => (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
        {children}
    </div>
);

const OAuthButton: React.FC<{ icon: React.ReactNode; label: string }> = ({
    icon,
    label,
}) => (
    <button
        className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 hover:bg-gray-100 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] transition"
        type="button"
    >
        {icon}
        <span className="text-neutral-700 dark:text-neutral-300 text-sm">
            {label}
        </span>
        <BottomGradient />
    </button>
);

export default SignUp;
