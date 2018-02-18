import { Addon } from "./addon";
import { AddonSetup } from "./addon-setup";

export class AddonManager {
	getLogo(pkg: string): string {
		return Addon.prototype.getLogo(pkg);
	}

	getSetup(pkg: string): any[] {
		return Addon.prototype.getSetup(pkg);
	}

	getName(pkg: string): string {
		return Addon.prototype.getName(pkg);
	}

	getViewComponent(pkg: string) {
		return Addon.prototype.getComponent(pkg);
	}

	getSetupComponent(pkg: string) {
		return AddonSetup.prototype.getComponent(pkg);
	}

	getProviders() {
		return [...Addon.prototype.getProviders(), ...AddonSetup.prototype.getProviders()];
	}
}
