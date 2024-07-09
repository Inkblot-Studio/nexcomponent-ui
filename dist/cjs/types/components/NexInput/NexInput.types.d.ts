import { InputHTMLAttributes } from 'react';
export interface NexInputProps extends InputHTMLAttributes<HTMLInputElement> {
    peekButton?: boolean;
    width?: number;
    fieldSize?: 'small' | 'normal' | 'large';
}
