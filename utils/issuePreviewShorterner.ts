export const issuePreviewShorterner = (req: string | null | undefined, limit: number) : string => {
    if (!req) return "";
    if (req.length <= limit) return req;
    return req.slice(0, limit) + "..." + req.slice(req.length - 4);
}