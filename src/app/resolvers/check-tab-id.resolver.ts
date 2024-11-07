import { ResolveFn } from '@angular/router';

export const ALLOWED_TAB_IDS = [1, 2, 3, 4];

export const checkTabIdResolver: ResolveFn<string | null> = (route) => {
    const tabId = route.paramMap.get('id');
    if (!tabId) {
        return null;
    }
    if (ALLOWED_TAB_IDS.includes(+tabId)) {
        return tabId;
    }

    return null;
};
