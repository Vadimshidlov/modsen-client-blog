/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData: `
            @import "./src/shared/styles/colors.scss";
            @import "./src/shared/styles/fonts.scss";
            @import "./src/shared/styles/mixins.scss";
            @import "./src/shared/styles/breakpoints.scss";
        `
  },
};

export default nextConfig;
