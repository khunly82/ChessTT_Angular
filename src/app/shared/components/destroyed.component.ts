import { Directive, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

// parent component class should have empty directive decorator 
@Directive()
export abstract class DestroyedComponent implements OnDestroy {

    protected destroyed$: Subject<boolean> = new Subject<boolean>();

    ngOnDestroy(): void {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }
}