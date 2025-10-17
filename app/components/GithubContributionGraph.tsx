import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useContributions } from "../hooks/useContributions";
import { ContributionData, MonthStart } from "../types/github-contributions";

const getColor = (count: number) => {
  if (count === 0) return "bg-[var(--contrib-level-1)]";
  if (count <= 3) return "bg-[var(--contrib-level-2)]";
  if (count <= 6) return "bg-[var(--contrib-level-3)]";
  if (count <= 10) return "bg-[var(--contrib-level-4)]";
  return "bg-[var(--contrib-level-5)]";
};
const BG = "bg-[var(--color-bg-level-2)]";
const getLegendColor = (levelIndex: number) => {
  switch (levelIndex) {
    case 0:
      return "bg-[var(--contrib-level-1)]";
    case 1:
      return "bg-[var(--contrib-level-2)]";
    case 2:
      return "bg-[var(--contrib-level-3)]";
    case 3:
      return "bg-[var(--contrib-level-4)]";
    case 4:
      return "bg-[var(--contrib-level-5)]";
    default:
      return "";
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};
const ContributionGraph = ({ username }: { username: string }) => {
  const [year, setYear] = useState(new Date().getFullYear());

  const { data, isLoading, isError, error } = useContributions(username, year);

  const contributions: ContributionData = data || { totalContributions: 0 };

  const weeks = useMemo(() => {
    const weeksArray = [];
    const startDate = new Date(year, 0, 1);
    const endDate = new Date(year, 11, 31);

    const firstDay = new Date(startDate);
    firstDay.setDate(firstDay.getDate() - firstDay.getDay());

    let currentDate = new Date(firstDay);

    while (
      currentDate.getFullYear() < year + 1 ||
      (currentDate.getFullYear() === year + 1 && currentDate.getDay() !== 0)
    ) {
      const week = [];
      for (let i = 0; i < 7; i++) {
        const dateStr = currentDate.toISOString().split("T")[0];
        week.push({
          date: new Date(currentDate),
          dateStr,
          count: contributions[dateStr] || 0,
          inYear: currentDate.getFullYear() === year,
        });
        currentDate.setDate(currentDate.getDate() + 1);
      }
      weeksArray.push(week);
      if (currentDate > endDate && currentDate.getDay() === 0) break;
    }

    return weeksArray.slice(0, 53);
  }, [year, contributions]);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthStarts = useMemo(() => {
    const starts: MonthStart[] = [];
    let currentMonth = -1;

    weeks.forEach((week, weekIndex) => {
      const dayInYear = week.find((day) => day.inYear);

      if (dayInYear) {
        const monthIndex = dayInYear.date.getMonth();

        if (monthIndex !== currentMonth) {
          starts.push({
            month: months[monthIndex],
            startWeekIndex: weekIndex,
          });
          currentMonth = monthIndex;
        }
      }
    });
    return starts;
  }, [weeks]);

  const totalContributions = contributions.totalContributions;

  if (isError) {
    return (
      <div className="w-full max-w-6xl mx-auto p-6 bg-[var(--color-bg-level-4)] rounded-lg">
        <p className="text-red-600">
          Error loading contributions: {error.message}
        </p>
      </div>
    );
  }

  return (
    <section id="github-activity" className={`${BG} py-24 px-6`}>
      <motion.section
        className="max-w-6xl mx-auto"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-[var(--color-text-secondary)]">
          My Coding Consistency
        </h2>
        <div className=" p-6 rounded-lg shadow-xl overflow-x-auto">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-[var(--color-text-secondary)]">
                {isLoading
                  ? "Loading..."
                  : `${totalContributions} contributions in ${year}`}
              </p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setYear(year - 1)}
                  disabled={isLoading}
                  className="p-1 hover:bg-[var(--color-bg-level-4))] rounded transition disabled:opacity-50"
                  aria-label="Previous year"
                >
                  <ChevronLeft size={20} />
                </button>
                <span className="text-lg font-semibold text-[var(--color-text-secondary)] w-12 text-center">
                  {year}
                </span>
                <button
                  onClick={() => setYear(year + 1)}
                  disabled={isLoading}
                  className="p-1 hover:bg-[var(--color-bg-level-4))] rounded transition disabled:opacity-50"
                  aria-label="Next year"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto px-10">
                <div className="inline-block">
                  <div className="flex mb-4 relative">
                    <div className="w-12"></div>

                    {monthStarts.map((m) => {
                      const marginLeft = m.startWeekIndex * 18;

                      return (
                        <div
                          key={m.month}
                          className="text-xs text-[var(--color-text-secondary)] font-semibold whitespace-nowrap absolute"
                          style={{
                            transform: `translateX(${marginLeft + 50}px)`,
                          }}
                        >
                          {m.month}
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex gap-1">
                    <div className="flex flex-col gap-1 mr-2">
                      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
                        .filter((_, i) => i % 2 !== 0)
                        .map((day) => (
                          <div
                            key={day}
                            className="h-8 flex items-center text-xs text-[var(--color-text-secondary)] font-semibold"
                            style={{ width: "28px" }}
                          >
                            {day.slice(0, 3)}
                          </div>
                        ))}
                    </div>

                    <div className="flex gap-1">
                      {weeks.map((week, weekIdx) => (
                        <div key={weekIdx} className="flex flex-col gap-1">
                          {week.map((day, dayIdx) => (
                            <div
                              key={`${weekIdx}-${dayIdx}`}
                              title={`${day.dateStr}: ${day.count} contributions`}
                              className={`w-3.5 h-3.5 rounded cursor-pointer transition-opacity hover:opacity-80 ${
                                day.inYear
                                  ? `${getColor(day.count)} border-transparent`
                                  : "bg-transparent"
                              }`}
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-2 text-xs text-[var(--color-text-secondary)]">
                <span>Less</span>
                <div className="flex gap-1">
                  {[0, 1, 2, 3, 4].map((level) => (
                    <div
                      key={level}
                      className={`w-3 h-3 rounded-sm border border-gray-200 ${getLegendColor(
                        level
                      )}`}
                    />
                  ))}
                </div>
                <span>More</span>
              </div>
            </>
          )}
        </div>
        <p className="text-[var(--color-text-secondary)] text-center mt-4 text-sm">
          Daily contribution data synced live from GitHub.
        </p>
      </motion.section>
    </section>
  );
};

export default ContributionGraph;
