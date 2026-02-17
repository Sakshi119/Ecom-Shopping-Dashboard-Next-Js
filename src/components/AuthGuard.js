"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export default function AuthGuard({ children }) {
  const router = useRouter()
  const isAuthenticated = useSelector(
    (state) => state.auth.isAuthenticated
  )

  const [mounted, setMounted] = useState(false)

  // Step 1: wait until client mounts
  useEffect(() => {
    setMounted(true)
  }, [])

  // Step 2: redirect AFTER mount
  useEffect(() => {
    if (mounted && !isAuthenticated) {
      router.replace("/login")
    }
  }, [mounted, isAuthenticated, router])

  // Step 3: prevent render mismatch
  if (!mounted || !isAuthenticated) return null

  return children
}
