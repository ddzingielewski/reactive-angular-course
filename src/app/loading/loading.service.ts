import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { concatMap, finalize, tap } from "rxjs/operators";

@Injectable()
export class LoadingService {
    constructor(){
        console.log('Loading Service has been created...');
    }
    private loadingSubject = new BehaviorSubject<boolean>(false);

    loading$: Observable<boolean> = this.loadingSubject.asObservable();

    showLoaderUntilCompleted<T>(obs$: Observable<T>): Observable<T> {
        return of(null).pipe(
            tap(() => this.loadingOn()),
            concatMap(() => obs$),
            finalize(() => this.loadingOff()));
    }

    loadingOn() {
        console.log('on');
        this.loadingSubject.next(true);

    }

    loadingOff() {
        console.log('off');
        this.loadingSubject.next(false);
    }

}