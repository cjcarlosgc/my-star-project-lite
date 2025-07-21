'use client';

import { Home } from "@/components/home/home";
import { useLoginUserStore } from "@/store/useLoginUserStore";

export default function HomePage() {
  const { loginUser } = useLoginUserStore();

  return (
    <Home userFullName={loginUser?.fullName}/>
  );
}
