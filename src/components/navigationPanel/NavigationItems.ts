// Interfaces
import * as INTERFACES from './NavigationPanelInterfaces';

export const NavigationItems = (): INTERFACES.NavigationItem[] => {
	return [
		{
			name: 'Members',
			icon: 'user',
		},
		{
			name: 'Sports',
			icon: 'sport',
		},
	];
};
