import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stock-branch',
  styleUrls: ['stock-branch.component.css'],
  template: `
    <div [formGroup]="parent">
      <div formGroupName="store">
        <div>
          <input type="text" placeholder="Branch ID" formControlName="branch" />
        </div>

        <div ngxErrors="store.branch">
          <div class="error" ngxError="required" [when]="['dirty', 'touched']">
            Branch ID is required
          </div>
          <div class="error" ngxError="invalidBranch" when="dirty">
            Invalid branch code: 1 letter, 3 numbers
          </div>
          <div class="error" ngxError="unknownBranch" when="dirty">
            Unknown branch, please check the ID
          </div>
        </div>

        <div>
          <p>Errors: {{ myError.hasError('*', ['touched']) | json }}</p>
          <p>No Errors: {{ myError.isValid('required', ['dirty']) | json }}</p>
        </div>

        <input
          type="text"
          placeholder="Manager Code"
          formControlName="code"
          [class.errors]="myError.hasError('*', ['dirty'])"
          [class.no-errors]="myError.isValid('*', ['dirty'])"
        />

        <div ngxErrors="store.code" #myError="ngxErrors">
          <div class="error" ngxError="required" [when]="['dirty']">
            Field is required
          </div>
          <div class="error" ngxError="minlength" [when]="['dirty']">
            Min-length is {{ myError.getError('minlength')?.requiredLength }}
          </div>
          <div class="error" ngxError="maxlength" [when]="['dirty']">
            Max-length is {{ myError.getError('maxlength')?.requiredLength }}
          </div>
        </div>
      </div>
    </div>
  `
})
export class StockBranchComponent {
  @Input()
  parent: FormGroup;
}
