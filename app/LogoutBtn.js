'use client';
import { signIn } from 'next-auth/react'

export default function LogoutBtn() {
  return <button onClick={() => { signIn() }}>로그아웃</button>
} 