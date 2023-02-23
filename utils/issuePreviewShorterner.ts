export const issuePreviewShorterner = (req: string | null | undefined) : string => {
    if (!req) return "";
    if (req.length <= 250) return req;
    return req.slice(0, 250) + "..." + req.slice(req.length - 4);
}