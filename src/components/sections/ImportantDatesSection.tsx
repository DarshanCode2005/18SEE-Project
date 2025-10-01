import { Card, CardContent } from "@/components/ui/card";

export const ImportantDatesSection = () => {
  return (
    <section id="important-dates" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-12 max-w-7xl mx-auto">
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-2xl"></div>
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full"></div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary/20 rounded-full"></div>
            <div className="absolute -bottom-3 left-1/4 w-4 h-4 bg-primary/15 rounded-full"></div>
            <Card className="relative border-2 border-primary/20 shadow-xl bg-gradient-to-br from-background via-background to-muted/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-18 h-18 bg-white rounded-xl mb-4 shadow-lg border border-gray-200">
                    <a
                      href="https://calendar.google.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open Google Calendar"
                      className="cursor-pointer transition-transform hover:scale-110 active:scale-95"
                    >
                      <svg className="w-16 h-16" viewBox="0 0 48 48" aria-hidden="true">
                        {/* Main calendar body */}
                        <rect x="8" y="10" width="32" height="32" rx="4" fill="#ffffff" stroke="#1a73e8" strokeWidth="2.5" />
                        {/* Top header bar */}
                        <rect x="8" y="10" width="32" height="10" rx="4" fill="#1a73e8" />
                        <rect x="8" y="16" width="32" height="4" fill="#1a73e8" />
                        {/* Binding rings */}
                        <circle cx="16" cy="10" r="2.5" fill="#ffffff" />
                        <circle cx="24" cy="10" r="2.5" fill="#ffffff" />
                        <circle cx="32" cy="10" r="2.5" fill="#ffffff" />
                        <rect x="14.5" y="6" width="3" height="5" rx="1.5" fill="#ea4335" />
                        <rect x="22.5" y="6" width="3" height="5" rx="1.5" fill="#fbbc04" />
                        <rect x="30.5" y="6" width="3" height="5" rx="1.5" fill="#34a853" />
                        {/* Calendar grid dots (3 rows × 4 columns) */}
                        {[0, 1, 2].map((row) =>
                          [0, 1, 2, 3].map((col) => (
                            <circle
                              key={`${row}-${col}`}
                              cx={15 + col * 6}
                              cy={26 + row * 5}
                              r="1.5"
                              fill="#5f6368"
                            />
                          ))
                        )}
                      </svg>
                    </a>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">Important Dates !</h3>
                </div>
                {(() => {
                  const importantDates = [
                    {
                      date: new Date("2025-12-15T00:00:00"),
                      label: "Abstract submission closes",
                      display: "Dec. 15, 2025"
                    },
                    {
                      date: new Date("2026-01-15T00:00:00"),
                      label: "Confirmation of acceptance of abstract",
                      display: "Jan. 15, 2026"
                    },
                    {
                      date: new Date("2026-03-15T00:00:00"),
                      label: "Full-length manuscript submission closes",
                      display: "March 15, 2026"
                    },
                    {
                      date: new Date("2026-12-10T09:00:00"),
                      label: "Inauguration of 18SEE",
                      display: "Dec. 10, 2026"
                    }
                  ];
                  const now = new Date();
                  const nextIdx = importantDates.findIndex(d => d.date.getTime() > now.getTime());
                  const highlightIdx = nextIdx === -1 ? importantDates.length - 1 : nextIdx;
                  return (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                      {importantDates.map((d, idx) => {
                        const isNext = idx === highlightIdx;
                        const cardBg = isNext ? "bg-red-600/10 border-red-600" : "bg-yellow-300/20 border-yellow-400";
                        const dotBg = isNext ? "bg-red-600 ring-2 ring-red-300 animate-pulse" : "bg-yellow-400";
                        const dateText = isNext ? "text-red-700" : "text-yellow-700";
                        const labelText = isNext ? "text-red-800" : "text-yellow-800";
                        return (
                          <div key={idx} className={`flex flex-col items-center py-8 px-4 border-2 rounded-xl shadow-md min-h-[180px] min-w-[260px] ${cardBg}`}>
                            <div className="flex flex-col items-center justify-start min-h[80px]">
                              <div className={`w-4 h-4 rounded-full mb-6 ${dotBg}`}></div>
                              <p className={`text-xl font-bold mb-1 ${dateText}`}>{d.display}</p>
                            </div>
                            <p className={`text-lg font-semibold text-center mt-2 ${labelText}`}>{d.label}</p>
                          </div>
                        );
                      })}
                    </div>
                  );
                })()}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
