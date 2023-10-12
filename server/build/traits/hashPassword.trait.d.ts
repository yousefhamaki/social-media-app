declare class HashPassword {
    hashPassword(password: string): Promise<string>;
    chech(enteredPassword: string, hashedPassword: string): Promise<any>;
}
export default HashPassword;
//# sourceMappingURL=hashPassword.trait.d.ts.map