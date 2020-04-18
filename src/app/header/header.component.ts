import { Component } from "@angular/core";
import { DataStorageService } from '../shared/data-storage.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class headerComponent {
    collapsed = true;
    isSaving = false;
    isFetching = false;
    errorOccurred = false;
    constructor(private dataStorageService: DataStorageService) { }

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
}