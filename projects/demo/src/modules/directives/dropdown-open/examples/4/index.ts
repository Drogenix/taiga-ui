import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_ARROW} from '@taiga-ui/kit';

@Component({
    selector: 'tui-dropdown-open-example-4',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiDropdownOpenExample4 {
    readonly form = new UntypedFormGroup({
        control: new UntypedFormControl([]),
    });

    open = false;

    readonly items = ['Drafts', 'In Progress', 'Completed'];

    readonly arrow = TUI_ARROW;

    private get value(): readonly string[] {
        return this.form.get('control')?.value || [];
    }

    get appearance(): string {
        return this.length ? 'whiteblock-active' : 'whiteblock';
    }

    get length(): number {
        return this.value.length || 0;
    }

    get text(): string {
        switch (this.length) {
            case 0:
                return 'Select';
            case 1:
                return this.value[0];
            default:
                return `${this.length} selected`;
        }
    }
}