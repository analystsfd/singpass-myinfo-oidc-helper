"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const fake_profile_1 = require("./fake-profile");
const mrsMYMommyPerfect_1 = require("./mrsMYMommyPerfect");
const childbirthRecords_1 = require("./childbirthRecords");
const id = "G9403340W";
const name = fake_profile_1.ProfileArchetype.MRS_MY_MOM_JOBLESS;
exports.mrsMYMomJobless = {
    id,
    name,
    // tslint:disable-next-line: no-big-function
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrsMYMommyPerfect_1.mrsMYMommyPerfect.generate(profileName);
        profile.occupation = {
            "lastupdated": "2020-09-10",
            "code": "",
            "source": "2",
            "classification": "C",
            "desc": "",
        };
        profile.childrenbirthrecords = _.values(childbirthRecords_1.ChildrenRecords);
        return profile;
    },
};
//# sourceMappingURL=mrsMYMomJobless.js.map