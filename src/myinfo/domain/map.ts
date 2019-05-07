import { invert } from "lodash";

export namespace sex {
	interface Code2Desc {
		"F": "Female";
		"M": "Male";
		"U": "Unknown";
	}
	interface Desc2Code {
		"Female": "F";
		"Male": "M";
		"Unknown": "U";
	}

	const codeToDesc: Code2Desc = {
		"F": "Female",
		"M": "Male",
		"U": "Unknown",
	};

	export const map = generateTwoWayMap<Code2Desc, Desc2Code>(codeToDesc);
}

export namespace comstatus {
	interface Code2Desc {
		"Y": "Eligible";
		"N": "Not Eligible";
	}
	interface Desc2Code {
		"Eligible": "Y";
		"Not Eligible": "N";
	}

	const codeToDesc: Code2Desc = {
		"Y": "Eligible",
		"N": "Not Eligible",
	};

	export const map = generateTwoWayMap<Code2Desc, Desc2Code>(codeToDesc);
}

export namespace lifestatus {

	interface Code2Desc {
		"A": "ALIVE";
		"D": "DECEASED";
	}
	interface Desc2Code {
		"ALIVE": "A";
		"DECEASED": "D";
	}

	const codeToDesc: Code2Desc = {
		"A": "ALIVE",
		"D": "DECEASED",
	};

	export const map = generateTwoWayMap<Code2Desc, Desc2Code>(codeToDesc);

}

export namespace validity {
	interface Code2Desc {
		"V": "Valid";
		"E": "Expired";
		"I": "Invalid";
		"N": "Not Holding PDL";
	}
	interface Desc2Code {
		"Valid": "V";
		"Expired": "E";
		"Invalid": "I";
		"Not Holding PDL": "N";
	}

	const codeToDesc: Code2Desc = {
		"V": "Valid",
		"E": "Expired",
		"I": "Invalid",
		"N": "Not Holding PDL",
	};
	export const map = generateTwoWayMap<Code2Desc, Desc2Code>(codeToDesc);
}


export namespace hdbtype {
	interface Code2Desc {
		"111": "1-ROOM FLAT (HDB)";
		"112": "2-ROOM FLAT (HDB)";
		"113": "3-ROOM FLAT (HDB)";
		"114": "4-ROOM FLAT (HDB)";
		"115": "5-ROOM FLAT (HDB)";
		"116": "EXECUTIVE FLAT (HDB)";
		"118": "STUDIO APARTMENT (HDB)";
	}
	interface Desc2Code {
		"1-ROOM FLAT (HDB)": "111";
		"2-ROOM FLAT (HDB)": "112";
		"3-ROOM FLAT (HDB)": "113";
		"4-ROOM FLAT (HDB)": "114";
		"5-ROOM FLAT (HDB)": "115";
		"EXECUTIVE FLAT (HDB)": "116";
		"STUDIO APARTMENT (HDB)": "118";
	}

	const codeToDesc: Code2Desc = {
		"111": "1-ROOM FLAT (HDB)",
		"112": "2-ROOM FLAT (HDB)",
		"113": "3-ROOM FLAT (HDB)",
		"114": "4-ROOM FLAT (HDB)",
		"115": "5-ROOM FLAT (HDB)",
		"116": "EXECUTIVE FLAT (HDB)",
		"118": "STUDIO APARTMENT (HDB)",
	};
	export const map = generateTwoWayMap<Code2Desc, Desc2Code>(codeToDesc);
}

export namespace residentialstatus {
	interface Code2Desc {
		"A": "Alien";
		"C": "Citizen";
		"P": "PR";
		"U": "Unknown";
		"N": "NOT APPLICABLE";
	}
	interface Desc2Code {
		"Alien": "A";
		"Citizen": "C";
		"PR": "P";
		"Unknown": "U";
		"NOT APPLICABLE": "N";
	}

	const codeToDesc: Code2Desc = {
		"A": "Alien",
		"C": "Citizen",
		"P": "PR",
		"U": "Unknown",
		"N": "NOT APPLICABLE",
	};
	export const map = generateTwoWayMap<Code2Desc, Desc2Code>(codeToDesc);
}

export namespace housingtype {
	interface Code2Desc {
		"121": "DETACHED HOUSE";
		"122": "SEMI-DETACHED HOUSE";
		"123": "TERRACE HOUSE";
		"131": "CONDOMINIUM";
		"132": "EXECUTIVE CONDOMINIUM";
		"139": "APARTMENT";
	}

	interface Desc2Code {
		"DETACHED HOUSE": "121";
		"SEMI-DETACHED HOUSE": "122";
		"TERRACE HOUSE": "123";
		"CONDOMINIUM": "131";
		"EXECUTIVE CONDOMINIUM": "132";
		"APARTMENT": "139";
	}
	const codeToDesc: Code2Desc = {
		"121": "DETACHED HOUSE",
		"122": "SEMI-DETACHED HOUSE",
		"123": "TERRACE HOUSE",
		"131": "CONDOMINIUM",
		"132": "EXECUTIVE CONDOMINIUM",
		"139": "APARTMENT",
	};

	export const map = generateTwoWayMap<Code2Desc, Desc2Code>(codeToDesc);
}

export namespace marital {
	interface Code2Desc {
		"1": "SINGLE";
		"2": "MARRIED";
		"3": "WIDOWED";
		"5": "DIVORCED";
	}

