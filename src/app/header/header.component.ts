import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';

import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class headerComponent implements OnInit, OnDestroy {
    collapsed = true;
    isSaving = false;
    isFetching = false;
    errorOccurred = false;
    subscription: Subscription;
    isAuthenticated = false;

    constructor(private dataStorageService: DataStorageService,
        private authService: AuthService) { }

    ngOnInit() {
        this.subscription = this.authService.user.subscribe(
            user => {
                this.isAuthenticated = !!user;
            }
        );
    }

    onSaveRecipesData() {
        this.isSaving = true;
        this.dataStorageService.storeRecipes().subscribe(
            response => {
                this.isSaving = false;
            }, error => {
                if (error) {
                    this.isSaving = false;
                    this.errorOccurred = true;
                    setTimeout(() => {
                        this.errorOccurred = false;
                    }, 2000);
                }
            }
        );
    }
    onFetchRecipesData() {
        this.isFetching = true;
        this.dataStorageService.fetchRecipes().subscribe(
            response => {
                this.isFetching = false;
            }, error => {
                if (error) {
                    this.isFetching = false;
                    this.errorOccurred = true;
                    setTimeout(() => {
                        this.errorOccurred = false;
                    }, 2000);
                }
            }
        );
    }
    
    onLogout() {
        this.authService.logout();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}