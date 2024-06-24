import Sidebar, { actualState } from "./design/sidebar/Sidebar";

interface DashboardProps {
  children: React.ReactNode;
  actualState: actualState;
  headerOptions?: {
    disabled?: boolean;
    title?: string;
    render?: React.ReactNode;
  };
}

export default function Dashboard({ children, actualState, headerOptions }: DashboardProps) {
  return (
    <div className="grid h-screen w-full grid-cols-[280px_1fr]">
      <Sidebar actualState={actualState} />
      <div className="flex flex-col flex-1 overflow-y-auto">
        {!headerOptions?.disabled && (
          <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-muted/40 px-6">
            <h1 className="font-semibold text-lg">{headerOptions?.title}</h1>
            <div className="flex flex-1 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">{headerOptions?.render}</div>
          </header>
        )}
        {children}
      </div>
    </div>
  );
}
