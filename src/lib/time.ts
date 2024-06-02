export function getGreeting(hours: number) {
    if (hours < 6) {
        return 'Good night.';
    } else if (hours < 12) {
        return 'Good morning.';
    } else if (hours < 18) {
        return 'Good afternoon.';
    } else if (hours < 24) {
        return 'Good evening.';
    }
}

export function getBackgroundGradient(hours: number) {
    if (hours < 6) {
        return 'from-[#152853] to-[#040c24]';
    } else if (hours < 12) {
        return 'from-[#804565] to-[#AA585B]';
    } else if (hours < 18) {
        return 'from-[#7dc7ff] to-[#3e67ed]';
    } else if (hours < 24) {
        return 'from-[#50366F] to-[#1F214D]';
    }
}

export const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];
