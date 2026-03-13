// src/pages/DashboardPage.jsx

import { dashboardData } from "../data/dashboardData";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import ProfileGatewayCard from "../components/dashboard/ProfileGatewayCard";
import ScoreTrackingCard from "../components/dashboard/ScoreTrackingCard";
import PromptMonitoringCard from "../components/dashboard/PromptMonitoringCard";
import SignalDiagnosticsCard from "../components/dashboard/SignalDiagnosticsCard";
import ResponseMonitorCard from "../components/dashboard/ResponseMonitorCard";
import AccuracyDetectionCard from "../components/dashboard/AccuracyDetectionCard";
import RightRailCards from "../components/dashboard/RightRailCards";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] px-6 py-8 text-slate-900 md:px-8">
      <div className="mx-auto max-w-7xl">
        <DashboardHeader data={dashboardData} />

        <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-12">
          <div className="space-y-6 xl:col-span-8">
            <ProfileGatewayCard data={dashboardData} />
            <PromptMonitoringCard items={dashboardData.promptMonitoring} />
            <ResponseMonitorCard items={dashboardData.responseMonitor} />
            <AccuracyDetectionCard items={dashboardData.hallucinations} />
          </div>

          <div className="space-y-6 xl:col-span-4">
            <ScoreTrackingCard scores={dashboardData.scores} />
            <SignalDiagnosticsCard items={dashboardData.diagnostics} />
            <RightRailCards updates={dashboardData.gatewayUpdates} />
          </div>
        </div>
      </div>
    </main>
  );
}