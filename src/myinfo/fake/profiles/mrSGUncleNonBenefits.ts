import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";

const id = "S8399420G";
const name = ProfileArchetype.MR_SG_UNCLE_NON_BENEFITS;

export const mrSGUncleNonBenefits: FakeProfile = {
	id,
	name,
	// tslint:disable-next-line: no-big-function
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.merdekagen.message.code = "1";
		profile.merdekagen.eligibility.value = false;
		profile.gstvoucher.exclusion.value = false;
		profile.gstvoucher.signup.value = false;
		profile.gstvoucher.gstregular.value = 0;
		profile.gstvoucher.gstmedisave.value = 0;
		profile.gstvoucher.gstspecial.value = 0;
		return profile;
	},
};
