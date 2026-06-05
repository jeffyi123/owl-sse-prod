import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";
import type { Allocation } from "../types";

const COLORS = ["#534AB7", "#0F6E56", "#993C1D", "#185FA5", "#854F0B", "#73726c"];


export default function AllocationPieChart({ data }: { data: Allocation[] }) {

    // Combine the data with the colors for the pie chart

    const allocations = data.map((val, i) => ({ ...val, fill: COLORS[i] }));

    return (
        <ResponsiveContainer width="100%" height={280}>
            <PieChart>
                <Pie data={allocations} dataKey="allocation" nameKey="category" cx="50%" cy="50%" outerRadius={120} />
                <Tooltip formatter={(value) => `${value}%`} />
            </PieChart>
        </ResponsiveContainer>
    );
}