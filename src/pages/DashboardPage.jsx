import { dashboardData } from "../data/dashboardData";
import Header from "../components/layout/Header";
import ClientProfileCard from "../components/dashboard/ClientProfileCard";
import ScoreTrackingCard from "../components/dashboard/ScoreTrackingCard";
import PromptMonitoringCard from "../components/dashboard/PromptMonitoringCard";
import SignalDiagnosticsCard from "../components/dashboard/SignalDiagnosticsCard";
import AIResponseMonitorCard from "../components/dashboard/AIResponseMonitorCard";
import GatewayDataStatusCard from "../components/dashboard/GatewayDataStatusCard";
import QuarterlyReportCard from "../components/dashboard/QuarterlyReportCard";
import AccuracyDetectionCard from "../components/dashboard/AccuracyDetectionCard";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#f7f8fb] text-slate-900">
      <Header data={dashboardData.header} />

      <main className="px-6 pb-10">
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          <div className="xl:col-span-2 space-y-6">
            <ClientProfileCard
              products={dashboardData.productsMonitored}
              gatewayStatus={dashboardData.gatewayStatus}
            />
          </div>

          <div className="space-y-6">
            <ScoreTrackingCard
              scores={dashboardData.scores}
              improvement={dashboardData.improvement}
            />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
          <div className="xl:col-span-2 space-y-6">
            <PromptMonitoringCard items={dashboardData.promptMonitoring} />
            <AIResponseMonitorCard responses={dashboardData.aiResponses} />
            <AccuracyDetectionCard items={dashboardData.accuracyFlags} />
          </div>

          <div className="space-y-6">
            <SignalDiagnosticsCard
              items={dashboardData.signalDiagnostics}
              insight={dashboardData.diagnosticsInsight}
            />
            <GatewayDataStatusCard actions={dashboardData.gatewayActions} />
            <QuarterlyReportCard />
          </div>
        </div>
      </main>
    </div>
  );
}