import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

export const getDate = (date) => {
    const day = '0' + format(parseISO(date), 'd', { locale: es });
    return day.slice(-2);
};

export const getMonth = (date) => format(parseISO(date), 'LLL', { locale: es });
