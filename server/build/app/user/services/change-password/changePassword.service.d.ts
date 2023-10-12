import dbFiles from "../../../../database/dbFiles.db";
declare class ChangePassword extends dbFiles {
    private readonly check;
    private readonly hash;
    private userReposetory;
    constructor();
    use(email: string, oldPassword: string, newPassword: string): Promise<boolean>;
    saveNewPassword(email: string, newPassword: string): Promise<any>;
    run(): Promise<void>;
}
export default ChangePassword;
//# sourceMappingURL=changePassword.service.d.ts.map