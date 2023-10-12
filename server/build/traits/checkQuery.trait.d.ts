declare class QueryCheck {
    check(query: {
        [key: string]: string | qs.ParsedQs | string[] | qs.ParsedQs[] | number;
    }, params: {
        [key: string]: string;
    }): string[];
    checkIfValidUUID(str: string): boolean;
}
export default QueryCheck;
//# sourceMappingURL=checkQuery.trait.d.ts.map