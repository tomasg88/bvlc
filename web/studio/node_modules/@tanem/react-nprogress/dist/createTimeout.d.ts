export declare const createTimeout: () => {
    cancel: () => void;
    schedule: (callback: () => void, delay: number) => void;
};
