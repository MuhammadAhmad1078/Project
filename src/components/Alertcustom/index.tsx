import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

type AlertType = 'success' | 'info' | 'warning' | 'error';

interface Alert {
  id: number;
  type: AlertType;
  message: string;
  closing?: boolean;
}

type AddAlertFn = (type: AlertType, message: string) => void;

let globalAddAlert: AddAlertFn | null = null;

const Alertcustom: React.FC = () => {

    const [alerts, setAlerts] = useState<Alert[]>([]);
    const addAlert: AddAlertFn = (type, message) => {
        const id = Date.now() + Math.random();
        const alert: Alert = { id, type, message };
        setAlerts(prev => {
            const next = [...prev, alert];
            const timeout = next.length * 2000;
            setTimeout(() => {
                setAlerts(current =>
                    current.map(a => (a.id === id ? { ...a, closing: true } : a))
                );
                setTimeout(() => {
                    setAlerts(current => current.filter(a => a.id !== id));
                }, 300); // fade out transition
            }, timeout);

            return next;
        });
    };

    globalAddAlert = addAlert;

    const closeAlert = (id: number) => {
        setAlerts(current =>
            current.map(a => (a.id === id ? { ...a, closing: true } : a))
        );
        setTimeout(() => {
            setAlerts(current => current.filter(a => a.id !== id));
        }, 300);
    };

    return (
        <div className="fixed top-4 right-4 z-50 flex flex-col space-y-2">
            {alerts.map(alert => (
                <div
                    key={alert.id}
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        alert.closing
                        ? 'max-h-0 opacity-0 translate-y-2'
                        : 'max-h-40 opacity-100 translate-y-0'
                    }`}
                >
                    <div
                        className={`relative p-2 pr-10 rounded-lg border shadow text-black ${
                            {
                                success: 'bg-[#EDF7EF] border-[#D6E7D8]',
                                info: 'bg-[#E9EEFA] border-[#C4D3E9]',
                                warning: 'bg-[#FEF7EC] border-[#F2E8D3]',
                                error: 'bg-[#FBEEE9] border-[#E8D4D1]',
                            }[alert.type]
                        }`}
                    >
                        <div className='font-normal text-sm flex gap-3 items-center'>
                            <div className={`p-2 rounded-xl ${
                                {
                                    success: 'bg-[#64B969]',
                                    info: 'bg-[#366BDB]',
                                    warning: 'bg-[#E19A38]',
                                    error: 'bg-[#D95A3B]',
                                }[alert.type]

                            }`}>
                                <img
                                    src={
                                        {
                                            success: '/assets/icons/check.png',
                                            info: '/assets/icons/info.png',
                                            warning: '/assets/icons/warning.png',
                                            error: '/assets/icons/warning.png',
                                        }[alert.type]
                                    }
                                    className='w-7'
                                    alt={`${alert.type} icon`}
                                />
                            </div>
                            {alert.message}
                        </div>
                        <button
                            onClick={() => closeAlert(alert.id)}
                            className="absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer"
                        >
                            <img src="/assets/icons/alert-close.png" className='w-3' alt="" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

// Mount AlertContainer once
const mountAlertContainer = () => {
    if (typeof window !== 'undefined' && !document.getElementById('alert-root')) {
        const div = document.createElement('div');
        div.id = 'alert-root';
        document.body.appendChild(div);
        const root = createRoot(div);
        root.render(<Alertcustom />);
    }
};

// Ensure mounted
mountAlertContainer();

export const message = {
    success: (msg: string) => globalAddAlert?.('success', msg),
    info: (msg: string) => globalAddAlert?.('info', msg),
    warning: (msg: string) => globalAddAlert?.('warning', msg),
    error: (msg: string) => globalAddAlert?.('error', msg),
};
