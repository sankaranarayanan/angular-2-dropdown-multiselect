import * as tslib_1 from "tslib";
import { MultiselectDropdown } from './dropdown.component';
import { MultiSelectSearchFilter } from './search-filter.pipe';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
var MultiselectDropdownModule = /** @class */ (function () {
    function MultiselectDropdownModule() {
    }
    MultiselectDropdownModule = tslib_1.__decorate([
        NgModule({
            imports: [CommonModule, ReactiveFormsModule],
            exports: [MultiselectDropdown, MultiSelectSearchFilter],
            declarations: [MultiselectDropdown, MultiSelectSearchFilter],
        })
    ], MultiselectDropdownModule);
    return MultiselectDropdownModule;
}());
export { MultiselectDropdownModule };
//# sourceMappingURL=dropdown.module.js.map