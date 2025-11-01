"use client";

import React from "react";
import { insightlinechartData} from "@/components/data";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
// import { useLazyQuery } from "@apollo/client";
// import { GET_INSIGHT_GRAPH } from "@/graphql";
import { MyCard } from "@/components/commoncomponents";

const InsightLineChart = () => {

    // const [ loadData, { data } ] = useLazyQuery(GET_INSIGHT_GRAPH, { fetchPolicy: "cache-and-network" });

    // useEffect(() => {
    //     loadData({
    //         variables: {
    //             dateRange:{
    //                 from: new Date(new Date().setDate(new Date().getDate() - 30)).toISOString(),
    //                 to: new Date().toISOString(),
    //             }
    //         },
    //     });
    // }, [loadData]);

    const chartConfig = {
        chartToAnswer: {
            label: "Chart to Answer",
            color: "#18C2CA",
        },
        clicksOnListing: {
            label: "Clicks on Listing",
            color: "#D3AF3B",
        },
        savedListing: {
            label: "Saved Listing",
            color: "#C95935",
        },
    } satisfies ChartConfig;

    return (
        <MyCard className="bg-[#1C1E24] border border-[#3F4352]">
            <div className="w-full">
                <ChartContainer config={chartConfig} className="w-full h-[300px] ">
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={insightlinechartData}>
                            <CartesianGrid
                                vertical={false}
                                stroke="#3F4352"
                                strokeDasharray="5 5"
                            />
                            <XAxis
                                dataKey="date"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: "#A1A1AA" }}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: "#A1A1AA" }}
                                tickCount={6}
                                domain={[0, 1400]}
                                ticks={[0, 200, 400, 600, 800, 1000, 1200, 1400]}
                            />
                            <ChartTooltip
                                content={
                                    <ChartTooltipContent
                                        className="bg-[#18191D] border-[#3F4352] p-2 text-white"
                                        labelFormatter={() => {
                                            return null;
                                        }}
                                    />
                                }
                            />
                            <ChartLegend
                                content={<ChartLegendContent />}
                                className="text-[#B1B5C3] font-normal"
                            />
                            <Line
                                type="monotone"
                                dataKey="chartToAnswer"
                                stroke="var(--color-chartToAnswer)"
                                strokeWidth={2}
                                dot={false}
                            />
                            <Line
                                type="monotone"
                                dataKey="clicksOnListing"
                                stroke="var(--color-clicksOnListing)"
                                strokeWidth={2}
                                dot={false}
                            />
                            <Line
                                type="monotone"
                                dataKey="savedListing"
                                stroke="var(--color-savedListing)"
                                strokeWidth={2}
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </ChartContainer>
            </div>
        </MyCard>
    );
};

export { InsightLineChart };