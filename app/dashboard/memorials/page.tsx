import DashboardHeader from '@/components/dashboard-header'
import MemorialManager from '@/components/memorial-manager'
import React from 'react'

export default function Memorials() {
  return (
    <section>
      <DashboardHeader
        heading="Memorials"
        text="Create and manage your memorials."
      />
      <div className="mt-8">
        <MemorialManager />
      </div>
    </section>
  )
}