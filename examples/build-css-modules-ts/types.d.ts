declare module "*.module.css" {
	const content: Record<string, string>;
	export default content;
	export const code: string;
}

declare module "*.css" {
	const content: string;
	export default content;
}