	interface Desc2Code {
		"SINGLE": "1";
		"MARRIED": "2";
		"WIDOWED": "3";
		"DIVORCED": "5";
	}
	const codeToDesc: Code2Desc = {
		"1": "SINGLE",
		"2": "MARRIED",
		"3": "WIDOWED",
		"5": "DIVORCED",
	};
	export const map = generateTwoWayMap<Code2Desc, Desc2Code>(codeToDesc);
}

export namespace edulevel {
	interface Code2Desc {
		"0": "NO FORMAL QUALIFICATION / PRE-PRIMARY / LOWER PRIMARY";
		"1": "PRIMARY";
		"2": "LOWER SECONDARY";
		"3": "SECONDARY";
		"4": "POST-SECONDARY (NON-TERTIARY): GENERAL & VOCATION";
		"5": "POLYTECHNIC DIPLOMA";
		"6": "PROFESSIONAL QUALIFICATION AND OTHER DIPLOMA";
		"7": "BACHELOR'S OR EQUIVALENT";
		"8": "POSTGRADUATE DIPLOMA / CERTIFICATE (EXCLUDING MASTER'S AND DOCTORATE)";
		"9": "MASTER'S AND DOCTORATE OR EQUIVALENT";
		"N": "MODULAR CERTIFICATION (NON-AWARD COURSES / NON-FULL QUALIFICATIONS)";
	}

	interface Desc2Code {
		"NO FORMAL QUALIFICATION / PRE-PRIMARY / LOWER PRIMARY": "0";
		"PRIMARY": "1";
		"LOWER SECONDARY": "2";
		"SECONDARY": "3";
		"POST-SECONDARY (NON-TERTIARY): GENERAL & VOCATION": "4";
		"POLYTECHNIC DIPLOMA": "5";
		"PROFESSIONAL QUALIFICATION AND OTHER DIPLOMA": "6";
		"BACHELOR'S OR EQUIVALENT": "7";
		"POSTGRADUATE DIPLOMA / CERTIFICATE (EXCLUDING MASTER'S AND DOCTORATE)": "8";
		"MASTER'S AND DOCTORATE OR EQUIVALENT": "9";
		"MODULAR CERTIFICATION (NON-AWARD COURSES / NON-FULL QUALIFICATIONS)": "N";
	}
	const codeToDesc: Code2Desc = {
		"0": "NO FORMAL QUALIFICATION / PRE-PRIMARY / LOWER PRIMARY",
		"1": "PRIMARY",
		"2": "LOWER SECONDARY",
		"3": "SECONDARY",
		"4": "POST-SECONDARY (NON-TERTIARY): GENERAL & VOCATION",
		"5": "POLYTECHNIC DIPLOMA",
		"6": "PROFESSIONAL QUALIFICATION AND OTHER DIPLOMA",
		"7": "BACHELOR'S OR EQUIVALENT",
		"8": "POSTGRADUATE DIPLOMA / CERTIFICATE (EXCLUDING MASTER'S AND DOCTORATE)",
		"9": "MASTER'S AND DOCTORATE OR EQUIVALENT",
		"N": "MODULAR CERTIFICATION (NON-AWARD COURSES / NON-FULL QUALIFICATIONS)",
	};
	export const map = generateTwoWayMap<Code2Desc, Desc2Code>(codeToDesc);
}

export namespace passtype {
	interface Code2Desc {
		"RPass": "Work Permit";
		"SPass": "S Pass";
		"P1Pass": "Employment Pass";
		"P2Pass": "Employment Pass";
		"QPass": "Employment Pass";
		"PEP": "Personalised Employment Pass";
		"WHP": "Work Holiday Pass";
		"TEP": "Training Employment Pass";
		"Entre": "EntrePass";
		"DP": "Dependent Pass";
		"LTVP": "Long Term Visit Pass";
		"LOC": "Letter of Consent";
		"MWP": "Miscellaneous Work Pass";
	}

	const codeToDesc: Code2Desc = {
		"RPass": "Work Permit",
		"SPass": "S Pass",
		"P1Pass": "Employment Pass",
		"P2Pass": "Employment Pass",
		"QPass": "Employment Pass",
		"PEP": "Personalised Employment Pass",
		"WHP": "Work Holiday Pass",
		"TEP": "Training Employment Pass",
		"Entre": "EntrePass",
		"DP": "Dependent Pass",
		"LTVP": "Long Term Visit Pass",
		"LOC": "Letter of Consent",
		"MWP": "Miscellaneous Work Pass",
	};
	export const map = { codeToDesc };
}

export namespace status {
	interface Code2Desc {
		"1": "LIVE";
		"2": "DE-REGISTERED";
	}

	interface Desc2Code {
		"LIVE": "1";
		"DE-REGISTERED": "2";
	}
	const codeToDesc: Code2Desc = {
		"1": "LIVE",
		"2": "DE-REGISTERED",
	};
	export const map = generateTwoWayMap<Code2Desc, Desc2Code>(codeToDesc);
}

/**
 * Generates codeToDesc, which is a key: value map and descToCode, which is an inverse of codeToDesc
 * Assumes value is a string/number and can be used as a inverse key
 * @param codeToDesc
 */
function generateTwoWayMap<Code2DescMap extends object, Desc2CodeMap extends object>(codeToDesc: Code2DescMap): { codeToDesc: Code2DescMap; descToCode: Desc2CodeMap } {
	return {
		codeToDesc,
		descToCode: invert(codeToDesc) as unknown as Desc2CodeMap,
	};
}
