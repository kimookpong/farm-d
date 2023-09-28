"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
} from "@/components/icons";

export const LoginButton = () => {
  return (
    <button
      className="bg-white p-2"
      style={{ marginRight: 10 }}
      onClick={() => signIn()}
    >
      Sign in
    </button>
  );
};

export const RegisterButton = () => {
  return (
    <Link href="/register" style={{ marginRight: 10 }}>
      Register
    </Link>
  );
};

export const LogoutButton = () => {
  return (
    <Button
      isExternal
      className="text-sm font-normal text-default-600 bg-default-100"
      onClick={() => signOut()}
      startContent={<HeartFilledIcon className="text-danger" />}
      variant="flat"
    >
      Logout
    </Button>
  );
};

export const ProfileButton = () => {
  return (
    <Link className="bg-white p-2" href="/profile">
      Profile
    </Link>
  );
};
