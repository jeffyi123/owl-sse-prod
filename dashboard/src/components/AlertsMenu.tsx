import { useState, useRef, useEffect } from "react";
import type { Alert } from "../types";

export default function AlertMenu({ data }: { data: Alert[] }) {
    const [open, setOpen] = useState(false);
    const [alerts, setAlerts] = useState<Alert[]>(data);

    const ref = useRef<HTMLDivElement>(null);

    // Keep local alerts in sync when `data` prop changes
    useEffect(() => {
        setAlerts(data ?? []);
    }, [data]);


    return (
        <div ref={ref} style={{ position: "relative" }}>
            {/* Bell button */}
            <button
                onClick={() => setOpen(o => !o)}
                aria-label="Notifications"
                aria-expanded={open}
                aria-haspopup="true"
                style={{ position: "relative" }}
            >
                🔔
            </button>

            {/* Dropdown */}
            {open && (
                <div style={{
                    position: "absolute", right: 0, top: "calc(100% + 8px)",
                    width: 320, background: "#fff",
                    border: "0.5px solid #e0e0e0", borderRadius: 12,
                    zIndex: 50, overflow: "hidden",
                }}>
                    {/* Header */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", borderBottom: "0.5px solid #e0e0e0" }}>
                        <span style={{ fontWeight: 500, fontSize: 14 }}>Alerts</span>
                    </div>

                    {/* List */}
                    {alerts.map((n, i) => (
                        <div key={n.title ?? i}
                            style={{
                                display: "flex", gap: 12, padding: "12px 16px",
                                background: n.read ? "transparent" : "#E6F1FB",
                                borderBottom: "0.5px solid #e0e0e0",
                                cursor: "pointer",
                                alignItems: "flex-start",
                            }}
                        >
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <p style={{ margin: "0 0 2px", fontSize: 13, fontWeight: 500 }}>{n.title}</p>
                                <p style={{ margin: "0 0 4px", fontSize: 12, color: "#666", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                    {n.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}