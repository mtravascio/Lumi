// Matomo tracking disabled in fork version
// Original: https://matomo.lumi.education/matomo.php
const matomo = {
    track: (_data?: any): void => {
        // No-op: tracking disabled
    }
};

export default matomo;
