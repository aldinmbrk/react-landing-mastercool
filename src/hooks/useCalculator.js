import { useState, useMemo } from 'react';
import { formatRupiah } from '../utils/formatCurrency';

export function useCalculator() {
    const [selectedService, setSelectedService] = useState("Service & Cuci AC Standard");
    const [unitCount, setUnitCount] = useState(2);
    const [acType, setAcType] = useState("0.5 - 1 PK");

    // useMemo memastikan kalkulasi hanya dihitung ulang saat state berubah
    const estimatedPrice = useMemo(() => {
        let basePrice = 75000;
        if (selectedService.includes("Deep")) basePrice = 150000;
        if (selectedService.includes("Overhaul")) basePrice = 350000;

        return formatRupiah(basePrice * unitCount);
    }, [selectedService, unitCount]);

    return {
        selectedService,
        setSelectedService,
        unitCount,
        setUnitCount,
        acType,
        setAcType,
        estimatedPrice
    };
}