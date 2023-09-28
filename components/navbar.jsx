import Link from "next/link";
import {
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton,
} from "@/components/buttons.component";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link className="text-white font-bold" href={"/"}>
        Farm-D
      </Link>
      <div>
        <LogoutButton />
        <ProfileButton />
      </div>
    </nav>
  );
}
