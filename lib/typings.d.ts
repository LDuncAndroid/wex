declare namespace fetch {
    export function mockResponseOnce(body: string): void;
    export function mockReject(body: string): void;
    export function resetMocks(): void;
}