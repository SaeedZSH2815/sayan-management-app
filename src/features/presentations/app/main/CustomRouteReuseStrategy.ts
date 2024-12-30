import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';

interface RouteStorageObject {
    [key: string]: DetachedRouteHandle;
}

export class CustomRouteReuseStrategy implements RouteReuseStrategy {

    private storedRoutes: RouteStorageObject = {};

    private shouldStoreRoute(route: ActivatedRouteSnapshot): boolean {
        return route.routeConfig && route.routeConfig.data && route.routeConfig.data['reuse'];
    }

    shouldDetach(route: ActivatedRouteSnapshot): boolean {
      return false;
    }

    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
        if (handle && this.shouldStoreRoute(route)) {
            this.storedRoutes[this.getRouteKey(route)] = handle;
        }
    }

    shouldAttach(route: ActivatedRouteSnapshot): boolean {
           return false;
    }

    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
        if (!route.routeConfig || !this.storedRoutes[this.getRouteKey(route)]) {
            return null;
        }
        return this.storedRoutes[this.getRouteKey(route)];
    }

    shouldReuseRoute(future: ActivatedRouteSnapshot, current: ActivatedRouteSnapshot): boolean {
         return false;
    }

    private getRouteKey(route: ActivatedRouteSnapshot): string {
        return route.pathFromRoot.filter(u => u.routeConfig).map(u => u.routeConfig!.path).join('_');
    }
}
