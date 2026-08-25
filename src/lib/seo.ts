export const siteUrl = "https://omroadlines.com";

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export const defaultSocialImage = absoluteUrl("/orl-logo.png");
