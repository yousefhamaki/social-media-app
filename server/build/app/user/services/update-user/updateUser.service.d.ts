import dbFiles from "../../../../database/dbFiles.db";
import User from "../../entities/user.entity";
declare class UpdateUserService extends dbFiles {
    private userReposetory;
    constructor();
    use(user: User): Promise<any>;
    updateUser(user: User): Promise<any>;
    run(): Promise<void>;
}
export default UpdateUserService;
//# sourceMappingURL=updateUser.service.d.ts.map