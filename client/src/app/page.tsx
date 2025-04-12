"use client"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <div className="container">
      <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
      <h1>Welcome to mern-init-cli Package</h1>
      <p>A simple CLI tool to set up a MERN stack project effortlessly.</p>
    </div>
  );
}
