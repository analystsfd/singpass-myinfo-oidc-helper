"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrSGUnclePgNeedMedisave = void 0;
const _ = require("lodash");
const fake_profile_1 = require("./fake-profile");
const mrSGUnclePgAllOk_1 = require("./mrSGUnclePgAllOk");
const id = "S8399420G";
const name = fake_profile_1.ProfileArchetype.MR_SG_UNCLE_PG_NEED_MEDISAVE;
exports.mrSGUnclePgNeedMedisave = {
    id,
    name,
    // tslint:disable-next-line: no-big-function
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGUnclePgAllOk_1.mrSGUnclePgAllOk.generate(profileName);
        profile.pioneergen.message.code = "4";
        profile.pioneergen.message.desc = "You are eligible for the Pioneer Generation Package. Please contact 1800-2222-888 to start receiving your Pioneer Generation benefits, such as your MediSave top-up.";
        profile.dob = {
            lastupdated: "2021-01-01",
            source: "1",
            classification: "C",
            value: "1948-01-01",
        };
        return profile;
    },
};
//# sourceMappingURL=mrSGUnclePgNeedMedisave.js.map