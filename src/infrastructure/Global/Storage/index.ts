export default class Storage {
    public static setItem(key: string, value: any): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    public static getItem(key: string): any {
        return JSON.parse(localStorage.getItem(key));
    }

    public static removeItem(key: string): void {
        localStorage.removeItem(key);
    }
} 