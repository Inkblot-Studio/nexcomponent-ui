import React, { createContext, useState, useContext, useRef } from 'react';
import { NexAlertsWrapper } from './NexAlert';
import { NexAlert } from './NexAlert';
const NexAlertsContext = createContext(undefined);
const NexAlertsProvider = ({ children }) => {
    const [alerts, setAlerts] = useState([]);
    const addAlert = (alert) => {
        const id = Math.random().toString(36).slice(2, 9) + new Date().getTime().toString(36);
        if (alerts.length >= 4) {
            const lastAlert = alerts[alerts.length - 1];
            if (lastAlert) {
                dismissAlert(lastAlert.id);
            }
        }
        setAlerts((prev) => [{ ...alert, id: id }, ...prev]);
        return id;
    };
    const dismissAlert = (id) => {
        setAlerts((prev) => prev.filter((alert) => alert.id !== id));
    };
    return (<NexAlertsContext.Provider value={{ alerts, addAlert, dismissAlert }}>
      <NexAlertsWrapper>
        {alerts.map((alert) => (<NexAlert key={alert.id} {...alert} handleDismiss={() => dismissAlert(alert.id)}/>))}
      </NexAlertsWrapper>
      {children}
    </NexAlertsContext.Provider>);
};
const useAlerts = () => {
    const [alertIds, setAlertIds] = useState([]);
    const alertIdsRef = useRef(alertIds);
    const context = useContext(NexAlertsContext);
    if (!context) {
        throw new Error('useAlerts must be used within a NexAlertsProvider');
    }
    const { addAlert, dismissAlert } = context;
    const addAlertWithId = (alert) => {
        const id = addAlert(alert);
        alertIdsRef.current.push(id);
        setAlertIds([...alertIdsRef.current]); // Correcting the usage of setAlertIds
    };
    const clearAlerts = () => {
        alertIdsRef.current.forEach((id) => dismissAlert(id));
        alertIdsRef.current = [];
        setAlertIds([]);
    };
    return { addAlert: addAlertWithId, clearAlerts };
};
export { NexAlertsProvider, useAlerts };
;
//# sourceMappingURL=NexAlertsContext.jsx.map