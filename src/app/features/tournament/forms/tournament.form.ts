import { Validators } from "@angular/forms";

export const tournamentForm = {
    name: [null, [Validators.required, Validators.maxLength(100)]],
    location: [null, [Validators.maxLength(100)]],
    minPlayers: [2, [Validators.required, Validators.min(2), Validators.max(16)]],
    maxPlayers: [2, [Validators.required, Validators.min(2), Validators.max(16)]],
    eloMin:	[null, [Validators.min(0), Validators.max(3000)]],
    eloMax: [null, [Validators.min(0), Validators.max(3000)]],
    categories: [null, [Validators.required]],
    womenOnly: [false],
    endOfRegistrationDate: [new Date(), Validators.required, ],
}