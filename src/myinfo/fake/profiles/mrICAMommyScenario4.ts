
import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";
import { MyInfoCountryCode, MyInfoMaritialStatusCode, MyInfoNationalityCode, MyInfoOccupationCode, MyInfoRaceCode, MyInfoResidentialCode, MyInfoSexCode } from "../../domain";

const id = "S9005007I";
const name = ProfileArchetype.MRS_ICA_PR_MOMMY_SPOUSE_SCENARIO_4;

export const mrsICAMommyScenario4: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.sex.code = MyInfoSexCode.FEMALE;
		profile.sex.desc = MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE);
		profile.race = {
			"lastupdated": "2022-02-25",
			"code": MyInfoRaceCode.MALAY,
			"desc": MyInfoRaceCode.fn.toEnumDesc(MyInfoRaceCode.MALAY),
			"source": "1",
			"classification": "C",
			"unavailable": false,
		},
		profile.secondaryrace = {
			"code": null,
			"desc": null,
			"source": "1",
			"lastupdated": "2022-02-25",
			"unavailable": false,
			"classification": "C"
		},
		profile.dob = {
			"lastupdated": "2022-02-25",
			"source": "1",
			"classification": "C",
			"value": "1990-01-04",
			"unavailable": false,
		};
		profile.residentialstatus = {
			"lastupdated": "2018-06-01",
			"code": MyInfoResidentialCode.PR,
			"desc": MyInfoResidentialCode.fn.toEnumDesc(MyInfoResidentialCode.PR),
			"source": "1",
			"classification": "C",
			"unavailable": false,
		},
		profile.nationality.code = MyInfoNationalityCode.MALAYSIAN;
		profile.marriagecertno = {
			"lastupdated": "2022-02-25",
			"source": "1",
			"classification": "C",
			"value": "M56789",
			"unavailable": false,
		};
		profile.marriagedate = {
			"lastupdated": "2020-09-10",
			"source": "2",
			"classification": "C",
			"value": "2020-09-10",
			"unavailable": false,
		};
		profile.countryofmarriage = {
			"lastupdated": "2022-02-25",
			"code": MyInfoCountryCode.SINGAPORE,
			"desc": MyInfoCountryCode.fn.toEnumDesc(MyInfoCountryCode.SINGAPORE),
			"source": "1",
			"classification": "C",
			"unavailable": false,
		};
		profile.marital = {
			"lastupdated": "2022-02-25",
			"code": MyInfoMaritialStatusCode.MARRIED,
			"desc": MyInfoMaritialStatusCode.fn.toEnumDesc(MyInfoMaritialStatusCode.MARRIED),
			"source": "1",
			"classification": "C",
			"unavailable": false,
		};

		return profile;
	}
};
