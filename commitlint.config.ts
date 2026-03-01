import type { UserConfig } from "@commitlint/types";
import { RuleConfigSeverity } from "@commitlint/types";

export default {
	"extends": ["@commitlint/config-conventional"],
	"rules": {
		"header-max-length": [RuleConfigSeverity.Error, "always", 72],
		"scope-enum": [
			RuleConfigSeverity.Error,
			"always",
			["core", "deps", "dev", "lint", "ui", "audio", "assets", "mtx"],
		],
	},
	"scope-enum": [
		RuleConfigSeverity.Warning,
		"always",
		[
			// Changes to development tools and documentation, including
			// linting
			"dev",
			// Changes to dependencies
			"deps",
			// Changes to any assets (image, audio, etc)
			"assets",
			// Releasing a new version
			"release",
		],
	],
} satisfies UserConfig;
