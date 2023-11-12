type Next = () => void;
type Callback = (next: Next) => void;
export declare const createQueue: () => {
    clear: () => void;
    enqueue: (cb: Callback) => void;
};
export {};
