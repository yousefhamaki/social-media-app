declare class Token {
    private readonly secretKey;
    private readonly config;
    constructor();
    generate(payload: any): Promise<any>;
    verifyJWT(token: string): Promise<void>;
}
export default Token;
//# sourceMappingURL=Token.trait.d.ts.map