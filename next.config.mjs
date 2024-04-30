/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

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

export default withNextIntl(nextConfig);
