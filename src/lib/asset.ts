// Prefix a file in /public with the site's base path ("" on the custom domain; "/foliage" before).
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
